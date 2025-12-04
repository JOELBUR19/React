import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { UsersComponent } from './features/users/users'; // <-- IMPORTANTE
import { LoginComponent } from './features/auth/login/login';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UsersComponent },
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'panel',
    canActivate: [authGuard],
    loadComponent: () => import('./features/panel/panel').then((m) => m.PanelComponent),
  },
  { path: '**', redirectTo: '' },
];
