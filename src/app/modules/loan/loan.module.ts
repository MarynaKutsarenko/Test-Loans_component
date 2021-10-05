import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanListComponent } from 'src/app/components/loan-list/loan-list.component';
import { LoanComponent } from 'src/app/components/loan/loan.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';



@NgModule({
  declarations: [
    LoanListComponent,
    LoanComponent,
    ModalComponent
  ],
  exports: [LoanListComponent],
  imports: [
    CommonModule
  ]
})
export class LoanModule { }
