import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {SessionDTO} from '../../../dtos/session-dto';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {ChooseEntryComponent} from '../choose-entry-component/choose-entry-component';
import {map} from 'rxjs';
import {SessionService} from '../../../service/session-service';
import {LeagueSessionService} from '../../../service/league-session-service';
import {RegistrationService} from '../../../service/registration-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AsyncPipe} from '@angular/common';
import {RegistrationDto} from '../../../dtos/registration-dto';

@Component({
  imports: [
    MatButton,
    AsyncPipe
  ],
  selector: '[app-session-dialog-item-component]',
  styleUrl: './session-dialog-item-component.scss',
  templateUrl: './session-dialog-item-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDialogItemComponent {
  private snackbar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  private regService = inject(RegistrationService);
  private lsService = inject(LeagueSessionService);

  session = input.required<SessionDTO>();

  RegisterToSession(){
    let res = this.dialog.open(ChooseEntryComponent);

    res.afterClosed().pipe(map((x: string)=>{
      if (x != '')
        return x;
      return null;
    })).subscribe(x=>{
      if (x != null){
        this.regService.RegisterToSession(this.session().id, x).subscribe(x=>{
          if (!('message' in x))
          {
            this.snackbar.open("successful registration!", undefined, {duration: 2000});
            this.lsService.currentLeagueId.update(()=>'');
            this.lsService.currentLeagueId.set(this.session().leagueId);
          }
        });
      }
    })
  }
}
