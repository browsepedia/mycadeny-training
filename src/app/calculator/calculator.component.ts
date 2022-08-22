import { Component, Input, OnInit } from '@angular/core';
import { NumbersComponent } from './numbers/numbers.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [NumbersComponent, ResultComponent],
})
export class CalculatorComponent {
  @Input() public numbers: number[] = [];

  protected selectedNumber: number | undefined = undefined;

  onNumberClick(num: number): void {
    this.selectedNumber = num;
  }
}
