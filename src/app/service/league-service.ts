import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeagueDTO} from '../dtos/league-dto';
import {environment} from '../../environments/environment';

@Service()
export class LeagueService {
  private httpClient = inject(HttpClient);


  public GetLeagues(){
    return this.httpClient.get<LeagueDTO[]>(environment.apiUrl+"League");
  }

  public GetLeague(id: string){
    return this.httpClient.get<LeagueDTO>(environment.apiUrl+`League/${id}`)
  }

}
