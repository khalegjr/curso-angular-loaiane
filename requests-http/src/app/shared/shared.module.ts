import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent],
  imports: [CommonModule],
})
export class SharedModule {}
