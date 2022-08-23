import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserDetailsChildComponent } from './user-details-child/user-details-child.component';
import { UserDetailsComponent } from './user-details.component';

const routes: Route[] = [
  {
    path: '',
    component: UserDetailsComponent,
    children: [
      {
        path: 'user-details-child',
        component: UserDetailsChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailsRoutingModule {}
