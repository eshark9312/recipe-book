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
        return recipeIndex != action.payload;
      });
      return {
        ...state,
        recipes: [...recipeDeleted],
      };
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipesActions.UPDATE_RECIPE:
      const recipeUpdated = [...state.recipes];
      recipeUpdated[action.payload.id] = action.payload.recipe;
      return {
        ...state,
        recipes: [...recipeUpdated]
      }
    default:
      return state;
  }
}
