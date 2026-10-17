import {Component, inject, Signal, signal} from '@angular/core';
import {MatCardActions, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {RegistrationFormDto} from '../../../dtos/forms/registration-form-dto';
import {AuthService} from '../../../service/auth-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    ReactiveFormsModule,
    FormsModule
  ],
  selector: 'app-registration-form-component',
  styleUrl: './registration-form-component.scss',
  templateUrl: './registration-form-component.html',
})
export class RegistrationFormComponent {
  protected readonly passwordAgain = signal('');
  protected readonly Form: Signal<RegistrationFormDto> = signal({
    email: '',
    username: '',
    password: '',
    steamId: ''
  })

  Submit(){
  }

}
