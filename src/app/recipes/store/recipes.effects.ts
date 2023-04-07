import { AppState } from './../../store/app.reducer';
import { Store } from '@ngrx/store';
import { exhaustMap, map, switchMap, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as RecipesActions from './recipes.actions';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipesEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES_START),
      switchMap(() =>
        this.store.select('auth').pipe(
          map((authState) => {
            return authState.user;
          }),
          take(1),
          exhaustMap((user) => {
            return this.http.get<Recipe[]>(
              'http://localhost:3000/api/v1/ngRecipes',
              {
                headers: new HttpHeaders().set(
                  'Authorization',
                  'Bearer ' + user.token
                ),
              }
            );
          }),
          map((recipes) => {
            return recipes.map((recipe) => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : [],
              };
            });
          }),
          map((recipes) => new RecipesActions.SetRecipes(recipes))
        )
      )
    )
  );
  saveRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.SAVE_RECIPES_START),
        switchMap(() =>
          this.store.select('auth').pipe(
            take(1),
            map((authState) => {
              return authState.user;
            }),
            switchMap((user) =>
              this.store.select('recipes').pipe(
                take(1),
                exhaustMap((recipesState) => {
                  const recipes = recipesState.recipes;
                  return this.http.post<Recipe[]>(
                    'http://localhost:3000/api/v1/ngRecipes',
                    recipes,
                    {
                      headers: new HttpHeaders().set(
                        'Authorization',
                        'Bearer ' + user.token
                      ),
                    }
                  );
                })
              )
            )
          )
        )
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
