import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SessionDTO} from '../dtos/session-dto';
import {catchError, of} from 'rxjs';

@Service()
export class SessionService {
  private httpClient = inject(HttpClient);

  GetSessionsAvailableByLeague(leagueId: string){
    return this.httpClient
      .get<SessionDTO[]>(environment.apiUrl+`Session/league/available/${leagueId}`)
      .pipe(catchError(()=>of(null)));
  }

  GetUserSessions(){
    return this.httpClient
      .get<SessionDTO[]>(environment.apiUrl+'Session')
      .pipe(catchError(()=>of(null)));
  }
}
