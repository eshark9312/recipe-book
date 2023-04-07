import { Recipe } from './../recipe.model';
import * as RecipesActions from './recipes.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export function recipesReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case RecipesActions.DEL_RECIPE:
      const recipeDeleted = state.recipes.filter((recipe, recipeIndex) => {
        console.log(recipeIndex +':'+action.payload)
        return recipeIndex != action.payload;
      });
      console.log(recipeDeleted);
      return {
        ...state,
        recipes: [...recipeDeleted],
      };
    default:
      return state;
  }
}
