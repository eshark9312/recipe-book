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
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .post('http://localhost:3000/api/v1/ngRecipes', recipes, {
        headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'true' }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes1(){
    return this.http
    .get<Recipe[]>('http://localhost:3000/api/v1/ngRecipes', {
      headers: new HttpHeaders().set('Authentication', 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ2FtaWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjgwMzA4NjcwLCJleHAiOjE2ODAzOTUwNzB9.ae-ZpKGFHRQzDmIePOkyaEwxH15C-IcSbZ19GFHoqso')
    }).pipe(
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
    )
  }


  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        console.log(user)
        return this.http
          .get<Recipe[]>('http://localhost:3000/api/v1/ngRecipes', {
            headers: new HttpHeaders().set('Authentication', 'Bearer '+user.token)
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
