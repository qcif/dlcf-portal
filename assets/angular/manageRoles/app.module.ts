import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { UserSimpleService } from '../shared/user.service-simple';
import { RolesService } from '../shared/roles-service';
import { ConfigService } from '../shared/config-service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent ],
  providers:    [ UserSimpleService, RolesService, ConfigService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
