import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

import * as RecipesActions from './store/recipes.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit, OnDestroy {
  selectedRecipe : Recipe;
  dataSub : Subscription;
  constructor(private dataStorageService:DataStorageService,
    private store:Store<AppState>){}

  ngOnInit(){
      this.store.dispatch(new RecipesActions.FectchReceipesStart())
        //this.dataSub = this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
      this.dataSub.unsubscribe();
  }
}
