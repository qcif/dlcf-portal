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

import { Input, Component, OnInit} from '@angular/core';
import { SimpleComponent } from './field-simple.component';
import { Container } from './field-simple';
import { FormArray } from '@angular/forms';
import { ContributorComponent } from './field-contributor.component';
import * as _ from "lodash-lib";
/**
 * Repeatable Field Container
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class RepeatableContainer extends Container {
  addButtonText: string;
  removeButtonText: string;
  control: any;
  skipClone: string[];
  forceClone: string[];

  constructor(options) {
    super(options);
    this.hasGroup = true;
    this.addButtonText = options['addButtonText'] || '';
    this.removeButtonText = options['removeButtonText'] || '';
    this.skipClone = options['skipClone'] || [];
    this.forceClone = options['forceClone'] || [];
  }

  getInitArrayEntry() {
    return [this.fields[0].getFormElem()];
  }

  getGroup(group, fieldMap) {
    fieldMap[this.name] = {field:this};
    if (!this.value || this.value.length == 0) {
      this.control = new FormArray(this.getInitArrayEntry());
    } else {
      let fieldCtr = 0;
      const baseField = this.fields[0];
      this.fields = _.map(this.value, valueElem => {
        let fieldClone = null;
        if (fieldCtr == 0) {
          fieldClone = baseField;
        } else {
          fieldClone = this.createNewElem(baseField);
        }
        if (_.isFunction(fieldClone.postInit)) {
          fieldClone.postInit(valueElem);
        }
        fieldCtr++;
        return fieldClone;
      });
      const elems = _.map(this.fields, field => {
        return field.getFormElem();
      });
      this.control = new FormArray(elems);
    }
    fieldMap[this.name].control = this.control;
    if (this.groupName) {
      if (group[this.groupName]) {
        group[this.groupName].addControl(this.name, this.control);
      } else {
        const fg = {};
        fg[this.name] = this.control;
        group[this.groupName] = fg;
      }
    } else {
      group[this.name] = this.control;
    }
  }

  createNewElem(baseFieldInst) {
    const newInst = new baseFieldInst.constructor(baseFieldInst.options);
    _.forEach(this.skipClone, (f)=> {
      newInst[f] = null;
    });
    _.forEach(this.forceClone, (f) => {
      newInst[f] = _.cloneDeep(baseFieldInst[f]);
    });
    newInst.postInit(null);
    return newInst;
  }

  addElem() {
    const newElem = this.createNewElem(this.fields[0]);
    this.fields.push(newElem);
    this.control.push(newElem.getFormElem());
    return newElem;
  }

  removeElem(index) {
    _.remove(this.fields, (val, idx) => { return idx == index });
    this.control.removeAt(index);
  }
}

export class RepeatableComponent extends SimpleComponent {
  addElem(event) {
    this.field.addElem();
  }

  removeElem(event, i) {
    this.field.removeElem(i);
  }
}

@Component({
  selector: 'repeatable',
  template: `
  <div [formGroup]='form' class="form-group" >
    <label>{{field.label}}</label>
    <div *ngFor="let fieldElem of field.fields; let i = index;" class="row">
      <span class="col-md-10">
        <rb-vocab [field]="fieldElem" [form]="form" [fieldMap]="fieldMap"></rb-vocab>
      </span>
      <span class="col-md-2">
        <button type='button' *ngIf="field.fields.length > 1" (click)="removeElem($event, i)" class="pull-left" style="margin-top: 25px;">{{field.removeButtonText}}</button>
      </span>
    </div>
    <div class="row">
      <button type='button' (click)="addElem($event)" class="pull-right" >{{field.addButtonText}}</button>
    </div>
  </div>
  `,
})
export class RepeatableVocabComponent extends RepeatableComponent {
}


@Component({
  selector: 'repeatable',
  template: `
  <div [formGroup]='form' class="form-group" >
    <div *ngFor="let fieldElem of field.fields; let i = index;" class="row">
      <span class="col-md-10">
        <rb-contributor [field]="fieldElem" [form]="form" [fieldMap]="fieldMap"></rb-contributor>
      </span>
      <span class="col-md-2">
        <button type='button' *ngIf="field.fields.length > 1" (click)="removeElem($event, i)" class="pull-left" [ngStyle]="{'margin-top': fieldElem.marginTop}" >{{field.removeButtonText}}</button>
      </span>
    </div>
    <div class="row">
      <button type='button' (click)="addElem($event)" class="pull-right" >{{field.addButtonText}}</button>
    </div>
  </div>
  `,
})
export class RepeatableContributorComponent extends RepeatableComponent implements OnInit {
  ngOnInit() {
    this.field.fields[0].marginTop = '25px';
  }

  addElem(event) {
    const newElem = this.field.addElem();
    newElem.marginTop = '5px';
  }

  removeElem(event, i) {
    this.field.removeElem(i);
    if (i == 0) {
      this.field.fields[0].marginTop = '25px';
      this.field.fields[0].showHeader = true;
    }
  }
}
