import { NgModule } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';



@NgModule({
  providers: [ShoppingListService, RecipeService, DataStorageService]
})
export class CoreModule { }
