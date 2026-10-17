import { Component } from '@angular/core';
import { LoginForm } from '../../ui/forms/login/login';
import {MatCard, MatCardHeader} from '@angular/material/card';

@Component({
  imports: [LoginForm, MatCard, MatCardHeader],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {}
