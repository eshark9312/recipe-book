import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    //ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientModified = new Subject<Ingredient[]>();
    editedIngredient = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple',  10),
        new Ingredient('tomato',  5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientModified.next(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientModified.next(this.ingredients.slice());
    }

    updateIngredients(index:number, ingredient : Ingredient){
        this.ingredients[index] =ingredient;
        this.ingredientModified.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientModified.next(this.ingredients.slice());
    }


    
}