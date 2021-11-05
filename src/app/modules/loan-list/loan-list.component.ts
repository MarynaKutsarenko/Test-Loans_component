import { Component, OnInit } from '@angular/core';
import { Loan } from '../../interface/loan';
import { loans } from '../../db/current-loans';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  public amount: number = 238456;

  public loans: Loan[] = loans;
  public loan: Loan = {} as Loan;

  public isModalVisible: boolean = false;

  constructor() {}

  public handleChangeTotalAmount(value: number): void {
    this.amount = value;
  }

  public handleChangeMarkdown(id: number) {
    this.loan.isInvested = true;
  }

  public handleSelectedLoan(loan: Loan): void {
    this.loan = loan;
    this.isModalVisible = true;
  }

  public handleOpenModal(): void {
    this.isModalVisible = false;
  }

  ngOnInit(): void {
  }

}
