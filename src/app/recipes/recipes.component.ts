import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';

import * as RecipesActions from './store/recipes.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit, OnDestroy {
  selectedRecipe : Recipe;
  constructor(private store:Store<AppState>){}

  ngOnInit(){
      this.store.dispatch(new RecipesActions.FectchReceipesStart())
  }

  ngOnDestroy(): void {
  }
}
