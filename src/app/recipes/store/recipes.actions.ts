import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES_START = '[Recipes] Fetch Recipes Start';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]){}
}

export class FectchReceipesStart implements Action {
  readonly type = FETCH_RECIPES_START;
}

export type RecipesActions = SetRecipes | FectchReceipesStart;
