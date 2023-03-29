import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  formAddItem : FormGroup;
  subscription : Subscription;
  @ViewChild('f') editForm : FormGroup;
  editMode = false;
  editedItemIndex : number;

  constructor(private slService : ShoppingListService){}
  
  ngOnInit(){
    this.subscription = this.slService.editedIngredient.subscribe((index : number) =>{
      this.editMode = true;
      this.editedItemIndex = index;
      const editingIngredient = this.slService.getIngredient(index);
      this.editForm.setValue({
        'name': editingIngredient.name,
        'amount': editingIngredient.amount,
      })
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value['name'], value['amount']);
    if (this.editMode){
      this.slService.updateIngredients(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  
  onDelete(index:number){
    this.slService.deleteIngredient(index);
    this.editMode = false;
  }

  onClear(form : NgForm){
    form.reset();
  }

}
