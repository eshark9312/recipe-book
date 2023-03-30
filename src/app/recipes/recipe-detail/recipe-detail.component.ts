import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  id:number;
  recipe: Recipe;
  
  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router){}
  
  ngOnInit(){
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
        const selectedRecipe = this.recipeService.getRecipe(this.id) as Recipe;
        if(selectedRecipe){
          this.recipe = selectedRecipe;
        } else {
          this.router.navigate(['/', 'recipes'])
        }
      }
    )

  }

  onAddToShoppingList(){
    console.log(this.recipe.ingredients)
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

  onDelete(index:number){
    this.recipeService.deleteRecipe(index);
    this.router.navigate([''],{relativeTo: this.route})
  }
}
