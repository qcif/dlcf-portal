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

import { ValidatorFn, Validators, AbstractControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

/**
 * Custom RB-Specific Validators - static methods only
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class RbValidator {

  /**
  * Forces validation on empty / null values
  */
  static noEmpty(control: AbstractControl ): {[key: string]: any} {
    return (control && (control.value === undefined || control.value == null || control.value.length == 0)) ? {'empty': true} : null;
  }

  /**
  *
  * Makes sure all fields have values otherwise this will return an error object containing the emptyFields
  *
  */
  static noEmptyInGroup(field: any, dependentFieldNames: string[]): ValidatorFn {
    return (control: AbstractControl ): {[key: string]: any} => {
      const group = field.formGroup;
      if (group) {
        const status = {hasEmptyValues: false, empty: []};
        _.forEach(dependentFieldNames, (f)=> {
          const isEmpty = RbValidator.noEmpty(group.controls[f]);
          if (isEmpty) {
            status.empty.push(f);
          }
          status.hasEmptyValues = status.hasEmptyValues || (isEmpty != null);
        });
        return status.hasEmptyValues ? {'empty': true, emptyFields:status.empty} : null;
      }
      return null;
    };
  }
}
