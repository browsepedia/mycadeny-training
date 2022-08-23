import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list.routing-module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    UserListRoutingModule,
    MatListModule,
  ],
  declarations: [UserListComponent],
})
export class UserListModule {}
