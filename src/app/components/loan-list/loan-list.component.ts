import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Loan } from '../../interface/loan';
import { loans } from '../../db/current-loans';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  public title: string = 'Current Loans';
  public amount: number = 238.456;
  public loans: Loan[] = loans;
  public isModalDialogVisible: boolean = false;

  constructor() { }

  public showModal(e: Event) {
    this.isModalDialogVisible = !this.isModalDialogVisible;

  }

  ngOnInit(): void {
  }

}
