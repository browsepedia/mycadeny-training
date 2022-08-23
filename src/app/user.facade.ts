import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  exhaustMap,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(private _userService: UserService) {
    this.fetchUsersIfNotPresent$ = this._users$.pipe(
      switchMap((users: User[] | null) => {
        if (users === null) {
          return this._userService
            .fetchUsers()
            .pipe(tap((users) => this._users$.next(users)));
        }

        return of(users);
      }),
      catchError((error: HttpErrorResponse) =>
        of([
          {
            email: 'vlad@test.com',
            id: 1,
            name: '',
            phone: '',
            username: '',
            website: '',
          },
        ] as User[])
      )
    );
  }

  private _users$ = new BehaviorSubject<User[] | null>(null);

  public get users$(): Observable<User[]> {
    return this._users$
      .asObservable()
      .pipe(map((users: User[] | null) => users || []));
  }

  public fetchUserDetails(userId: number): Observable<User> {
    return this._userService.fetchUser(userId);
  }

  public fetchUsersIfNotPresent$: Observable<User[]>;
}
