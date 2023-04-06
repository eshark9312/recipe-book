import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import * as ShoppingListActions from './store/shopping-list.actions'
import * as AppStore from '../store/app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Observable<AppStore.AppState['shoppingList']>;

  constructor(
    private slService: ShoppingListService,
    private store: Store<AppStore.AppState>
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
    //this.slService.editedIngredient.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
