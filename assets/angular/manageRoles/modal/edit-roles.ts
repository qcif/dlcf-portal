import { Component, Injectable } from '@angular/core';
// import { DialogRef } from 'angular2-modal';
import { BaseModal, BaseModalContext } from '../../shared/modal/base-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';

export class EditModalContext extends BSModalContext {
  public currentUser;
}

@Component({
  selector: 'modal-content',
  templateUrl: '/angular/dashboard/modal/modal-editRoles.html'
})

export class EditRolesModal implements CloseGuard, ModalComponent<EditModalContext> {
  protected context: BaseModalContext;
  protected canClose: boolean;
  // constructor (@Injectable(DialogRef) diag: DialogRef<BaseModalContext>) {
  //   super(diag);
  // }

  constructor(public dialog: DialogRef<EditModalContext>) {
    this.context = dialog.context;
    dialog.setCloseGuard(this);
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
