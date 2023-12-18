import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { BarCodeComponent } from './bar-code/bar-code.component'; 
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

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
    BarcodeGeneratorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
