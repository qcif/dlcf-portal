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

import { Component, Inject }       from '@angular/core';
import { PlansService } from '../shared/form/plans.service';
import { LoadableComponent } from '../shared/loadable.component';
import { FieldControlService } from '../shared/form/field-control.service';
import * as _ from "lodash";
/**
 * Main DMP Edit component
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 * 
 */
@Component({
  selector: 'dmp-edit',
  templateUrl: '/angular/dmp/dmp-edit.html'
})

export class DmpEditComponent extends LoadableComponent {
  fields: any[] = [];
  form: FormGroup;
  initSubs;
  fieldMap: any;

  constructor(
    @Inject(PlansService) protected plansService: PlansService,
    @Inject(FieldControlService) protected fcs: FieldControlService) {
    super();
    this.initSubs = plansService.waitForInit(200).subscribe(initStat => {
      if (initStat) {
        this.initSubs.unsubscribe();
        this.fieldMap = {_rootComp:this};
        this.plansService.getPlanFields().then(obs => {
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
    console.log(this.form);
    this.payLoad = JSON.stringify(this.form.value);
    console.log("Saving the following values:");
    console.log(this.payLoad);
  }

  rebuildForm() {
    this.form = this.fcs.toFormGroup(this.fields, this.fieldMap);
  }

  makeActive() {
    console.log("Make this plan active!!!");
  }

}
