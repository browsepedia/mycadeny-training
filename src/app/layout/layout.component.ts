import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [AppService],
})
export class LayoutComponent {
  constructor(_service: AppService) {
    console.log(_service);
  }
  @Input() public appTitle = '';

  onAlertClick(value: string): void {
    alert(value);
  }
}
