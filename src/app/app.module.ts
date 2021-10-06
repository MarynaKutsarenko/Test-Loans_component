import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopupModule } from 'ng2-opd-popup/components/popup/popup.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanModule } from './modules/loan/loan.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoanModule,
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
