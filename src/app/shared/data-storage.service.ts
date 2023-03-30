import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .post(
        'http://localhost:3000/api/v1/ngRecipes',
        recipes,
        {
            headers: new HttpHeaders({"Access-Control-Allow-Origin" : "true"})
        }
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('http://localhost:3000/api/v1/ngRecipes')
    .pipe(map( recipes =>{
      return recipes.map( recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      })
    }), tap( recipes =>{
      this.recipeService.setRecipes(recipes);
    }))
    
  }

}
