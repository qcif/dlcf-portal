import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { UserSimpleService } from '../shared/user.service-simple';
import { DashboardService } from '../shared/dashboard-service';
import { PaginationModule } from 'ngx-bootstrap';


@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule, PaginationModule.forRoot() ],
  declarations: [ AppComponent ],
  providers:    [ UserSimpleService, DashboardService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
