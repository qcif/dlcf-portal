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
import moment from 'moment-es6';
declare var FormsService, RecordsService, WorkflowStepsService;
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
        'update',
        'stepForward',
        'stepBack'
    ];

    /**
     **************************************************************************************************
     **************************************** Add custom methods **************************************
     **************************************************************************************************
     */

    public bootstrap() {

    }

    public edit(req, res) {
      const oid = req.param('oid') ? req.param('oid') : '';
      return this.sendView(req, res, 'record/edit', {oid: oid});
    }

    public getForm(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const name = req.param('name');
      const oid = req.param('oid');
      sails.log.verbose(`Getting form: ${name}, with oid: ${oid}`);
      let obs = null;
      if (_.isEmpty(oid)) {
        obs = FormsService.getForm(name, brand.id);
      } else {
        // defaults to retrieve the form of the current workflow state...
        obs = RecordsService.getMeta(oid).flatMap(currentRec => {
          if (_.isEmpty(currentRec)) {
            return Observable.throw(new Error(`Error, empty metadata for OID: ${oid}`));
          }
          if (!RecordsService.hasEditAccess(brand, req.user, currentRec)) {
            return Observable.throw(new Error(`User doesn't have access to this record.`));
          }
          return FormsService.getForm(currentRec.form, brand.id).flatMap(form=> {
            if (_.isEmpty(form)) {
              return Observable.throw(new Error(`Error, getting form ${currentRec.form} for OID: ${oid}`));
            }
            this.mergeFields(form.fields, currentRec.metadata);
            return Observable.of(form);
          });
        });
      }
      obs.subscribe(form => {
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
      const metadata = req.body;
      const record = {};
      record.brandId = brand.id;
      record.createdBy = req.user.username;
      record.createDate = moment().format();
      record.authorization = {view: [req.user.username], edit: [req.user.username]};
      record.metadata = metadata;
      WorkflowStepsService.getFirst(brand).subscribe(wfStep => {
        this.updateWorkflowStep(record, wfStep);
        RecordsService.create(brand, record).subscribe(response => {
          if (response && response.code == "200") {
            response.success = true;
            this.ajaxOk(req, res, null, response);
          } else {
            this.ajaxFail(req, res, null, response);
          }
        }, error => {
          this.ajaxFail(req, res, `Failed to save record: ${error}`);
        });
      })
    }

    public update(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const metadata = req.body;
      const oid = req.param('oid');

      this.getRecord(oid).flatMap(currentRec => {
        currentRec.metadata = metadata;
        return this.updateMetadata(brand, oid, currentRec, req.user.username);
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

    protected updateWorkflowStep(currentRec, nextStep) {
      if (nextStep) {
        currentRec.workflow = nextStep.config.workflow;
        currentRec.form = nextStep.config.form;
        currentRec.authorization.viewRoles = nextStep.config.authorization.viewRoles;
        currentRec.authorization.editRoles = nextStep.config.authorization.editRoles;
      }
    }

    protected getRecord(oid) {
      return RecordsService.getMeta(oid).flatMap(currentRec => {
        if (_.isEmpty(currentRec)) {
          return Observable.throw(new Error(`Failed to update meta, cannot find existing record with oid: ${oid}`));
        }
        return Observable.of(currentRec);
      });
    }

    protected updateMetadata(brand, oid, currentRec, username) {
      if (currentRec.brandId != brand.id) {
        return Observable.throw(new Error(`Failed to update meta, brand's don't match: ${currentRec.brandId} != ${brand.id}, with oid: ${oid}`));
      }
      currentRec.lastSavedBy = username;
      currentRec.lastSaveDate = moment().format();
      return RecordsService.updateMeta(brand, oid, currentRec);
    }

    public stepForward(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const metadata = req.body;
      const oid = req.param('oid');

      return this.getRecord(oid).flatMap(currentRec => {
        return WorkflowStepsService.get(brand, currentRec.workflow.next)
        .flatMap(nextStep => {
          sails.log.verbose("Current rec:");
          sails.log.verbose(currentRec);
          sails.log.verbose("Nex step:");
          sails.log.verbose(nextStep);
          this.updateWorkflowStep(currentRec, nextStep);
          return this.updateMetadata(brand, oid, currentRec, req.user.username);
        });
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

    public stepBack(req, res) {
      const brand = BrandingService.getBrand(req.session.branding);
      const metadata = req.body;
      const oid = req.param('oid');

      return this.getRecord(oid).flatMap(currentRec => {
        return WorkflowStepsService.get(brand, currentRec.workflow.next).flatMap(nextStep => {
          this.updateWorkflowStep(currentRec, nextStep);
          return this.updateMetadata(brand, oid, currentRec, req.user.username);
        });
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

    protected mergeFields(fields, metadata) {
      _.forEach(fields, field => {
        if (_.has(metadata, field.definition.name)) {
          field.definition.value = metadata[field.definition.name];
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
