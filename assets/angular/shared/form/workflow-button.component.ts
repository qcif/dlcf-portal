import { Component } from '@angular/core';
import { SimpleButtonComponent } from './field-simple.component';
import { FieldBase } from './field-base';
import { SimpleButton } from './field-simple';

export class WorkflowStepButton extends SimpleButton {
  targetStep: string;

  constructor(options) {
    super(options);
    this.targetStep = options['targetStep'] || null;
  }
}

// For workflow buttons
@Component({
  selector: 'workflowstep-button',
  template: `
  <button type="{{field.type}}" [ngClass]="field.cssClasses" (click)="gotoTargetStep($event)" [disabled]="isDisabled()">{{field.label}}</button>
  `,
})
export class WorkflowStepButtonComponent extends SimpleButtonComponent {
  gotoTargetStep() {
    return this.fieldMap._rootComp.stepTo(this.field.targetStep);
  }
}
