import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  exhaustMap,
  map,
  mergeMap,
  Observable,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

export interface User {
  userId: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _http: HttpClient) {
    const filter$ = this.formControl.valueChanges.pipe(
      startWith(''),
      map((filter) => filter?.toLowerCase() || '')
    );

    const users$ = _http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );

    this.users$ = combineLatest([filter$, users$]).pipe(
      map(([filter, users]) =>
        users.filter((user) => user.name.toLowerCase().includes(filter))
      )
    );
  }

  public person1Ctrl = new FormControl<string>('');
  public person2Ctrl = new FormControl<string>('');

  public subject = new Subject<void>();
  public formControl = new FormControl<string>('');
  public users$: Observable<User[]>;

  refreshUsers(): void {
    this.subject.next();
  }

  public appTitle = 'MyCademy Training';

  public numbers = [1, 2, 3, 4, 5];

  public showTitle = false;

  randomize(): void {
    this.numbers = [];
    for (let i = 0; i < 5; i++) {
      this.numbers.push(Math.floor(Math.random() * (10 - 1)));
    }
  }
}
