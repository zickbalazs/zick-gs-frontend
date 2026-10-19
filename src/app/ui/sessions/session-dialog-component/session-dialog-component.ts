import {Component, inject} from '@angular/core';
import {MatDialogContent} from '@angular/material/dialog';
import {LeagueService} from '../../../service/league-service';
import {LeagueSessionService} from '../../../service/league-session-service';
import {AsyncPipe} from '@angular/common';
import {SessionDialogItemComponent} from '../session-dialog-item-component/session-dialog-item-component';
import {RegistrationService} from '../../../service/registration-service';

@Component({
  imports: [
    MatDialogContent,
    AsyncPipe,
    SessionDialogItemComponent
  ],
  selector: 'app-session-dialog-component',
  styleUrl: './session-dialog-component.scss',
  templateUrl: './session-dialog-component.html',
})
export class SessionDialogComponent {
  protected readonly lsService = inject(LeagueSessionService);
}
