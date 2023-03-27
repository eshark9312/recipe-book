import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    console.log (this.amountInputRef.nativeElement.value);
    const ingAmount: number = this.amountInputRef.nativeElement.value;
    const ingName: string = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);;
    this.ingredientAdded.emit(newIngredient);
  }
}
