import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { LoanListComponent } from 'src/app/components/loan-list/loan-list.component';
import { LoanComponent } from 'src/app/components/loan/loan.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoanListComponent,
    LoanComponent,
    ModalComponent
  ],
  exports: [LoanListComponent],
  imports: [
   BrowserModule,
    CommonModule,
    FormsModule
  ]
})
export class LoanModule { }
