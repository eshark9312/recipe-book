import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Observable<{ingredients: Ingredient[]}>;
  constructor(
    private slService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  //  this.ingredients = this.slService.getIngredients();
  //  this.subscription = this.slService.ingredientModified.subscribe(
  //    (ingredients: Ingredient[]) => {
  //      this.ingredients = ingredients;
  //    }
  // );
  }

  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }

  onEditIngredient(index: number) {
    this.slService.editedIngredient.next(index);
  }
}
