import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeService : RecipeService,
        private dataStorageService:DataStorageService){}

  ngOnInit(){
    this.dataStorageService.fetchRecipes();
  }
}
