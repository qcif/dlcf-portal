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

import { Observable } from 'rxjs/Rx';
import services = require('../../typescript/services/CoreService.js');
import {Sails,} from "sails";
import * as request from "request-promise";

declare var CacheService;
declare var sails: Sails;
declare var _this;

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
      'getVocab'
    ];

    public bootstrap() {
      return Observable.from(sails.config.vocab.bootStrapVocabs)
      .flatMap(vocabId => {
        return this.getVocab(vocabId);
      });
    }


    public getVocab = (vocabId): Observable<any> => {
      // Check cache
      return CacheService.get(vocabId).flatMap(data => {
        if (data) {
          sails.log.verbose(`Returning cached vocab: ${vocabId}`);
          return Observable.of(data);
        }
        if (sails.config.vocab.nonAnds[vocabId]) {
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
  }
}
module.exports = new Services.Vocab().exports();
