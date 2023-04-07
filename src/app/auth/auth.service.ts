import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AppState } from '../store/app.reducer';
import { User } from './user.model';
import * as AuthActions from './store/auth.actions';


export interface AuthResponse {
  email: string;
  passwordHash: string;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  //user = new BehaviorSubject<User>(null);
  private store : Store<AppState>;
  private http : HttpClient;

  constructor(
    http : HttpClient, store : Store<AppState>
    ) {
      this.http = http;
      this.store = store;
    }

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
          this.store.dispatch(new AuthActions.Login(user));
        })
      );
  }

  logout(){
    this.store.dispatch(new AuthActions.Logout());
    localStorage.removeItem('userData');
  }

  autoLogin(){
    const user = JSON.parse(localStorage.getItem('userData'))
    if(user){
      this.store.dispatch(new AuthActions.Login(user))
    }
  }
}
