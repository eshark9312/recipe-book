import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit, OnDestroy {
  selectedRecipe : Recipe;
  dataSub : Subscription;
  constructor(private dataStorageService:DataStorageService){}

  ngOnInit(){
        this.dataSub = this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
      this.dataSub.unsubscribe();
  }
}
