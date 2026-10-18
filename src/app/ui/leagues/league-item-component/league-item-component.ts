import {Component, input} from '@angular/core';
import {LeagueDTO} from '../../../dtos/league-dto';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {LeagueItemTitleComponent} from '../league-item-title-component/league-item-title-component';
import {LeagueItemBodyComponent} from '../league-item-body-component/league-item-body-component';

@Component({
  imports: [
    MatCard,
    MatCardActions,
    MatButton,
    LeagueItemTitleComponent,
    LeagueItemBodyComponent
  ],
  selector: 'app-league-item-component',
  styleUrl: './league-item-component.scss',
  templateUrl: './league-item-component.html',
})
export class LeagueItemComponent {

  league = input.required<LeagueDTO>();

  protected leagueHasSessions(league: LeagueDTO){
    return league.sessions.filter(x=>x.status == 1).length > 0;
  }


}
