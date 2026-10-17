import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Service()
export class SessionService {
  private httpClient = inject(HttpClient);

  public GetSessionsByLeague(leagueId: string){
    return this.httpClient.get(environment.apiUrl+`Session/league/${leagueId}`)
  }

  public GetSession(sessionId: string){
    return this.httpClient.get(environment.apiUrl+`Session/byId/${sessionId}`)
  }

  public RegisterToSession(sessionId: string){
    return this.httpClient.post(environment.apiUrl+`Session/register/${sessionId}`, {});
  }

  public UnregisterFromSession(sessionId: string){
    return this.httpClient.post(environment.apiUrl+`Session/unregister/${sessionId}`, {});
  }

  public ModifyRegistration(sessionId: string, carId: string){
    return this.httpClient.patch(environment.apiUrl+`Session/modify/${sessionId}`, { car: carId });
  }

}
