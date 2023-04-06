import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as AppStore from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  formAddItem: FormGroup;
  subscription: Subscription;
  @ViewChild('f') editForm: FormGroup;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  ingredients: Observable<AppStore.AppState['shoppingList']>;

  constructor(
    private slService: ShoppingListService,
    private store: Store<AppStore.AppState>
  ) {}

  ngOnInit() {
    this.store.select('shoppingList').subscribe((storeData) => {
      if (storeData.editedIndex > -1) {
        this.editMode = true;
        this.editedItem = storeData.editedIngredient;
        this.editedItemIndex = storeData.editedIndex;
        this.editForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value['name'], value['amount']);
    if (this.editMode) {
      //this.slService.updateIngredients(this.editedItemIndex, newIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          ingredient: newIngredient,
          index: this.editedItemIndex,
        })
      );
    } else {
      //this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(index: number) {
    //this.slService.deleteIngredient(index);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(index));
    this.editMode = false;
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
