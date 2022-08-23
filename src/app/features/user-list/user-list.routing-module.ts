import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

const routes: Route[] = [
  {
    path: '',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
