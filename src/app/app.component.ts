import * as AuthActions from './auth/store/auth.actions';
import { AppState } from './store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ]
})
export class AppComponent implements OnInit{
  title = 'my-courseProj-basic';
  loaded:string = 'recipe';

  constructor(private store:Store<AppState>){}
  onNavigate(feature: string){
    this.loaded = feature;
  }

  ngOnInit(){
    // auto login
      this.store.dispatch(new AuthActions.AutoLogin());
  }
}
