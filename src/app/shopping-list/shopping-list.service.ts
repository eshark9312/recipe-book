import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple',  10),
        new Ingredient('tomato',  5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
    
}