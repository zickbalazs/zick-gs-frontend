import {Component, inject} from '@angular/core';
import {LeagueService} from '../../service/league-service';
import {LeagueItemComponent} from '../../ui/leagues/league-item-component/league-item-component';
import {AsyncPipe} from '@angular/common';

@Component({
  imports: [
    LeagueItemComponent,
    AsyncPipe
  ],
  selector: 'app-league-component',
  styleUrl: './league-component.scss',
  templateUrl: './league-component.html',
})
export class LeagueComponent {
  private readonly leagueService = inject(LeagueService);

  protected leagues = this.leagueService.GetLeagues();

}
