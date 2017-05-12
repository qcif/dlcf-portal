import { Component, Injectable } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class BaseModalContext extends BSModalContext {
  public value :any;
}

export class BaseModal implements CloseGuard, ModalComponent<BaseModalContext> {
  protected context: BaseModalContext;
  protected canClose: boolean;

  constructor(public dialog: DialogRef<BaseModalContext>) {
    this.context = dialog.context;
    // dialog.setCloseGuard(this);
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.canClose;
  }

  public close() {
    console.log("Closing...");
    this.canClose = true;
    this.dialog.close();
  }
}
