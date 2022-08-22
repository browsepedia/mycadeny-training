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

@NgModule({
  declarations: [AppComponent, ShowDoublePipe],
  imports: [
    MatButtonModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CalculatorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
