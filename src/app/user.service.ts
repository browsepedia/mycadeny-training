import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
