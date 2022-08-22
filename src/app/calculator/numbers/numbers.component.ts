import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class NumbersComponent {
  @Input() public numbers: number[] = [];
  @Output() public numberClick = new EventEmitter<number>();

  onNumberClick(num: number): void {
    this.numberClick.emit(num);
  }
}
