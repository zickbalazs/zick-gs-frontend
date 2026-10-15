import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationDTO } from '../dtos/registration-dto';
import { environment } from '../../environments/environment';
import { LoginDto } from '../dtos/login-dto';
import { LoginErrorDto } from '../dtos/error/login-error-dto';
import { catchError, map, of } from 'rxjs';
import { RegistrationErrorDto } from '../dtos/error/registration-error-dto';

@Service()
export class Auth {

  private http = inject(HttpClient);

  RegisterUser(form: RegistrationDTO){
    return this.http.post(environment.apiUrl+'User/register', form)
      .pipe(map((x)=>x), catchError((x: RegistrationErrorDto)=>of(x)));
  }
  LoginUser(form: LoginDto){
    return this.http.post<Object|LoginErrorDto>(environment.apiUrl+'login?useCookies=true', form)
      .pipe(map((x: Object)=>x), catchError((x: LoginErrorDto)=>of(x)));
  }
}
