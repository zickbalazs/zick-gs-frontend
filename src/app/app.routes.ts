import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import {MainComponent} from './pages/main-component/main-component';
import {RegistrationComponent} from './pages/registration-component/registration-component';
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
    path: '',
    title: 'ZGS',
    component: MainComponent
  }
];
