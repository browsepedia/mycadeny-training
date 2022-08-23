import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.userId$ = _activatedRoute.params.pipe(
      map((params: Params) => params['userId'])
    );
  }

  protected userId$: Observable<string>;

  editNextUser(): void {
    this.userId$
      .pipe(
        map((userId: string) => +userId + 1),
        tap((userId) => this._router.navigateByUrl(`/user-details/${userId}`)),
        take(1)
      )
      .subscribe();
  }
}
