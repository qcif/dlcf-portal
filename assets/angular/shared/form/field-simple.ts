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

import { FieldBase } from './field-base';
import * as _ from "lodash-lib";

/**
 * Text Field Model
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>

 */
export class TextField extends FieldBase<string> {
  type: string;

  constructor(options) {
    super(options);
    this.type = options['type'] || '';
    this.controlType = 'textbox';
  }
}

export class TextArea extends FieldBase<string> {
  rows: number;
  cols: number;

  constructor(options) {
    super(options);
    this.rows = options['rows'] || 5;
    this.cols = options['cols'] || null;
    this.controlType = 'textarea';
  }
}
/**
Ordinary dropdown field
*/
export class DropdownField extends FieldBase<string> {
  options: {key: string, value: string}[] = [];

  constructor(options) {
    super(options);
    this.options = options['options'] || [];
    this.controlType = 'dropdown';
  }
}

export class Container extends FieldBase<string> {
  fields: FieldBase[];
  active: boolean;
  type: string;

  constructor(options) {
    super(options);
    this.controlType = 'div';
    this.content = options['content'] || '';
    this.active = options['active'] || false;
    this.type = options['type'] || '';
  }
}

export class DateTime extends FieldBase<string> {
  datePickerOpts: any;
  timePickerOpts: any;
  onChange: any; // e.g. { 'setStartDate': ['name of pickers']}
  hasClearButton: boolean;

  constructor(options) {
    super(options);
    this.datePickerOpts = options['datePickerOpts'] || false;
    this.timePickerOpts = options['timePickerOpts'] || false;
    this.onChange = options['onChange'] || null;
    this.hasClearButton = options['hasClearButton'] || false;
    this.controlType = 'datetime';
  }
}

export class SimpleButton extends FieldBase<string> {
  onClick_RootFn: any;
  type: string;

  constructor(options) {
    super(options);
    this.onClick_RootFn = options['onClick_RootFn'] || null;
    this.type = options['type'] || 'button';
  }
}
