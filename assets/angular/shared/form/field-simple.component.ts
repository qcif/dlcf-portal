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

import { Input, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldBase } from './field-base';
import { FormGroup } from '@angular/forms';
import * as _ from "lodash-lib";
// import moment from 'moment';
import moment from 'moment-es6';
declare var jQuery: any;
/**
 * Simple Component classes
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class SimpleComponent {
  @Input() public field: FieldBase<any>;
  @Input() public form: FormGroup;
  @Input() public fieldMap: any;
}

@Component({
  selector: 'textfield',
  template: `
  <div [formGroup]='form' class="form-group">
    <label [attr.for]="field.name">{{field.label}}</label><br/>
    <input [formControlName]="field.name"  [id]="field.name" [type]="field.type" class="form-control">
    <div class="text-danger" *ngIf="form.controls[field.name].hasError('required') && form.controls[field.name].touched">{{field.label}} is required</div>
  </div>
  `,
})
export class TextFieldComponent extends SimpleComponent {}

@Component({
  selector: 'text-area',
  template: `
  <div [formGroup]='form' class="form-group">
    <label [attr.for]="field.name">{{field.label}}</label><br/>
    <textarea [formControlName]="field.name" [attr.rows]="field.rows" [attr.cols]="field.cols" [id]="field.name" class="form-control">{{field.value}}</textarea>
    <div class="text-danger" *ngIf="form.controls[field.name].hasError('required') && form.controls[field.name].touched">{{field.label}} is required</div>
  </div>
  `,
})
export class TextAreaComponent extends SimpleComponent {}

@Component({
  selector: 'dropdownfield',
  template: `
  <div [formGroup]='form'>
     <label [attr.for]="field.name">{{field.label}}</label>
     <select [formControlName]="field.name" [id]="field.name" >
        <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
     </select>
     <div class="text-danger" *ngIf="form.controls[field.name].hasError('required') && form.controls[field.name].touched">{{field.label}} is required</div>
  </div>
  `,
})
export class DropdownFieldComponent extends SimpleComponent {

}
/****************************************************************************
Container components
*****************************************************************************/

@Component({
  selector: 'tabcontainer',
  template: `
  <div class="row" style="min-height:300px;">
    <div class="col-md-10">
      <div class="col-md-2">
        <ul class="nav nav-pills nav-stacked">
          <li *ngFor="let tab of field.fields" [ngClass]="{'active': tab.active}"><a href="#{{tab.id}}" data-toggle="tab" role="tab">{{tab.label}}</a></li>
        </ul>
      </div>
      <div class="col-md-8">
        <div class="tab-content">
      <!--
      Inlined the tab definition instead of creating it's own component otherwise Bootstrap refuses to toggle the panes
      Likely because of the extra DOM node (component selector) that it doesn't know what to do.
      TODO: remove inlining, or perhaps consider a 3rd-party NG2 tab component
      -->
          <div *ngFor="let tab of field.fields" [ngClass]="{'tab-pane': true, 'fade': true, 'active': tab.active==true, 'in': tab.active==true}" id="{{tab.id}}">
            <dmp-field *ngFor="let field of tab.fields" [field]="field" [form]="form" class="form-row" [fieldMap]="fieldMap"></dmp-field>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
})
export class TabContainerComponent extends SimpleComponent {
}
// Break in case of an emergency....
@Component({
  selector: 'htmlraw',
  template: `
  <ng-content></ng-content>
  `,
})
export class HtmlRawComponent extends SimpleComponent {

}
// For creating text blocks with help sections?
@Component({
  selector: 'text-block',
  template: `
  <div [ngSwitch]="field.type">
    <h1 *ngSwitchCase="'h1'" [ngClass]="field.cssClasses">{{field.value}}</h1>
    <h2 *ngSwitchCase="'h2'" [ngClass]="field.cssClasses">{{field.value}}</h2>
    <h3 *ngSwitchCase="'h3'" [ngClass]="field.cssClasses">{{field.value}}</h3>
    <h4 *ngSwitchCase="'h4'" [ngClass]="field.cssClasses">{{field.value}}</h4>
    <span *ngSwitchCase="'span'" [ngClass]="field.cssClasses">{{field.value}}</span>
    <p *ngSwitchDefault [ngClass]="field.cssClasses">{{field.value}}</p>
  </div>
  `,
})
export class TextBlockComponent extends SimpleComponent {
}

/**
Wrapped: https://github.com/nkalinov/ng2-datetime
Based on: https://bootstrap-datepicker.readthedocs.io/en/stable/
*/
@Component({
  selector: 'date-time',
  template: `
  <div [formGroup]='form' class="form-group">
    <label [attr.for]="field.name">{{field.label}}</label><br/>
    <datetime #dateTime [formControl]="form.controls[field.name]" (ngModelChange)="handleChange($event)" [timepicker]="field.timePickerOpts" [datepicker]="field.datePickerOpts" [hasClearButton]="field.hasClearButton"></datetime>
  </div>
  `
})
export class DateTimeComponent extends SimpleComponent {
  @ViewChild('dateTime', {read: ViewContainerRef}) dateTimeView: ViewContainerRef;

  updateStartDate(newVal) {
    const thisDate = moment(newVal);
    const jInst = jQuery(this.dateTimeView.element.nativeElement);
    const prevStartDate = moment(jInst.datepicker('getDate'));
    if (!prevStartDate.isValid() || thisDate.isAfter(prevStartDate)) {
      jInst.datepicker('update', newVal);
    }
    jInst.datepicker('setStartDate', newVal);
  }

  handleChange(newVal) {
    if (this.field.onChange) {
      _.forEach(this.field.onChange.setStartDate, (targetField) => {
        this.fieldMap[targetField].field.datePickerOpts.startDate = newVal;
        this.fieldMap[targetField].instance.updateStartDate(newVal);
      });
    }
  }
}
// For simple buttons
@Component({
  selector: 'simple-button',
  template: `
  <button type="{{field.type}}" [ngClass]="field.cssClasses" (click)="onClick($event)">{{field.label}}</button>
  `,
})
export class SimpleButtonComponent extends SimpleComponent {
  onClick(event) {
    this.fieldMap._rootComp[this.field.onClick_RootFn]();
  }
}
