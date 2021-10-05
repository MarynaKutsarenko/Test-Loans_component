import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
