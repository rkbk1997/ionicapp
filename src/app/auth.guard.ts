import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: WindowService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    if (localStorage.getItem('user')){
      console.log('true')
      return true;
    }else{
      console.log('false')
      this.router.navigate(['/login']);
      return false;
    }
  }
}
