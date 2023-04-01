import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
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
      private authService : AuthService) {}
  
  ngOnInit(){
    this.userSub = this.authService.user.subscribe(
      user => {
        if(user){
          this.isAuthenticated = true;
        }
      }
    );
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onSave() {
    this.dataStorageService.storeRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
