import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

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

  constructor(private authService: AuthService){}
  onNavigate(feature: string){
    this.loaded = feature;
  }

  ngOnInit(){
    this.authService.autoLogin();
  }
}
