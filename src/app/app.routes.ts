import { Routes } from '@angular/router';
import { ShellLayoutComponent } from './membership/core/shell/shell.layout.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Productivity Planner',
    loadComponent() {
      return import('./visitor/home/home.page.component').then(
        (m) => m.HomePageComponent,
      );
    },
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent() {
      return import('./visitor/login/login.page.component').then(
        (m) => m.LoginPageComponent,
      );
    },
  },
  {
    path: 'signup',
    title: 'Signup',
    loadComponent() {
      return import('./visitor/signup/signup.page.component').then(
        (m) => m.SignupPageComponent,
      );
    },
  },
  {
    path: 'app',
    title: 'Productivity Planner',
    component: ShellLayoutComponent,
    loadChildren: () =>
      import('./membership/membership.routes').then(
        (routes) => routes.membershipRoutes,
      ),
  },
];
