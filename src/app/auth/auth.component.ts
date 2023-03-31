import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error = null as string;
  
  constructor(private authService : AuthService){}
  
  onSubmit(form : NgForm){
    if(!form.valid){
      return; 
    }
    const email = form.value['email'];
    const password = form.value['password'];
    
    let authObs : Observable<AuthResponse>

    this.isLoading = true;
    if(this.isLoginMode){
      authObs=this.authService.login(email, password)
    } else {
      authObs=this.authService.signUp(email, password)
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      errorMessage =>{
        this.error = errorMessage;
      });
    this.isLoading = false;
    form.reset();
  }

  onSwitchMode(){
    this.isLoginMode = ! this.isLoginMode;
  }
}
