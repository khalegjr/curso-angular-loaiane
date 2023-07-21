import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private modalService: NgbModal) {}

  private showAlert(message: string, type: string = 'success') {
    const modalRef: NgbModalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.type = type;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}
