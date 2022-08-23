import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import {
  combineLatest,
  delay,
  filter,
  forkJoin,
  from,
  interval,
  map,
  of,
  Subscription,
  take,
  tap,
} from 'rxjs';
import { User } from '../app.component';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss'],
})
export class RxjsPlaygroundComponent implements OnDestroy {
  constructor(private _http: HttpClient) {
    this._sub = interval(1000).subscribe(console.log);
  }

  private _sub: Subscription;

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
