import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  canActivate(){
    if(sessionStorage.getItem('authenticated')=="true"){
      return true
    }
    return false;
  }
  
}
