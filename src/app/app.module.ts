import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ShowDoublePipe } from './show-double.pipe';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CalculatorComponent } from './calculator/calculator.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ShowDoublePipe, RxjsPlaygroundComponent],
  imports: [
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CalculatorComponent,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
