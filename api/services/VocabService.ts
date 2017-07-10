// Copyright (c) 2017 Queensland Cyber Infrastructure Foundation (http://www.qcif.edu.au/)
//
// GNU GENERAL PUBLIC LICENSE
//    Version 2, June 1991
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

import { Observable, Scheduler } from 'rxjs/Rx';
import services = require('../../typescript/services/CoreService.js');
import {Sails, Model} from "sails";
import * as request from "request-promise";


declare var CacheService, RecordsService, AsynchsService;
declare var sails: Sails;
declare var _this;
declare var Institution: Model;

export module Services {
  /**
   * Vocab related services...
   *
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   *
   */
  export class Vocab extends services.Services.Core.Service {

    protected _exportedMethods: any = [
      'bootstrap',
      'getVocab',
      'loadCollection',
      'findCollection'
    ];

    public bootstrap() {
      return Observable.from(sails.config.vocab.bootStrapVocabs)
      .flatMap(vocabId => {
        return this.getVocab(vocabId);
      })
      .last();
    }


    public getVocab = (vocabId): Observable<any> => {
      // Check cache
      return CacheService.get(vocabId).flatMap(data => {
        if (data) {
          sails.log.verbose(`Returning cached vocab: ${vocabId}`);
          return Observable.of(data);
        }
        if (sails.config.vocab.nonAnds && sails.config.vocab.nonAnds[vocabId]) {
          return this.getNonAndsVocab(vocabId);
        }
        const url = `${sails.config.vocab.rootUrl}${vocabId}/${sails.config.vocab.conceptUri}`;
        let items = null; // a flat array containing all the entries
        const rawItems = [];
        return this.getConcepts(url, rawItems).flatMap(allRawItems => {
          //   // we only are interested in notation, label and the uri
          items = _.map(allRawItems, rawItem => {
            return {uri: rawItem._about, notation: rawItem.notation, label: rawItem.prefLabel._value};
          });
          CacheService.set(vocabId, items);
          return Observable.of(items);
        });
      });
    }

    // have to do this since ANDS endpoint ignores _pageSize
    protected getConcepts(url, rawItems) {
      console.log(`Getting concepts....${url}`);
      const options = {url:url, json: true};
      return Observable.fromPromise(request.get(options))
      .flatMap((response) => {
        rawItems = rawItems.concat(response.result.items);
        if (response.result && response.result.next) {
          return this.getConcepts(response.result.next, rawItems);
        }
        return Observable.of(rawItems);
      });
    }

    protected getNonAndsVocab(vocabId) {
      const url = sails.config.vocab.nonAnds[vocabId].url;
      const options = {url: url, json:true};
      return Observable.fromPromise(request.get(options)).flatMap(response => {
        CacheService.set(vocabId, response);
        return Observable.of(response);
      });
    }

    loadCollection(collectionId, progressId, force=false) {
      const getMethod = sails.config.vocab.collection[collectionId].getMethod;
      const bufferCount = sails.config.vocab.collection[collectionId].processingBuffer;
      const processWindow = sails.config.vocab.collection[collectionId].processingTime;
      let collectionData = null;
      return this[getMethod](collectionId).flatMap(data => {
        if (_.isEmpty(data) || force) {
          // return a receipt and then start the process of loading...
          const url = sails.config.vocab.collection[collectionId].url;
          sails.log.verbose(`Loading collection: ${collectionId}, using url: ${url}`);
          const methodName = sails.config.vocab.collection[collectionId].saveMethod;
          const options = {url: url, json:true};
          return Observable.fromPromise(request.get(options))
          .flatMap(response => {
            sails.log.verbose(`Got response retrieving data for collection: ${collectionId}, saving...`);
            sails.log.verbose(`Number of items: ${response.length}`);
            const itemsToSave = _.chunk(response, bufferCount);
            collectionData = itemsToSave;
            // sails.log.verbose(collectionData);
            const updateObj = { currentIdx: 0, targetIdx: collectionData.length };
            return AsynchsService.update({id:progressId}, updateObj);
          })
          .flatMap(updateResp => {
            sails.log.verbose(`Updated asynch progress...`);
            return Observable.from(collectionData);
          })
          .map((buffer, i) => {
            setTimeout(()=> {
              sails.log.verbose(`Processing chunk: ${i}`);
              return this.saveCollectionChunk(methodName, buffer, i)
              .flatMap(saveResp => {
                sails.log.verbose(`Updating chunk progress...${i}`);
                if (i == collectionData.length) {
                  sails.log.verbose(`Asynch completed.`);
                  return AsynchsService.finish(progressId);
                } else {
                  return AsynchsService.update({id: progressId}, {currentIdx: i+1, status: 'processing'});
                }
              });
            }, i * processWindow);
          })
          .concat()
        } else {
          sails.log.verbose(`Collection already loaded: ${collectionId}`);
          return Observable.of(null);
        }
      });
    }

    protected saveCollectionChunk(methodName, buffer, i) {
      return this[methodName](buffer);
    }

    findCollection(collectionId, searchString) {
      return this[sails.config.vocab.collection[collectionId].searchMethod](searchString);
    }

    saveInst(instItems) {
      _.forEach(instItems, item => {
        // added for Solr case-insensi search
        item.text_name = item.name;
      });
      return RecordsService.createBatch(sails.config.vocab.collection['grid'].type, instItems, 'grid_id');
    }

    searchInst(searchString, fields) {
      return RecordsService.search(sails.config.vocab.collection['grid'].type, sails.config.vocab.collection['grid'].searchField, searchString, sails.config.vocab.collection['grid'].fields);
    }

    getInst(collectionId) {
      return RecordsService.getOne(sails.config.vocab.collection[collectionId].type);
    }
  }
}
module.exports = new Services.Vocab().exports();
