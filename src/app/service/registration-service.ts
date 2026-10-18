import {inject, Service, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RegistrationDto} from '../dtos/registration-dto';
import {catchError, of} from 'rxjs';
import {FirstExceptionDto} from '../dtos/error/first-exception-dto';
import {ExceptionDetailDto} from '../dtos/error/exception-detail-dto';

@Service()
export class RegistrationService {
  private readonly httpClient = inject(HttpClient);

  private usersRegistrations(){
    return this.httpClient
      .get<RegistrationDto>(environment.apiUrl+'Registration', {withCredentials:true})
      .pipe(catchError((x: HttpErrorResponse)=>of(x.error as FirstExceptionDto)));
  }

  UserRegistrations = signal(this.usersRegistrations());

  RegisterToSession(sessionId: string, carId: string){
    return this.httpClient
      .post<null>(environment.apiUrl+`Session/register/${sessionId}`, {carId: carId})
      .pipe(catchError((x: HttpErrorResponse)=>of(x.error as ExceptionDetailDto)));
  }
}
