import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//Não sei para que serve.

import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import {MatTableModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import{ UserService } from './services/user.service';
import { FundoComponent } from './fundo/fundo.component';



@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    FundoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
