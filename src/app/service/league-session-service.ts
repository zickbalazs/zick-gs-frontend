import {computed, inject, input, Service, signal} from '@angular/core';
import {LeagueService} from './league-service';
import {SessionService} from './session-service';

@Service()
export class LeagueSessionService {
  private sessionService = inject(SessionService)
  currentLeagueId = signal('');
  currentLeagueSessions = computed(()=>{
    let id = this.currentLeagueId();
    console.log(id);
    return this.sessionService.GetSessionsAvailableByLeague(id);
  });
}
