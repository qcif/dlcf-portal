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
import { FieldBase } from './field-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from "lodash-lib";
import { RbValidator } from './validators';
/**
 * Contributor Model
 *
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class ContributorField extends FieldBase<any> {
  formGroup: FormGroup;
  nameColHdr: string;
  emailColHdr: string;
  roleColHdr: string;
  showHeader: boolean;
  roles: string[];
  validationMessages: any;
  groupFieldNames: string[];
  validators: any;
  enabledValidators: boolean;

  constructor(options) {
    super(options);
    this.controlType = 'textbox';
    this.nameColHdr = options['nameColHdr'] || 'Researcher Name';
    this.emailColHdr = options['emailColHdr'] || 'Email Address';
    this.roleColHdr = options['roleColHdr'] || 'Project Role';
    this.showHeader = options['showHeader'] || true;
    this.roles = options['roles'] || [];
    this.value = options['value'] || this.setEmptyValue();
    this.validationMessages = options['validationMessages'] || {required: { email: 'Email required', name: 'Name is required', role: 'Select a role'}, invalid: { email: 'Email format is incorrect'}};
    this.groupFieldNames = ['name', 'email', 'role'];
    this.validators = {
      name: [RbValidator.noEmptyInGroup(this, this.groupFieldNames)],
      email: [RbValidator.noEmptyInGroup(this, this.groupFieldNames), Validators.email],
      role: [RbValidator.noEmptyInGroup(this, this.groupFieldNames)]
    };
  }

  getFormElem(valueElem = undefined): any {
    if (valueElem) {
      this.value = valueElem;
    }
    this.formGroup = new FormGroup({name: new FormControl(this.value.name || null),
                                 email: new FormControl(this.value.email || null),
                                 role: new FormControl(this.value.role || null)});
    _.forEach(this.formGroup.controls, (c) => {
      c.valueChanges.subscribe(this.toggleValidator(c));
    });
    return this.formGroup;
  }

  toggleValidator(c) {
    return (value) => {
      if (value || _.find(this.formGroup.controls, c => { return c.value })) {
        this.enableValidators();
      } else {
        this.disableValidators();
      }
    };
  };

  enableValidators() {
    if (this.enabledValidators) {
      return;
    }
    this.enabledValidators = true;
    _.forEach(this.groupFieldNames, f => {
      this.formGroup.controls[f].setValidators(this.validators[f]);
      this.formGroup.controls[f].updateValueAndValidity();
    });
  }

  disableValidators() {
    if (!this.enabledValidators) {
      return;
    }
    this.enabledValidators = false;
    _.forEach(this.formGroup.controls, c => {
      c.setValidators(null);
      c.setErrors(null);
    });
  }

  postInit(value) {
    if (value) {
      this.value = value;
    } else {
      this.setEmptyValue();
    }
  }

  setEmptyValue() {
    this.value = {name: null, email: null, role: null};
    return this.value;
  }

}

@Component({
  selector: 'rb-contributor',
  template: `
  <div [formGroup]='field.formGroup' class="form-group" >
    <div class="row" *ngIf="field.showHeader">
      <div class="col-md-4"><label>{{field.nameColHdr}}</label></div>
      <div class="col-md-4"><label>{{field.emailColHdr}}</label></div>
      <div class="col-md-4"><label>{{field.roleColHdr}}</label></div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <input formControlName="name" type="text" class="form-control"/>
        <div class="text-danger" *ngIf="isEmpty('name')">{{field.validationMessages.required.name}}</div>
      </div>
      <div class="col-md-4">
        <input formControlName="email" type="text" class="form-control" />
        <div class="text-danger" *ngIf="field.formGroup.controls['email'].hasError('email')">{{field.validationMessages.invalid.email}}</div>
        <div class="text-danger" *ngIf="isEmpty('email')">{{field.validationMessages.required.email}}</div>
      </div>
      <div class="col-md-4">
        <select formControlName="role" class="form-control">
          <option *ngFor="let role of field.roles" [value]="role">{{role}}</option>
        </select>
        <div class="text-danger" *ngIf="isEmpty('role')">{{field.validationMessages.required.role}}</div>
      </div>
    </div>
  </div>
  `,
})
export class ContributorComponent extends SimpleComponent {

  isEmpty(fieldName) {
    return this.field.formGroup.controls[fieldName].errors && _.find(this.field.formGroup.controls[fieldName].errors.emptyFields, (f) => { return f == fieldName});
  }

}
