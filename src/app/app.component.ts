import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

export interface User {
  userId: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor() {}

  public appTitle: string = 'MyCademy';

  @ViewChild('button')
  public buttonRef!: ElementRef;

  public numbers = [1, 2, 3, 4, 5];

  ngAfterViewInit(): void {
    const button = this.buttonRef.nativeElement as HTMLButtonElement;
    button.setAttribute('style', 'background: red');
  }

  ngOnDestroy(): void {}

  pushToNumbers(): void {
    this.numbers = [...this.numbers, 6];
  }
}
