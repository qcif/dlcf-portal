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
declare var FormsService, RecordsService;
/**
 * Package that contains all Controllers.
 */
import controller = require('../../../typescript/controllers/CoreController.js');
export module Controllers {
  /**
   * Responsible for all things related to a Record, includings Forms, etc.
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   */
  export class Record extends controller.Controllers.Core.Controller {

    /**
     * Exported methods, accessible from internet.
     */
    protected _exportedMethods: any = [
        'edit',
        'getForm',
        'create',
        'update'
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

    public edit(req, res) {
      const oid = req.param('oid') ? req.param('oid') : '';
      return this.sendView(req, res, 'record/edit', {oid: oid});
    }

    public getForm(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const name = req.param('name');
      const oid = req.param('oid');
      sails.log.verbose(`Getting form: ${name}, with oid: ${oid}`);
      FormsService.getForm(name, brand.id)
      .flatMap(form => {
        if (!_.isEmpty(oid) && !_.isEmpty(form)) {
          return RecordsService.getMeta(oid).flatMap(currentMeta => {
            if (_.isEmpty(currentMeta)) {
              Observable.throw(new Error(`Error, empty metadata for OID: ${oid}`));
              return;
            }
            this.mergeFields(form.fields, currentMeta.metadata);
            return Observable.of(form);
          });
        } else {
          return Observable.of(form);
        }
      })
      .flatMap(form => {
        return Observable.of(form);
      })
      .subscribe(form => {
        if (!_.isEmpty(form)) {
          this.ajaxOk(req, res, null, form);
        } else {
          this.ajaxFail(req, res, null, {message: `Failed to get form with name:${name}`});
        }
      }, error => {
        sails.log.error("Error getting form definition:");
        sails.log.error(error);
        this.ajaxFail(req, res, error.message);
      });

    }

    public create(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const record = req.body;
      record.brandId = brand.id;
      record.authorization = {creator: req.user.username};
      // TODO: validate metadata with permissions in the form
      RecordsService.create(record).subscribe(response => {
        if (response && response.code == "200") {
          response.success = true;
          this.ajaxOk(req, res, null, response);
        } else {
          this.ajaxFail(req, res, null, response);
        }
      }, error => {
        this.ajaxFail(req, res, `Failed to save record: ${error}`);
      });
    }

    public update(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const record = req.body;
      const oid = req.param('oid');

      RecordsService.getMeta(oid).flatMap(currentMeta => {
        if (_.isEmpty(currentMeta)) {
          return Observable.throw(new Error(`Failed to update meta, cannot find existing record with oid: ${oid}`));
        }
        if (currentMeta.brandId != brand.id) {
          return Observable.throw(new Error(`Failed to update meta, brand's don't match: ${currentMeta.brandId} != ${brand.id}, with oid: ${oid}`));
        }
        // TODO: validate metadata with permissions in the form
        currentMeta.metadata = record.metadata;
        currentMeta.authorization.lastSavedBy = req.user.username;
        return RecordsService.updateMeta(oid, currentMeta);
      })
      .subscribe(response => {
        if (response && response.code == "200") {
          response.success = true;
          this.ajaxOk(req, res, null, response);
        } else {
          this.ajaxFail(req, res, null, response);
        }
      }, error => {
        sails.log.error("Error updating meta:");
        sails.log.error(error);
        this.ajaxFail(req, res, error.message);
      });
    }

    protected flattenFields(fields, fieldArr) {
      _.map(fields, (f)=> {
        fieldArr.push(f);
        if (f.fields) {
          this.flattenFields(f.fields, fieldArr);
        }
      });
    }

    protected mergeFields(fields, metadata) {
      _.forEach(fields, field => {
        if (field.definition && field.definition.groupName == 'metadata') {
          if (_.has(metadata, field.definition.name)) {
            field.definition.value = metadata[field.definition.name];
          }
        }
        if (field.definition.fields) {
          this.mergeFields(field.definition.fields, metadata);
        }
      });
    }
    /**
     **************************************************************************************************
     **************************************** Override magic methods **********************************
     **************************************************************************************************
     */
  }
}

module.exports = new Controllers.Record().exports();
