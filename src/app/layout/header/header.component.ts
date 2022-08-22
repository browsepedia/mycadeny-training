import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() appTitle: string = '';

  @Output() alertClick = new EventEmitter<string>();

  onAlertClick(): void {
    this.alertClick.emit('Hello from app-header');
  }
}
