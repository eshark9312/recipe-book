import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  
  constructor(private authService : AuthService, private router:Router){}
  
  onSubmit(form : NgForm){
    if(!form.valid){
      return; 
    }
    const email = form.value['email'];
    const password = form.value['password'];
    
    let authObs : Observable<AuthResponse>

    this.isLoading = true;
    if(this.isLoginMode){
      this.authService.login(email, password).subscribe(
        resData => {
          this.router.navigate(['/recipes'])
          this.isLoading = false;
          form.reset();
          console.log('login succeeded')
        },
        errorMessage =>{
          this.error = errorMessage;
          this.isLoading = false;
        });
    } else {
      authObs=this.authService.signUp(email, password)
      authObs.subscribe(
        resData => {
          this.isLoading = false;
        },
        errorMessage =>{
          this.error = errorMessage;
          this.isLoading = false;
        });
    }
    
  }

  onSwitchMode(){
    this.isLoginMode = ! this.isLoginMode;
  }

  onHandleError(){
    this.error = null;
  }
}
