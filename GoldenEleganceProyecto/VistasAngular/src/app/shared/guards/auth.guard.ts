import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class authGuard implements CanActivate {
  constructor(private auth: AuthService, private router:Router) {

  }
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
