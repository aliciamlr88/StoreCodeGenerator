import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { BarCodeComponent } from './bar-code/bar-code.component'; 
import { NgxBarcode6Module } from 'ngx-barcode6';
import { NgSelectModule } from '@ng-select/ng-select';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CodeGeneratorComponent,
    BarCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBarcode6Module,
    NgSelectModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
