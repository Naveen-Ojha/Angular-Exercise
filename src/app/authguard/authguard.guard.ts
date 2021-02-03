import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private ro: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLogin())
      return true;

    else {
      this.ro.navigate(['/login']);
    }
    return true;
  }
  isLogin(): boolean {
    let id: any = (localStorage.getItem("user-data"));
    if(id) {
      return true;
    }
    else {
      return false;
    }
  }

}