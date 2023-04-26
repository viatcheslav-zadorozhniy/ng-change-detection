import { Routes } from '@angular/router';

import { UsersComponent } from './pages';

export const appRoutes: Routes = [
  {
    path: '**',
    component: UsersComponent,
  },
];
