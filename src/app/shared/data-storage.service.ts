import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.store.select('auth').pipe(
      map(authState => {
        return authState.user
      }),
      take(1),
      exhaustMap(user => {
        return this.http
        .post<Recipe[]>('http://localhost:3000/api/v1/ngRecipes', recipes, {
          headers: new HttpHeaders().set('Authorization', 'Bearer '+user.token)
        })
      }),
      tap(respRecipes => {
        this.recipeService.setRecipes(respRecipes);
      })
    );
  }

  fetchRecipes() {
    return this.store.select('auth').pipe(
      map(authState => {
        return authState.user
      }),
      take(1),
      exhaustMap(user => {
        return this.http
          .get<Recipe[]>('http://localhost:3000/api/v1/ngRecipes', {
            headers: new HttpHeaders().set('Authorization', 'Bearer '+user.token)
          })
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
