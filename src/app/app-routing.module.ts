import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { UserListComponent } from './features/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'users',
    data: {
      layout: 'horizontal',
    },
    loadChildren: () =>
      import('./features/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'user-details/:userId',
    data: {
      layout: 'vertical',
    },
    loadChildren: () =>
      import('./features/user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: '/users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
