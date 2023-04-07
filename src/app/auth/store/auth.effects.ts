import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
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

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
