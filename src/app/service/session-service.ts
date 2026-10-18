import {inject, Service, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  GetUserSessions(){
    return this.httpClient
      .get<SessionDTO[]>(environment.apiUrl+'Session/registered', {withCredentials: true})
      .pipe(catchError((x: FirstExceptionDto)=>of(x)));
  }


  UserSessions = signal(()=>this.GetUserSessions());





}
