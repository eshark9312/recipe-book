import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeService : RecipeService,
        private dataStorageService:DataStorageService,
        private authService : AuthService,
        private router : Router){}

  ngOnInit(){
        this.dataStorageService.fetchRecipes().subscribe();
  }
}
