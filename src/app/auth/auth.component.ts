import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/place-holder.directive';
import * as AuthActions from './store/auth.actions';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error : string = null;
  private closeSub: Subscription = null;
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(){

    this.store.select('auth').subscribe(authState =>{
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    })
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value['email'];
    const password = form.value['password'];

    this.isLoading = true;
    if (this.isLoginMode) {
      this.store.dispatch(
        new AuthActions.LoginStart({email, password})
      )
    } else {
      this.store.dispatch(
        new AuthActions.SignupStart({email, password})
      )
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  private showErrorAlert(errorMessage: string) {
    const alertCompRef =
      this.alertHost.viewContainerRef.createComponent(AlertComponent);
    alertCompRef.instance.message = errorMessage;
    this.closeSub = alertCompRef.instance.close.pipe(take(1)).subscribe(() => {
      alertCompRef.destroy();
      this.closeSub.unsubscribe();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
