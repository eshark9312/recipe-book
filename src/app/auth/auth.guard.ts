import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';
import { inject } from '@angular/core';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';


export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  router: RouterStateSnapshot
) => {
  const urlTree = inject(Router).createUrlTree(['/auth']);  
  return inject(AuthService).user.pipe(
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
