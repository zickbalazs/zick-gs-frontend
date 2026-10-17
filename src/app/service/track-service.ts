import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TrackDTO} from '../dtos/track-dto';

@Service()
export class TrackService {
  private httpClient = inject(HttpClient);

  public GetTracks(){
    return this.httpClient.get<TrackDTO[]>(environment.apiUrl+'Track')
  }
  public GetTrack(id: string){
    return this.httpClient.get<TrackDTO>(environment.apiUrl+`Track/${id}`)
  }

}
