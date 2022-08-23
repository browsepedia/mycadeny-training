import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFacade } from 'src/app/user.facade';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private _userFacade: UserFacade, private _router: Router) {
    this.users$ = _userFacade.fetchUsersIfNotPresent$;
  }

  protected users$: Observable<User[]>;

  editUser(user: User): void {
    this._router.navigateByUrl(`/user-details/${user.id}`);
  }
}
