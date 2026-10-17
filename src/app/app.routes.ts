import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import {MainComponent} from './pages/main-component/main-component';
export const routes: Routes = [
  {
    path: 'login',
    title: 'ZGS | Login',
    component: Login
  },
  {
    path: '',
    title: 'ZGS',
    component: MainComponent
  }
];
