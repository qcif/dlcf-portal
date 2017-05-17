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

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import * as _ from "lodash-lib";
/**
 * Base class for all client-side services...
 *
 * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
 *
 */
export class BaseService {
  protected http: any;
  protected config: any;
  protected baseUrl:string;
  protected brandingAndPortallUrl:string;
  protected options: any;
  protected static __config: any;

  constructor (http, initCb=null) {
    this.http = http;
    this.getConfig().then( (config) => {
      this.config = config;
      this.baseUrl = this.config.baseUrl;
      this.brandingAndPortallUrl = `${this.baseUrl}/${this.config.branding}/${this.config.portal}`;
      console.log("Client API Base URL:" + this.baseUrl);
      console.log("Client Full Base URL:" + this.brandingAndPortallUrl);
      this.options = this.getOptionsClient();
      if (initCb) {
        initCb();
      }
    });
  }

  public waitForInit(delay=500) {
    if (this.baseUrl != null) {
      return Observable.of(true);
    }
    return Observable.interval(delay).flatMap(whatever => {
      return Observable.of(this.baseUrl != null);
    });
  }

  getConfig(): Promise<any> {
    if (BaseService.__config) {
      return Observable.of(_.cloneDeep(BaseService.__config)).toPromise();
    }

    return this.http.get('/dynamic/apiClientConfig.json').flatMap(res => {
      BaseService.__config = this.extractData(res);
      return Observable.of(_.cloneDeep(BaseService.__config));
    }).toPromise();
  }

  protected extractData(res: Response, parentField = null) {
    let body = res.json();
    if (parentField) {
        return body[parentField] || {};
    } else {
        return body || {};
    }
  }

  protected getOptions(headersObj) {
    let headers = new Headers(headersObj);
    return new RequestOptions({ headers: headers });
  }

  protected getOptionsClient(headersObj={}) {
    headersObj['X-Source'] = 'jsclient';
    return this.getOptions(headersObj);
  }
}
