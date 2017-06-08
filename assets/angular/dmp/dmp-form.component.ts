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
  selector: 'dmp-form',
  templateUrl: './dmp-form.html'
})

export class DmpFormComponent extends LoadableComponent {
  @Input() oid: string;
  @Input() editMode: boolean;

  fields: any[] = [];
  form: FormGroup;
  initSubs: any;
  fieldMap: any;
  payLoad: any;
  status: any;
  criticalError: any;
  formDef: any;

  constructor(
    elm: ElementRef,
    @Inject(RecordsService) protected RecordsService: RecordsService,
    @Inject(FieldControlService) protected fcs: FieldControlService
  ) {
    super();
    this.status = {};
    this.initSubs = RecordsService.waitForInit(200).subscribe(initStat => {
      if (initStat) {
        this.initSubs.unsubscribe();
        this.fieldMap = {_rootComp:this};
        this.oid = elm.nativeElement.getAttribute('oid');
        this.editMode = elm.nativeElement.getAttribute('editMode') == "true";
        console.log(`Loading form with OID: ${this.oid}, on edit mode:${this.editMode}`);
        this.RecordsService.getForm(this.oid, this.editMode).then(obs => {
          obs.subscribe(form => {
            this.formDef = form;
            if (form.fieldsMeta) {
              this.fields = form.fieldsMeta;
              this.rebuildForm();
            }
          });
        }).catch(err => {
          console.log("Error loading form...");
          console.log(err);
          if (err.status == false) {
              this.criticalError = err.message;
          }
          this.setLoading(false);
        });
      }
    });
  }

  onSubmit(nextStep = false, targetStep=null) {
    if (!this.isValid()) {
      return;
    }
    this.setSaving(this.formDef.messages.saving);
    const values = this.formatValues(this.form.value);
    this.payLoad = JSON.stringify(values);
    console.log("Saving the following values:");
    console.log(this.payLoad);
    if (_.isEmpty(this.oid)) {
      this.RecordsService.create(this.payLoad).then(res=>{
        this.clearSaving();
        console.log("Create Response:");
        console.log(res);
        if (res.success) {
          this.oid = res.oid;
          this.setSuccess(this.formDef.messages.saveSuccess);
          if (nextStep) {
            this.stepTo(targetStep);
          }
        } else {
          this.setError(`${this.formDef.messages.saveError} ${res.message}`);
        }
      }).catch(err=>{
        this.setError(`${this.formDef.messages.saveError} ${res.message}`);
      });
    } else {
      this.RecordsService.update(this.oid, this.payLoad).then(res=>{
        this.clearSaving();
        console.log("Update Response:");
        console.log(res);
        if (res.success) {
          this.setSuccess(this.formDef.messages.saveSuccess);
        } else {
          this.setError(`${this.formDef.messages.saveError} ${res.message}`);
        }
      }).catch(err=>{
        this.setError(`${this.formDef.messages.saveError} ${err}`);
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
    this.setLoading(false);
  }

  triggerValidation() {
    _.forOwn(this.fieldMap, (fieldEntry, fieldName) => {
      if (!_.isEmpty(fieldName) && !_.startsWith(fieldName, '_')) {
        fieldEntry.field.triggerValidation();
      }
    });
  }

  isValid() {
    this.triggerValidation();
    if (!this.form.valid) {
      this.setError('There are issues in the form.');
      this.setError(this.formDef.messages.validationFail);
      return false;
    }
    return true;
  }

  stepTo(targetStep) {
    if (!this.isValid()) {
      return;
    }
    if (_.isEmpty(this.oid)) {
      this.onSubmit(true, targetStep);
    } else {
      this.setSaving(this.formDef.messages.saving);
      const values = this.formatValues(this.form.value);
      this.payLoad = JSON.stringify(values);
      console.log(this.payLoad);
      this.RecordsService.stepTo(this.oid, this.payLoad, targetStep).then(res => {
        this.clearSaving();
        console.log("Update Response:");
        console.log(res);
        if (res.success) {
          this.setSuccess(this.formDef.messages.saveSuccess);
          window.location.href = this.RecordsService.getDashboardUrl();
        } else {
          this.setError(`${this.formDef.messages.saveError} ${res.message}`);
        }
      }).catch(err=>{
        this.setError(`${this.formDef.messages.saveError} ${err}`);
      });
    }
  }

  formatValues(data) {
    const formVals = _.cloneDeep(data);
    _.forOwn(formVals, (val, key) => {
      if (_.isFunction(this.fieldMap[key].instance.formatValue)) {
        const newVal = this.fieldMap[key].instance.formatValue(formVals[key]);
        formVals[key] = newVal;
      }
    });
    return formVals;
  }

  isSaving() {
    return this.status.saving;
  }

}
