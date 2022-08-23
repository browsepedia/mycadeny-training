import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${environment.apiUrl}/users`);
  }

  public fetchUser(userId: number): Observable<User> {
    return this._http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }
}
