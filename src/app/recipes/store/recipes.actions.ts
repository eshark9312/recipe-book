import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const FETCH_RECIPES_START = '[Recipes] Fetch Recipes Start';
export const SET_RECIPES = '[Recipes] Set Recipes';
export const SAVE_RECIPES_START = '[Recipes] Save Recipes Start';
export const SAVE_RECIPES_SUCCESS = '[Recipes] Save Recipes Success';
export const ADD_RECIPE = '[Recipes] Add Recipe';
export const DEL_RECIPE = '[Recipes] Del Recipe';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';


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

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {id: number, recipe: Recipe}){}
}

export class SaveRecipesStart implements Action {
  readonly type = SAVE_RECIPES_START;
}

export class SaveRecipesSuccess implements Action {
  readonly type = SAVE_RECIPES_SUCCESS;
}

export type RecipesActions =
  | SetRecipes
  | FectchReceipesStart
  | AddRecipe
  | DelRecipe
  | UpdateRecipe
  | SaveRecipesStart
  | SaveRecipesSuccess;
