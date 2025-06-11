import { Routes } from '@angular/router';

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
    path: 'app/dashboard',
    title: 'Dashboard',
    loadComponent() {
      return import('./membership/dashboard/dashboard.page.component').then(
        (m) => m.DashboardPageComponent,
      );
    },
  },
  {
    path: 'app/planning',
    title: 'Planning',
    loadComponent() {
      return import('./membership/planning/planning.page.component').then(
        (m) => m.PlanningPageComponent,
      );
    },
  },
  {
    path: 'app/workday',
    title: 'Workday',
    loadComponent() {
      return import('./membership/workday/workday.page.component').then(
        (m) => m.WorkdayPageComponent,
      );
    },
  },
  {
    path: 'app/profile',
    title: 'Profile',
    loadComponent() {
      return import('./membership/profile/profile.page.component').then(
        (m) => m.ProfilePageComponent,
      );
    },
  },
  {
    path: 'app/settings',
    title: 'Settings',
    loadComponent() {
      return import('./membership/settings/settings.page.component').then(
        (m) => m.SettingsPageComponent,
      );
    },
  },
];
