import * as  AuthActions from './../auth/store/auth.actions';
import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub : Subscription = null;
  constructor(private dataStorageService: DataStorageService,
      private store : Store<AppState>) {}

  ngOnInit(){
    this.userSub = this.store.select('auth').subscribe(
      authState => {
        if(authState.user){
          this.isAuthenticated = true;
        }
      }
    );
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onSave() {
    this.dataStorageService.storeRecipes().subscribe();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout())
    //localStorage.removeItem('userData');
    //this.router.navigate(['/auth']);
    this.isAuthenticated = false;
  }
}
