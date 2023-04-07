import { User } from './../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User,
  authError: string,
  loading: boolean
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.LOGIN:
      return {
        ...state,
        user: action.payload,
        authError: null,
        loading: false
      };
    case AuthActions.AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authError: null,
        loading: false
      };
    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case AuthActions.AUTO_LOGIN:
      return state;
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        loading: true,
        authError: null
      };
    case AuthActions.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null
      };
    case AuthActions.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        authError: action.payload
      };
    default:
      return state;
  }
}
