import { Component, inject, signal } from '@angular/core';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AuthService } from '../../../service/auth-service';
import { LoginFormDto } from '../../../dtos/forms/login-form-dto';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatCardActions, MatCardContent} from '@angular/material/card';

@Component({
  imports: [
    MatInputModule,
    MatFormField,
    MatButton,
    MatProgressSpinner,
    MatSnackBarModule,
    FormsModule,
    MatCardContent,
    MatCardActions,
  ],
  selector: 'login-form',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class LoginForm {
  private readonly loginService = inject(AuthService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  protected readonly loginForm: LoginFormDto = {
    email: '',
    password: '',
  };

  protected readonly loginProgress = signal(false);

  UpdateLogin() {
    this.loginProgress.update(() => true);

    this.loginService.LoginUser(this.loginForm).subscribe((res) => {
      if (res) {
        console.log(res);
        this.snackBar.open(res.detail, 'OK');
      } else {
        this.snackBar.open('Successful login!');
        this.loginService.isLoggedIn.update(()=>true);
        this.router.navigate(['/']);
      }
      this.loginProgress.update(() => false);
    });
  }
}
