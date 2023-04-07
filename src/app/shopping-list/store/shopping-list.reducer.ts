import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import * as AppStore from '../../store/app.reducer';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIndex: number;
}

const initialState : State ={
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIndex: -1,
}

export function shoppingListReducer(
  state = initialState,
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
      updatedIngredients[state.editedIndex] = action.payload;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIndex: -1,
        editedIngredient: null
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const ingredientDeleted = state.ingredients.filter((ig, igIndex) =>{
        return igIndex !== state.editedIndex
      })
      return {
        ...state,
        ingredients: ingredientDeleted,
        editedIndex: -1,
        editedIngredient: null
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
