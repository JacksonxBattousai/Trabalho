import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import {MatTableModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import{ UserService } from './services/user.service';
import { FundoComponent } from './fundo/fundo.component';
import { MenudemoComponent } from './components/menudemo/menudemo.component';
//Giovanni
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    FundoComponent,
    MenudemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    //Giovanni
    FormsModule, MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, 
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],

  exports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule
  ],

  //Fim Giovanni
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
