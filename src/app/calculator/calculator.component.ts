import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NumbersComponent } from './numbers/numbers.component';
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  standalone: true,
  imports: [NumbersComponent, ResultComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() public numbers: number[] = [];

  protected selectedNumber: number | undefined = undefined;

  onNumberClick(num: number): void {
    this.selectedNumber = num;
  }

  logNumbers(): void {
    console.log(this.numbers);
  }
}
