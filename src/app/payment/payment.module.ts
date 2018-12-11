import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentComponent } from './payment.component';

import { PaymentService } from './shared/payment.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PaymentComponent
  ],
  declarations: [
    PaymentComponent
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule {}
