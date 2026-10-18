import {inject, Service, Signal, signal, WritableSignal} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegistrationFormDto} from '../dtos/forms/registration-form-dto';
import { environment } from '../../environments/environment';
import { LoginFormDto } from '../dtos/forms/login-form-dto';
import { LoginErrorDto } from '../dtos/error/login-error-dto';
import {catchError, map, Observable, of} from 'rxjs';
import { RegistrationErrorDto } from '../dtos/error/registration-error-dto';
import {UserDto} from '../dtos/user-dto';

@Service()
export class AuthService {

  private http = inject(HttpClient);

  isLoggedIn = signal(false);
  userData: WritableSignal<Observable<null|UserDto>> = signal(new Observable<null|UserDto>());

  RegisterUser(form: RegistrationFormDto){
    return this.http.post(environment.apiUrl+'User/register', form)
      .pipe(map(()=>null), catchError((x: RegistrationErrorDto)=>of(x)));
  }
  LoginUser(form: LoginFormDto){
    return this.http.post<null|LoginErrorDto>(environment.apiUrl+'login?useCookies=true', form, {withCredentials: true})
      .pipe(map(x=>null), catchError((x: HttpErrorResponse)=>of(x.error as LoginErrorDto)));
  }
  GetUserData(){
    return this.http.get<UserDto>(environment.apiUrl+'User', {withCredentials: true}).pipe(catchError(()=>of(null)));
  }
}
