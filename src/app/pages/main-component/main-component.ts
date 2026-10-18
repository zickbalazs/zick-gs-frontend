import {Component, inject} from '@angular/core';
import {AuthService} from '../../service/auth-service';
import {LandingUserlessComponent} from '../../ui/landing-userless-component/landing-userless-component';
import {LandingUserComponent} from '../../ui/landing-user-component/landing-user-component';

@Component({
  imports: [
    LandingUserlessComponent,
    LandingUserComponent
  ],
  selector: 'app-main-component',
  styleUrl: './main-component.scss',
  templateUrl: './main-component.html',
})
export class MainComponent {
  protected readonly authService = inject(AuthService);


}
