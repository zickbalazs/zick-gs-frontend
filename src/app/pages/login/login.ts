import { Component } from '@angular/core';
import { LoginForm } from '../../ui/forms/login/login';

@Component({
  imports: [LoginForm],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {}
