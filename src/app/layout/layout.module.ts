import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HoverBackgroundDirective } from './hover-background.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatToolbarModule, RouterModule],
  declarations: [LayoutComponent, HeaderComponent, HoverBackgroundDirective],
  exports: [LayoutComponent],
})
export class LayoutModule {}
