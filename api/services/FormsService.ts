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
import {Sails, Model} from "sails";

declare var sails: Sails;
declare var Form: Model;
declare var _this;

export module Services {
  /**
   * Forms related functions...
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   * 
   */
  export class Forms extends services.Services.Core.Service {

    protected _exportedMethods: any = [
      'bootstrap',
      'getForm'
    ];

    public bootstrap = (defBrand): Observable<any> => {
      return super.getObservable(Form.find({branding:defBrand.id})).flatMap(form => {
        if (!form || form.length == 0) {
          sails.log.verbose("Bootstrapping form definitions... ");
          let defForm = sails.config.form[sails.config.form.defaultForm];
          let formObj = {
            name: sails.config.form.defaultForm,
            // form definition must be in string form?!
            fields: JSON.stringify(defForm.fields),
            branding: defBrand.id
          };
          return super.getObservable(Form.create(formObj));
        } else {
          sails.log.verbose("Form definition(s) exist.");
          return Observable.of(form);
        }
      });
    }

    public getForm = (name, brandId): Observable<any> => {
      return super.getObservable(Form.findOne({name: name, branding: brandId}));
    }

  }
}
module.exports = new Services.Forms().exports();
