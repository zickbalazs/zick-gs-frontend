import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CarDTO} from '../dtos/car-dto';

@Service()
export class VehicleService {
  private httpClient = inject(HttpClient);

  public GetVehicles() {
    return this.httpClient.get<CarDTO[]>(environment.apiUrl+"Vehicle");
  }

  public GetVehicleByClass(classId: string){
    return this.httpClient.get<CarDTO[]>(environment.apiUrl+`Vehicle/class/${classId}`);
  }

}
