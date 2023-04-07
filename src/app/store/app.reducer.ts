import * as fromShoppigList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer'
import { ActionReducerMap } from '@ngrx/store/src';

export interface AppState{
  shoppingList : fromShoppigList.State
  auth : fromAuth.State
}

export const appReducer : ActionReducerMap<AppState> = {
  shoppingList: fromShoppigList.shoppingListReducer,
  auth: fromAuth.authReducer
}
