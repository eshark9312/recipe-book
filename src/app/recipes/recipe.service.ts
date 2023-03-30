import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    //recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<void>();

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

    constructor(private slService:ShoppingListService){}
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index : number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    updateRecipe(index: number, recipe : Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next();
    }

    addRecipe(recipe : Recipe){
      this.recipes.push(recipe);
      this.recipeChanged.next();
    }

    deleteRecipe(index:number){
      this.recipes.splice(index,1);
    }
}