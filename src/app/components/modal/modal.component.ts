import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from '../../interface/loan';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
  
export class ModalComponent implements OnInit {
  public enteredValue!: number;
  public inputPlaceholder: string = 'enter invests...';

  @Input() loan: Loan = {} as Loan;
  @Input() amount!: number;

  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showInvestMark: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changedAmount: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
  
  private getAmountsResult(amount: number) {
    this.loan.available = this.loan.available - amount <= 0 ? 0 : this.loan.available - amount;
    this.loan.amount = this.loan.amount + amount <= 0 ? 0 : this.loan.amount + amount;
    this.changedAmount.emit(this.amount = (this.amount - amount) <= 0 ? 0 : this.amount);
  }

  public handleGetValue(e: Event): void {
    this.enteredValue = +(e.target as HTMLInputElement).value;
    this.getAmountsResult(this.enteredValue);
  }

  public handleInvested(): void {
    this.showInvestMark.emit(this.loan.isInvested = true);
    this.showModal.emit(true);
  }
    
  public handleCloseModal(): void {
    this.showModal.emit(true);
  }

  ngOnInit(): void {
  }

}
