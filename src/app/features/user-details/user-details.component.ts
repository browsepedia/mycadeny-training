import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debounceTime, map, mergeMap, Observable, take, tap } from 'rxjs';
import { UserFacade } from 'src/app/user.facade';
import { User } from 'src/app/user.model';
import {
  GreaterThanValidator,
  UserNameMinLengthValidator,
  UserNameRequired,
} from './user.validators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  constructor(
    _activatedRoute: ActivatedRoute,
    private _userFacade: UserFacade
  ) {
    _activatedRoute.params
      .pipe(
        map((params: Params) => +params['userId']),
        mergeMap((userId: number) => this._userFacade.fetchUserDetails(userId)),
        tap((user: User) => this.form.patchValue(user, { emitEvent: false })),
        take(1)
      )
      .subscribe();

    this.form.valueChanges.pipe(tap(console.log)).subscribe();
  }

  public form = new FormGroup({
    name: new FormControl<string>('', {
      validators: [UserNameRequired, UserNameMinLengthValidator(4)],
    }),
    username: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required, Validators.email],
    }),
    minMax: new FormGroup(
      {
        min: new FormControl(0),
        max: new FormControl(1),
      },
      { validators: [GreaterThanValidator('min', 'max')] }
    ),
  });

  logName(): void {
    console.log('form invalid', this.form.invalid);
    console.log(this.form.value);
  }
}
