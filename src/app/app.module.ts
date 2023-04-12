import { RecipesEffects } from './recipes/store/recipes.effects';
import { AuthEffects } from './auth/store/auth.effects';
import { appReducer } from './store/app.reducer';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

const APP_BASE_HREF = null as InjectionToken<string>;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({logOnly: false}),
    //StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects, RecipesEffects])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/recipe-book/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
