import {inject, Service, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RegistrationDto} from '../dtos/registration-dto';
import {catchError, map, of} from 'rxjs';
import {FirstExceptionDto} from '../dtos/error/first-exception-dto';
import {ExceptionDetailDto} from '../dtos/error/exception-detail-dto';

@Service()
export class RegistrationService {
  private readonly httpClient = inject(HttpClient);

  private usersRegistrations(){
    return this.httpClient
      .get<RegistrationDto[]>(environment.apiUrl+'Registration', {withCredentials:true})
      .pipe(catchError((x: HttpErrorResponse)=>of(x.error as FirstExceptionDto)));
  }

  public UnregisterFromSession(sessionId: string){
    return this.httpClient.delete<null>(environment.apiUrl+`Registration/${sessionId}`, {withCredentials: true})
      .pipe(catchError((x: HttpErrorResponse)=>{
        return of(x.error as ExceptionDetailDto);
      }))
  }

  public RegisterToSession(sessionId: string, carId: string){
    return this.httpClient
      .post<object>(environment.apiUrl+`Session/register/${sessionId}`, {carId}, {withCredentials: true})
      .pipe(catchError((x: HttpErrorResponse)=>{
        return of(x.error as ExceptionDetailDto);
      }));
  }


}
