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

import { Observable } from 'rxjs/Rx';
import services = require('../../typescript/services/CoreService.js');
import {Sails, Model} from "sails";
import * as request from "request-promise";

declare var sails: Sails;
declare var _this;

export module Services {
  /**
   * Records related functions...
   *
   * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
   *
   */
  export class Records extends services.Services.Core.Service {

    protected _exportedMethods: any = [
      'create',
      'updateMeta',
      'getMeta'
    ];

    public create(record): Observable<any> {
      const options = this.getOptions(sails.config.record.api.create.url);
      options.body = record;
      sails.log.verbose(options);
      return Observable.fromPromise(request[sails.config.record.api.create.method](options));
    }

    public updateMeta(oid, record): Observable<any> {
      const options = this.getOptions(sails.config.record.api.updateMeta.url, oid);
      options.body = record;
      return Observable.fromPromise(request[sails.config.record.api.updateMeta.method](options));
    }

    public getMeta(oid) {
      const options = this.getOptions(sails.config.record.api.getMeta.url, oid);
      return Observable.fromPromise(request[sails.config.record.api.getMeta.method](options));
    }

    protected getOptions(url, oid=null) {
      if (!_.isEmpty(oid)) {
        url = url.replace('$oid', oid);
      }
      return {url:url, json: true, headers: {'Authorization': `Bearer ${sails.config.redbox.apiKey}`}};
    }

  }
}
module.exports = new Services.Records().exports();
