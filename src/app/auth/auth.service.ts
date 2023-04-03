import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponse {
  email: string;
  passwordHash: string;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>('http://localhost:3000/api/v1/ngUsers/register', {
        email: email,
        password: password,
      })
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred during User Registration!';
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>('http://localhost:3000/api/v1/ngUsers/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError((error) => {
          let errorMessage = 'An error occurred during Logging In!';
          return throwError(errorMessage);
        }),
        tap((resData) => {
          const user = new User(resData.email, resData.token);
          localStorage.setItem('userData',JSON.stringify(user));
          this.user.next(user);
        })
      );
  }

  logout(){
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  autoLogin(){
    const user = JSON.parse(localStorage.getItem('userData'))
    this.user.next(new User(user.email, user._token));
  }
}
