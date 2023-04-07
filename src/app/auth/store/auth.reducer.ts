import { User } from './../user.model';
import * as AuthActions from './auth.actions'

export interface State{
  user: User
}

const initialState : State = {
  user: null
}

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN_START:
      return {...state};
    case AuthActions.LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case AuthActions.LOGIN_FAIL:
      return state;
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}
