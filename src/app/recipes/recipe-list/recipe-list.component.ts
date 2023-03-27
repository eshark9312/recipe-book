import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test recipe', '../../../assets/imgs/xxx.png'),
    new Recipe('Another test recipe', 'this is a test recipe', '../../../assets/imgs/xxx.png')
  ];
  @Output() recipeWasSelected= new EventEmitter<Recipe>();

  constructor () {

  }
  ngOnInit () {

  }

  updateDetail(recipe2disp:Recipe){
    this.recipeWasSelected.emit(recipe2disp)
  }
}
