import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { UserDetailsRoutingModule } from './user-details.routing-module';
import { UserDetailsChildComponent } from './user-details-child/user-details-child.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  declarations: [UserDetailsComponent, UserDetailsChildComponent],
})
export class UserDetailsModule {}
