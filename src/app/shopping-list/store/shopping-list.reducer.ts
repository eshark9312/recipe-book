import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import * as AppStore from '../../store/app.reducer';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIndex: number;
}

const initialState: AppStore.AppState = {
  shoppingList: {
    ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
    editedIngredient: null,
    editedIndex: -1,
  },
};

export function shoppingListReducer(
  state = initialState.shoppingList,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = action.payload.ingredient
      return {
        ...state,
        ingredients: updatedIngredients
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const ingredientDeleted = state.ingredients.filter((ig, igIndex) =>{
        return igIndex !== action.payload
      })
      console.log(ingredientDeleted)
      return {
        ...state,
        ingredients: ingredientDeleted
      }
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    default:
      return state;
  }
}
