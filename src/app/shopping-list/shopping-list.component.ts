import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients = [] as Ingredient[];
  subscription : Subscription;
  constructor(private slService:ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientModified.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditIngredient(index : number){
    this.slService.editedIngredient.next(index);
  }

}

