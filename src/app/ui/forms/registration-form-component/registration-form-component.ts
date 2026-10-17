import { Component } from '@angular/core';
import {MatCardActions, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

@Component({
  imports: [
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon
  ],
  selector: 'app-registration-form-component',
  styleUrl: './registration-form-component.scss',
  templateUrl: './registration-form-component.html',
})
export class RegistrationFormComponent {}
