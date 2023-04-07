import { AppState } from './../store/app.reducer';
import { Store } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';



export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  router: RouterStateSnapshot
) => {
  const urlTree = inject(Router).createUrlTree(['/auth']);
  const appStore = inject(Store<AppState>);
  return appStore.select('auth').pipe(
    map(authState => {
      return authState.user
    }),
    take(1),
    map((user) => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return urlTree;
    })
  );
};
