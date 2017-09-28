import { Component, Injectable, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserSimpleService } from '../shared/user.service-simple';
import { DashboardService } from '../shared/dashboard-service';
import { PlanTable, Plan } from '../shared/dashboard-models';
import * as _ from "lodash-lib";
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
  retiredPlans: PlanTable;
  saveMsgType = "info";
  initSubs: any;
  initTracker: any = {draftLoaded:false, activeLoaded: false};


  constructor( @Inject(DashboardService) protected dashboardService: DashboardService, @Inject(DOCUMENT) protected document: any,elementRef: ElementRef) {
    super();
    this.draftPlans = new PlanTable();
    this.activePlans = new PlanTable();
    this.retiredPlans = new PlanTable();
    this.branding = elementRef.nativeElement.getAttribute('branding');
    this.portal = elementRef.nativeElement.getAttribute('portal');
    this.initSubs = dashboardService.waitForInit((initStat:boolean) => {
      this.initSubs.unsubscribe();
      dashboardService.getDraftPlans(1).then((draftPlans: PlanTable) => {
        this.setDraftPlans(draftPlans);
        this.initTracker.draftLoaded = true;
        if (this.hasLoaded()) {
          this.setLoading(false);
        }
      });
      dashboardService.getActivePlans(1).then((activePlans: PlanTable) => {
         this.setActivePlans(activePlans);
         this.initTracker.activeLoaded = true;
         if (this.hasLoaded()) {
           this.setLoading(false);
         }
       });
       dashboardService.getRetiredPlans(1).then((retiredPlans: PlanTable) => {
          this.setRetiredPlans(retiredPlans);
          this.initTracker.activeLoaded = true;
          if (this.hasLoaded()) {
            this.setLoading(false);
          }
        });
    });

  }

  protected setDashboardTitle(planTable: PlanTable) {
    _.forEach(planTable.items, (plan: Plan) => {
      plan.dashboardTitle = (_.isUndefined(plan.title) || _.isEmpty(plan.title) || _.isEmpty(plan.title[0])) ? "Untitled" : plan.title;
    });
  }

  public hasLoaded() {
    return this.initTracker.draftLoaded && this.initTracker.activeLoaded;
  }

  public draftTablePageChanged(event:any):void {
    this.dashboardService.getDraftPlans(event.page).then((draftPlans: PlanTable) => { this.setDraftPlans(draftPlans); });
  }

  public activeTablePageChanged(event:any):void {
    this.dashboardService.getActivePlans(event.page).then((activePlans: PlanTable) => { this.setActivePlans(activePlans); });
  }

  public retiredTablePageChanged(event:any):void {
    this.dashboardService.getActivePlans(event.page).then((retiredPlans: PlanTable) => { this.setRetiredPlans(retiredPlans); });
  }

  public setDraftPlans(draftPlans) {
    this.setDashboardTitle(draftPlans);
    this.draftPlans = draftPlans;
  }

  public setActivePlans(activePlans) {
    this.setDashboardTitle(activePlans);
    this.activePlans = activePlans;
  }

  public setRetiredPlans(retiredPlans) {
    this.setDashboardTitle(retiredPlans);
    this.retiredPlans = retiredPlans;
  }

}
