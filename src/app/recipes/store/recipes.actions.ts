import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES_START = '[Recipes] Fetch Recipes Start';
export const ADD_RECIPE = '[Recipes] Add Recipe';
export const DEL_RECIPE = '[Recipes] Del Recipe';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class FectchReceipesStart implements Action {
  readonly type = FETCH_RECIPES_START;
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}

export class DelRecipe implements Action {
  readonly type = DEL_RECIPE;
  constructor(public payload: number) {}
}

export type RecipesActions =
  | SetRecipes
  | FectchReceipesStart
  | AddRecipe
  | DelRecipe;
