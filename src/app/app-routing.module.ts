import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'recipes', pathMatch: 'full'},
  {path:'shoppingList', component:ShoppingListComponent},
  {path:'not-found', component:PageNotFoundComponent},
  {path:'auth', component:AuthComponent},
  //{path:'**', redirectTo:'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
