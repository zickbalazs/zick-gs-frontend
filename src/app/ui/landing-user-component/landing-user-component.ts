import {Component, inject} from '@angular/core';
import {AuthService} from '../../service/auth-service';
import {AsyncPipe} from '@angular/common';
import {UserDto} from '../../dtos/user-dto';
import {map} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    AsyncPipe,
    RouterLink
  ],
  selector: 'app-landing-user-component',
  styleUrl: './landing-user-component.scss',
  templateUrl: './landing-user-component.html',
})
export class LandingUserComponent {
  protected readonly authService = inject(AuthService);

  protected readonly userName = this.authService.userData().pipe(map(x=>x?.name));
  protected readonly sessions = [];
}
