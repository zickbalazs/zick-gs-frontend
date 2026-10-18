import {Component, computed, input} from '@angular/core';
import {MatCardSubtitle, MatCardTitle} from '@angular/material/card';

@Component({
  imports: [
    MatCardSubtitle,
    MatCardTitle
  ],
  selector: 'app-league-item-title-component',
  styleUrl: './league-item-title-component.scss',
  templateUrl: './league-item-title-component.html',
})
export class LeagueItemTitleComponent {
  title = input.required<string>();
  from = input.required<Date>();
  to = input.required<Date>();
}
