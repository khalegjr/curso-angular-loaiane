import { Route } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let routes: Route[];

  beforeEach(() => {
    routes = [
      { path: '', component: HomeComponent, canActivate: [authGuard] },
      { path: 'login', component: LoginComponent },
    ];
  });
});
