import { Injectable, Inject} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BaseService } from '../shared/base-service'
import { PlanTable } from './dashboard-models'

@Injectable()
export class DashboardService extends BaseService {

  constructor( @Inject(Http) http) {
    super(http);
  }

  getActivePlans(pageNumber:number): Promise<PlanTable> {
    var dummyResponse = this.getDummyActivePlans(pageNumber);

    return this.http.get(`${this.brandingAndPortallUrl}/admin/roles`, this.options)
      .toPromise()
      .then((res) => dummyResponse as PlanTable);
  }

  getDraftPlans(pageNumber:number): Promise<PlanTable> {
    var dummyResponse = this.getDummyActivePlans(pageNumber);

    return this.http.get(`${this.brandingAndPortallUrl}/admin/roles`, this.options)
      .toPromise()
      .then((res) => dummyResponse as PlanTable);
  }

  getDummyActivePlans(pageNumber:number) {
    var dummyResponse = {};
    dummyResponse["totalItems"] = 30;
    dummyResponse["currentPage"] = pageNumber;
    dummyResponse["noItems"] = 10;

    var items = [];

    for (var i = 0; i < 10; i++) {
      var item = {};
      item["oid"] = this.getUUID();
      item["title"] = "Data management plan " + Math.random().toString(36).substring(7);
      item["dateCreated"] = "17/03/2017 1:00AM"
      item["dateModified"] = "23/05/2017 2:55PM";
      items.push(item);
    }

    dummyResponse["items"] = items;
    return dummyResponse;
  }

  getUUID() {
    //// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    var uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
      switch (ii) {
        case 8:
        case 20:

          uuid += (Math.random() * 16 | 0).toString(16);
          break;
        case 12:

          uuid += '4';
          break;
        case 16:

          uuid += (Math.random() * 4 | 8).toString(16);
          break;
        default:
          uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
  }
}
