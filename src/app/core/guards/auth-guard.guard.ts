import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthenticated: boolean = this._authService.isAuthenticated();

    !isAuthenticated && this._router.navigateByUrl('/forbidden');

    return isAuthenticated;
  }
}
