import { Component, Input, OnInit } from '@angular/core';
import { Loan } from '../../interface/loan';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Input() loan: Loan = {} as Loan;

  constructor() { }

  ngOnInit(): void {
  }

}
