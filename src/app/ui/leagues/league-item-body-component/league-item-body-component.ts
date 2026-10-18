import {Component, computed, inject, input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatCardContent} from "@angular/material/card";
import {LeagueDTO} from '../../../dtos/league-dto';
import {TrackService} from '../../../service/track-service';
import {map} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        MatCardContent
    ],
  selector: 'app-league-item-body-component',
  styleUrl: './league-item-body-component.scss',
  templateUrl: './league-item-body-component.html',
})
export class LeagueItemBodyComponent {
  private trackService = inject(TrackService);

  league = input.required<LeagueDTO>();
  track = computed(()=>this.trackService
    .GetTrack(this.league().currentTrackId)
    .pipe(map(x=>x.name)));

}
