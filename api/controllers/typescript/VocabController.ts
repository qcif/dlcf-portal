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

//<reference path='./../../typings/loader.d.ts'/>
declare var module;
declare var sails;
import { Observable } from 'rxjs/Rx';
declare var VocabService;
/**
 * Package that contains all Controllers.
 */
import controller = require('../../../typescript/controllers/CoreController.js');
export module Controllers {
  /**
   * Vocabulary related features....
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   *
   */
  export class Vocab extends controller.Controllers.Core.Controller {

    /**
     * Exported methods, accessible from internet.
     */
    protected _exportedMethods: any = [
        'get',
        'getCollection',
        'loadCollection'
    ];

    /**
     **************************************************************************************************
     **************************************** Override default methods ********************************
     **************************************************************************************************
     */

    /**
     **************************************************************************************************
     **************************************** Add custom methods **************************************
     **************************************************************************************************
     */

    public get(req, res) {
      const vocabId = req.param("vocabId");
      VocabService.getVocab(vocabId).subscribe(data => {
        this.ajaxOk(req, res, null, data);
      }, error => {
        sails.log.error(`Failed to get vocab: ${vocabId}`);
        sails.log.error(error);
        this.ajaxFail(req, res, null, [], true);
      });
    }

    public getCollection(req, res) {
      const collectionId = req.param('collectionId');
      const searchString = req.query.search ? req.query.search.toLowerCase() : '';
      VocabService.findCollection(collectionId, searchString).subscribe(collections => {
        this.ajaxOk(req, res, null, collections, true);
      }, error => {
        sails.log.error(`Failed to find collection: ${collectionId}, using: '${searchString}'`);
        sails.log.error(error);
        // return empty data...
        this.ajaxFail(req, res, null, [], true);
      });
    }

    public loadCollection(req, res) {
      const collectionId = req.param('collectionId');
      VocabService.loadCollection(collectionId).subscribe(receipt => {
        this.ajaxOk(req, res, null, {status: 'queued', message: 'All good.', receipt: receipt}, true);
      }, error => {
        this.ajaxFail(req, res, null, error, true);
      });
    }

    /**
     **************************************************************************************************
     **************************************** Override magic methods **********************************
     **************************************************************************************************
     */
  }
}

module.exports = new Controllers.Vocab().exports();
