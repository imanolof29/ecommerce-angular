import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private route:Router) { }

  canActivate(): boolean {
    if(sessionStorage.getItem('token')){
      return true
    }
    console.log("Bloqueado por can activate")
    return false
  }
}
