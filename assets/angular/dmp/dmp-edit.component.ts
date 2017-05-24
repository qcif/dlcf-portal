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

import { Component, Inject, Input, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecordsService } from '../shared/form/records.service';
import { LoadableComponent } from '../shared/loadable.component';
import { FieldControlService } from '../shared/form/field-control.service';
import * as _ from "lodash-lib";
/**
 * Main DMP Edit component
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
@Component({
  moduleId: module.id,
  selector: 'dmp-edit',
  templateUrl: './dmp-edit.html'
})

export class DmpEditComponent extends LoadableComponent {
  @Input() oid: string;
  fields: any[] = [];
  form: FormGroup;
  initSubs: any;
  fieldMap: any;
  payLoad: any;
  status: any;

  constructor(
    elm: ElementRef,
    @Inject(RecordsService) protected RecordsService: RecordsService,
    @Inject(FieldControlService) protected fcs: FieldControlService) {
    super();
    this.status = {};
    this.initSubs = RecordsService.waitForInit(200).subscribe(initStat => {
      if (initStat) {
        this.initSubs.unsubscribe();
        this.fieldMap = {_rootComp:this};
        this.oid = elm.nativeElement.getAttribute('oid');
        console.log("Loading form with OID:"+ this.oid);
        this.RecordsService.getPlanFields(this.oid).then(obs => {
          obs.subscribe(fields => {
            if (fields) {
              this.fields = fields;
              this.rebuildForm();
            }
          });
        });
      }
    });
  }

  onSubmit() {
    this.setSaving();
    this.form.value.metadata = this.formatValues(this.form.value.metadata);
    this.payLoad = JSON.stringify(this.form.value);
    console.log("Saving the following values:");
    console.log(this.payLoad);
    if (_.isEmpty(this.oid)) {
      this.RecordsService.create(this.payLoad).then(res=>{
        this.clearSaving();
        console.log("Create Response:");
        console.log(res);
        if (res.success) {
          this.oid = res.oid;
          this.setSuccess('Saved successfully.');
        } else {
          this.setError(`Error while saving: ${res.message}`);
        }
      });
    } else {
      this.RecordsService.update(this.oid, this.payLoad).then(res=>{
        this.clearSaving();
        console.log("Update Response:");
        console.log(res);
        if (res.success) {
          this.setSuccess('Saved successfully.');
        } else {
          this.setError(`Error while saving: ${res.message}`);
        }
      });
    }
  }

  setStatus(stat, msg) {
    this.status[stat] = {msg: msg};
  }

  clearStatus(stat) {
    this.status[stat] = null;
  }

  setSaving(msg='Saving...') {
    this.clearError();
    this.clearSuccess();
    this.setStatus('saving', msg);
  }

  clearSaving() {
    this.clearStatus('saving');
  }

  setError(msg) {
    this.clearSaving();
    this.setStatus('error', msg);
  }

  clearError() {
    this.clearStatus('error');
  }

  setSuccess(msg) {
    this.clearSaving();
    this.setStatus('success', msg);
  }

  clearSuccess() {
    this.clearStatus('success');
  }

  rebuildForm() {
    this.form = this.fcs.toFormGroup(this.fields, this.fieldMap);
  }

  makeActive() {
    console.log("Make this plan active!!!");
    console.log(this.form.value);
  }

  formatValues(data) {
    const formVals = _.cloneDeep(data);
    _.forOwn(formVals, (val, key) => {
      if (_.isFunction(this.fieldMap[key].instance.formatValue)) {
        const newVal = this.fieldMap[key].instance.formatValue();
        formVals[key] = newVal;
      }
    });
    return formVals;
  }

}
