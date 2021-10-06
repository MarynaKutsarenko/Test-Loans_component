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

  public isModalVisible: boolean = false;

  @Input() loan: Loan = {} as Loan;
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
  public handleValue(e: Event): void {
    this.inputValue = (e.target as HTMLInputElement).value;
  }
  
  public handleCloseModal(e: Event): void {
    this.isModalVisible = false;
    this.showModal.emit(true);
  }

  ngOnInit(): void {
  }

}
