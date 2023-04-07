import { User } from './../user.model';
import { Action } from '@ngrx/store';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_START = 'LOGIN_START';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const AUTO_LOGIN_SUCCESS = 'AUTO_LOGIN_SUCCESS';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: User) {}
}

export class AutoLoginSuccess implements Action {
  readonly type = AUTO_LOGIN_SUCCESS;
  constructor(public payload: User) {}
}


export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class SignupSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;
}

export class SignupFail implements Action {
  readonly type = SIGNUP_FAIL;
  constructor(public payload: string) {}
}

export type AuthActions =
  | Login
  | Logout
  | LoginStart
  | LoginFail
  | AutoLogin
  | AutoLoginSuccess
  | SignupStart
  | SignupFail
  | SignupSuccess;
