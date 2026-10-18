import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import {MainComponent} from './pages/main-component/main-component';
import {RegistrationComponent} from './pages/registration-component/registration-component';
import {LeagueComponent} from './pages/league-component/league-component';
export const routes: Routes = [
  {
    path: 'login',
    title: 'ZGS | Login',
    component: Login
  },
  {
    path: 'registration',
    title: 'ZGS | Registration',
    component: RegistrationComponent
  },
  {
    path: 'leagues',
    title: 'ZGS | Leagues',
    component: LeagueComponent
  },
  {
    path: '',
    title: 'ZGS',
    component: MainComponent
  }
];
