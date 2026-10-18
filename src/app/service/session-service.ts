import {inject, Service} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SessionDTO} from '../dtos/session-dto';
import {catchError, of} from 'rxjs';
import {FirstExceptionDto} from '../dtos/error/first-exception-dto';

@Service()
export class SessionService {
  private httpClient = inject(HttpClient);

  GetSessionsAvailableByLeague(leagueId: string){
    return this.httpClient
      .get<SessionDTO[]>(environment.apiUrl+`Session/league/available/${leagueId}`)
      .pipe(catchError(()=>of(null)));
  }

  GetSession(sessionId: string){
    return this.httpClient
      .get<SessionDTO>(environment.apiUrl+`Session/byId/${sessionId}`)
      .pipe(catchError((x: HttpErrorResponse)=>of(x.error as FirstExceptionDto)));
  }

}
