import {Component, computed, inject, input} from '@angular/core';
import {LeagueDTO} from '../../../dtos/league-dto';
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {TrackService} from '../../../service/track-service';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatButton} from '@angular/material/button';
import {LeagueItemTitleComponent} from '../league-item-title-component/league-item-title-component';

@Component({
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    AsyncPipe,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    LeagueItemTitleComponent
  ],
  selector: 'app-league-item-component',
  styleUrl: './league-item-component.scss',
  templateUrl: './league-item-component.html',
})
export class LeagueItemComponent {
  private readonly trackService = inject(TrackService);

  league = input.required<LeagueDTO>();
  track = computed(()=>this.trackService.GetTrack(this.league().currentTrackId).pipe(map(x=>x.name)));
}
