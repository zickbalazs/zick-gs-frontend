import { inject, Service } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegistrationFormDto} from '../dtos/forms/registration-form-dto';
import { environment } from '../../environments/environment';
import { LoginFormDto } from '../dtos/forms/login-form-dto';
import { LoginErrorDto } from '../dtos/error/login-error-dto';
import { catchError, map, of } from 'rxjs';
import { RegistrationErrorDto } from '../dtos/error/registration-error-dto';

@Service()
export class AuthService {

  private http = inject(HttpClient);

  RegisterUser(form: RegistrationFormDto){
    return this.http.post(environment.apiUrl+'User/register', form)
      .pipe(map(()=>null), catchError((x: RegistrationErrorDto)=>of(x)));
  }
  LoginUser(form: LoginFormDto){
    return this.http.post<null|LoginErrorDto>(environment.apiUrl+'login?useCookies=true', form)
      .pipe(map(x=>null), catchError((x: HttpErrorResponse)=>of(x.error as LoginErrorDto)));
  }
}
