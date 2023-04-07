import { Actions, ofType } from '@ngrx/effects';
import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import * as RecipesActions from './store/recipes.actions';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<any> {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, stat: RouterStateSnapshot) {
    return this.store.select('recipes').pipe(take(1), switchMap(recipesState => {
      if (recipesState.recipes.length === 0) {
        this.store.dispatch(new RecipesActions.FectchReceipesStart());
        return this.actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
      } else {
        return recipesState.recipes
      }
    }))
  }
}
