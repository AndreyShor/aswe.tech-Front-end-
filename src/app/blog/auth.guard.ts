import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Auth } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.auth.getisAuth();
    const isAdmin = this.auth.getisAdmin();
    const url = state.url;

    if (url === '/blog/admin') {
      if (!isAdmin) {
        this.router.navigate(['/']);
      }
    }
    if (!isAuth) {
      this.router.navigate(['/']);
    }
    return isAuth;
  }

}
