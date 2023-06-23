import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { PrimeNgDropdownComponent } from './prime-ng-dropdown/prime-ng-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports:      [ 
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      DropdownModule,
      AgGridModule.withComponents([PrimeNgDropdownComponent])
    ],
  declarations: [ AppComponent, HelloComponent, PrimeNgDropdownComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
