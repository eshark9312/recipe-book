import { AppState } from './../../store/app.reducer';
import { take, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { Recipe } from '../recipe.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipesActions  from './../store/recipes.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.store.select('recipes').pipe(take(1), tap(recipes =>{
        const selectedRecipe = recipes.recipes[this.id];
        if (selectedRecipe) {
          this.recipe = selectedRecipe;
        } else {
          this.router.navigate(['/', 'recipes']);
        }
      })).subscribe();
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(
        this.recipe.ingredients
      )
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete(index: number) {
    this.store.dispatch(new RecipesActions.DelRecipe(index))
    this.router.navigate([''], { relativeTo: this.route });
  }
}
