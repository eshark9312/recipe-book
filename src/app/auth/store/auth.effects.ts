import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { User } from '../user.model';

export interface AuthResponse {
  email: string;
  token: string;
}

@Injectable()
export class AuthEffects {
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) =>
        this.http
          .post<AuthResponse>('http://localhost:3000/api/v1/ngUsers/login', {
            email: authData.payload.email,
            password: authData.payload.password,
          })
          .pipe(
            map((resData) => {
              const user = new User(resData.email, resData.token);
              localStorage.setItem('userData', JSON.stringify(user));
              return new AuthActions.Login(user);
            }),
            catchError((errorRes) => {
              let errorMessage = 'An error occured during LogIn';
              return of(new AuthActions.LoginFail(errorMessage));
            })
          )
      )
    )
  );
  authSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        tap(() => {
          this.router.navigate(['/recipes']);
        })
      ),
    { dispatch: false }
  );
  autoLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AUTO_LOGIN),
      map(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
          return {type: 'dummy'}
        } else {
          const user = new User(userData.email, userData._token);
          return new AuthActions.AutoLoginSuccess(user);
        }
      })
    )
  );
  authLogout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
          localStorage.removeItem('userData');
          this.router.navigate(['/auth']);
        })
      ),
    { dispatch: false }
  );
  authSingup = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SIGNUP_START),
      switchMap((registerData: AuthActions.SignupStart) =>
        this.http
          .post<AuthResponse>('http://localhost:3000/api/v1/ngUsers/register', {
            email: registerData.payload.email,
            password: registerData.payload.password,
          })
          .pipe(
            map((resData) => {
              return new AuthActions.SignupSuccess();
            }),
            catchError((error) => {
              return of(
                new AuthActions.SignupFail(
                  'Error occured during SignUp process'
                )
              );
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
