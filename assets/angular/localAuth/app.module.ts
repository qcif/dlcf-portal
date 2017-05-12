import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { UserSimpleService } from '../shared/user.service-simple';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  providers: [UserSimpleService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
