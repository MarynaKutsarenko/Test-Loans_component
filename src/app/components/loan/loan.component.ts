import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from '../../interface/loan';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Input() loan: Loan = {} as Loan;
  @Output() selectedLoan: EventEmitter<Loan> = new EventEmitter<Loan>();

  constructor() { }

  public handleSelectedLoan(): void {
    this.selectedLoan.emit(this.loan);
  }

  ngOnInit(): void {
  }

}
