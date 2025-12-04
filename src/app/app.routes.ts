import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { UsersComponent } from './features/users/users'; // <-- IMPORTANTE
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'users', component: UsersComponent },
  { path: 'auth/login', component: LoginComponent }
  { path: '**', redirectTo: '' },
];
