import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes = [] as Recipe[];
  subscription : Subscription;
  constructor (private recipeService : RecipeService,
          private router: Router,
          private route: ActivatedRoute) {

  }
  ngOnInit () {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      () => {
        this.recipes = this.recipeService.getRecipes();
      }
    )

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onNew(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
