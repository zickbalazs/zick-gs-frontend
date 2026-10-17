import { Component } from '@angular/core';
import {MatCard, MatCardHeader} from '@angular/material/card';
import {RegistrationFormComponent} from '../../ui/forms/registration-form-component/registration-form-component';

@Component({
  imports: [
    MatCard,
    MatCardHeader,
    RegistrationFormComponent
  ],
  selector: 'app-registration-component',
  styleUrl: './registration-component.scss',
  templateUrl: './registration-component.html',
})
export class RegistrationComponent {}
