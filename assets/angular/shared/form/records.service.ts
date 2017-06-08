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

import { Injectable, Inject }       from '@angular/core';
import { DropdownField, TextField } from './field-simple';
import { FieldBase }     from './field-base';
import { BaseService } from '../base-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FieldControlService } from './field-control.service';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash-lib";
/**
 * Plan Client-side services
 *
 *
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 */
@Injectable()
export class RecordsService extends BaseService {

  constructor (@Inject(Http) http, @Inject(FieldControlService) protected fcs: FieldControlService) {
    super(http);
  }

  getForm(oid: string = null, editable: boolean = true) {
    if (_.isEmpty(oid)) {
      oid = null;
    }
    return this.getFormFieldsMeta(this.config.defaultForm, editable, oid).then((form) => {
      return this.fcs.getLookupData(form.fieldsMeta).flatMap(fields => {
        form.fieldsMata = fields;
        return Observable.of(form);
      });
    });
  }

  getFormFields(formName, oid=null) {
    const url = oid ? `${this.brandingAndPortallUrl}/record/form/auto/${oid}` : `${this.brandingAndPortallUrl}/record/form/${formName}`;
    return this.http.get(url, this.options)
      .toPromise()
      .then((res) => this.extractData(res));
  }

  getFormFieldsMeta(formName, editable, oid=null) {
    return this.getFormFields(formName, oid).then(form => {
      if (form && form.fields) {
        form.fieldsMeta = this.fcs.getFieldsMeta(form.fields);
      } else {
        console.error("Error loading form:" + formName);
        throw form;
      }
      return form;
    });
  }

  create(record: any) {
    return this.http.post(`${this.brandingAndPortallUrl}/recordmeta/`, record, this.getOptionsClient())
    .toPromise()
    .then((res) => this.extractData(res) as RecordActionResult);
  }

  update(oid: string, record: any) {
    return this.http.put(`${this.brandingAndPortallUrl}/recordmeta/${oid}`, record, this.getOptionsClient())
    .toPromise()
    .then((res) => this.extractData(res) as RecordActionResult);
  }

  stepTo(oid: string, record: any, targetStep: string) {
    return this.http.post(`${this.brandingAndPortallUrl}/record/workflow/step/${targetStep}/${oid}`, record, this.getOptionsClient())
    .toPromise()
    .then((res) => this.extractData(res) as RecordActionResult);
  }

  getDashboardUrl() {
    return `${this.brandingAndPortallUrl}/dashboard`;
  }
}

export class RecordActionResult {
  success:boolean;
  oid: string;
  message: string;
}
