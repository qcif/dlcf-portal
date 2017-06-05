import { Component, Injectable, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserSimpleService } from '../shared/user.service-simple';
import { DashboardService } from '../shared/dashboard-service';
import { PlanTable } from '../shared/dashboard-models';
import * as _ from "lodash";
import { LoadableComponent } from '../shared/loadable.component';
import { OnInit } from '@angular/core';
import { PaginationModule, TooltipModule} from 'ngx-bootstrap';


declare var pageData: any;
declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.html'
})

// TODO: find a way to remove jQuery dependency
@Injectable()
export class AppComponent extends LoadableComponent  {
  branding: string;
  portal: string;
  draftPlans: PlanTable;
  activePlans: PlanTable;
  saveMsgType = "info";
  initSubs;



  constructor( @Inject(DashboardService) protected dashboardService: DashboardService, @Inject(DOCUMENT) protected document: any,elementRef: ElementRef) {
    super();
    this.draftPlans = new PlanTable();
    this.activePlans = new PlanTable();
    this.branding = elementRef.nativeElement.getAttribute('branding');
    this.portal = elementRef.nativeElement.getAttribute('portal');

    this.initSubs = dashboardService.waitForInit(200).subscribe(initStat => {
      if (initStat) {
        this.initSubs.unsubscribe();
        dashboardService.getDraftPlans(1).then(draftPlans => { this.draftPlans = draftPlans; });
        dashboardService.getActivePlans(1).then(activePlans => { this.activePlans = activePlans; });
        this.setLoading(false);
      }
    });

  }

  public draftTablePageChanged(event:any):void {
    this.dashboardService.getDraftPlans(event.page).then(draftPlans => { this.draftPlans = draftPlans; });
  }

  public activeTablePageChanged(event:any):void {
    this.dashboardService.getActivePlans(event.page).then(activePlans => { this.activePlans = activePlans; });
  }




}
