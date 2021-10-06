import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from '../../interface/loan';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
  
export class ModalComponent implements OnInit {
  public enteredValue: string = '';
  public inputValue: string = '';
  public inputPlaceholder: string = 'enter invests...';

  @Input() loan: Loan = {} as Loan;
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
  public handleValue(e: Event): void {
    this.inputValue = (e.target as HTMLInputElement).value;
  }

  public confirm(e: Event): void {
    this.isConfirmed.emit(true);
  }
  
  public close(e: Event): void {
    this.isConfirmed.emit(false);
  }

  ngOnInit(): void {
  }

}
