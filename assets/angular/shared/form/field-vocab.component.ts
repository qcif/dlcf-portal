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

import { Input, Component, Injectable , Inject, OnInit} from '@angular/core';
import { SimpleComponent } from './field-simple.component';
import { FieldBase } from './field-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from "lodash-lib";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import { BaseService } from '../base-service';
import { CompleterService, CompleterData } from 'ng2-completer';
/**
 * Vocabulary Field
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class VocabField extends FieldBase<any> {
  public vocabId: string;
  public sourceData: any;
  public completerService;
  protected dataService: CompleterData;
  public initialValue;

  constructor(options) {
    super(options);
    this.hasLookup = true;
    this.vocabId = options['vocabId'] || '';
    this.controlType = 'textbox';
  }

  createFormModel(valueElem = undefined) {
    const group = {};
    if (valueElem) {
      this.value = valueElem;
    }
    this.formModel = new FormControl(this.value || '');
    if (this.value) {
      const init = _.cloneDeep(this.value);
      init.title = this.getTitle(this.value);
      this.initialValue = init;
    }
    if (this.required) {
      this.formModel.setValidators([Validators.required]);
    }
    return this.formModel;
  }

  postInit(value) {
    if (value) {
      this.value = value;
    } else {
      this.setEmptyValue();
    }
    this.initLookupData();
  }

  setEmptyValue() {
    this.value = null;
    return this.value;
  }

  initLookupData() {
    // Hack for creating the intended title...
    _.forEach(this.sourceData, data => {
      data.title = this.getTitle(data);
    });
    this.dataService = this.completerService.local(this.sourceData, 'label,notation', 'title');
  }

  getTitle(data): string {
    return `${data.notation} - ${data.label}`;
  }

}

@Injectable()
export class VocabFieldLookupService extends BaseService {

  constructor (@Inject(Http) http) {
    super(http);
  }

  getLookupData(field: VocabField) {
    const vocabId  = field.vocabId;
    const url = `${this.brandingAndPortallUrl}/${this.config.vocabRootUrl}/${vocabId}`;
    return this.http.get(url, this.options)
      .flatMap((res) => {
        const data = this.extractData(res);
        field.sourceData = data;
        field.postInit(field.value);
        return Observable.of(field);
      });
  }
}

@Component({
  selector: 'rb-vocab',
  template: `
  <div *ngIf="field.editMode" [formGroup]='form' class="form-group">
    <label>{{field.label}}</label>
    <ng2-completer [placeholder]="'Select a valid value'" [clearUnselected]="true" (selected)="onSelect($event)" [datasource]="field.dataService" [minSearchLength]="0" inputClass="form-control" [initialValue]="field.initialValue"></ng2-completer>
    <div class="text-danger" *ngIf="field.formModel.touched && field.formModel.hasError('required')">{{field.validationMessages.required}}</div>
  </div>
  <li *ngIf="!field.editMode" class="key-value-pair">
    <span *ngIf="field.label" class="key">{{field.label}}</span>
    <span class="value">{{field.value.notation}} - {{field.value.label}}</span>
  </li>
  `,
})
export class VocabFieldComponent extends SimpleComponent {

  constructor() {
    super();
  }

  onSelect(selected) {
    if (selected) {
      this.field.formModel.setValue({uri:selected.originalObject.uri, label: selected.originalObject.label, notation: selected.originalObject.notation});
    } else {
      this.field.formModel.setValue(null);
    }
  }
}
