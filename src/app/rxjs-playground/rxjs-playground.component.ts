import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  combineLatest,
  delay,
  filter,
  forkJoin,
  from,
  interval,
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { User } from '../app.component';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss'],
})
export class RxjsPlaygroundComponent {
  constructor(private _http: HttpClient) {
    const users$ = _http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
        this.filteredUsers = users;
      });
  }

  public users: User[] = [];
  public filteredUsers: User[] = [];

  onFilterChange(filter: string): void {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(filter)
    );
  }
}
