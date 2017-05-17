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

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { DmpEditComponent } from './dmp-edit.component';
import { DmpFieldComponent } from './dmp-field.component';
import { FieldControlService } from '../shared/form/field-control.service';
import { PlansService } from '../shared/form/plans.service';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { TextFieldComponent, DropdownFieldComponent, TabContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, SimpleButtonComponent, HtmlRawComponent } from '../shared/form/field-simple.component';
import { VocabField, VocabFieldComponent, VocabFieldLookupService } from '../shared/form/field-vocab.component';
import { RepeatableVocabComponent, RepeatableContributorComponent } from '../shared/form/field-repeatable.component';
import { ContributorComponent } from '../shared/form/field-contributor.component';
import { Ng2CompleterModule } from "ng2-completer";
@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, NKDatetimeModule, FormsModule, Ng2CompleterModule ],
  declarations: [ DmpEditComponent, DmpFieldComponent, TextFieldComponent, DropdownFieldComponent, TabContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, SimpleButtonComponent, VocabFieldComponent, RepeatableVocabComponent, ContributorComponent, RepeatableContributorComponent, HtmlRawComponent ],
  providers:    [ FieldControlService, PlansService, VocabFieldLookupService ],
  bootstrap:    [ DmpEditComponent ],
  entryComponents: [ TextFieldComponent, DropdownFieldComponent, TabContainerComponent, TextBlockComponent, TextAreaComponent, DateTimeComponent, SimpleButtonComponent, VocabFieldComponent, RepeatableVocabComponent, ContributorComponent, RepeatableContributorComponent, HtmlRawComponent ]
})
export class DmpModule { }
