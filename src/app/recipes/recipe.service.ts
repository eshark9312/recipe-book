import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awesome!',
          '../../../assets/imgs/xxx.png',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe('Big Fat Burger',
          'What else you need to say?',
          '../../../assets/imgs/xxx.png',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }



}