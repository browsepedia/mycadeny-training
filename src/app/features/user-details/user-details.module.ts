import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { UserDetailsRoutingModule } from './user-details.routing-module';
import { UserDetailsChildComponent } from './user-details-child/user-details-child.component';

@NgModule({
  imports: [CommonModule, UserDetailsRoutingModule],
  declarations: [UserDetailsComponent, UserDetailsChildComponent],
})
export class UserDetailsModule {}
