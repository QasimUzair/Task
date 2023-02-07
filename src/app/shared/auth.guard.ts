import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){

  }
  canActivate()
  {
    // if(){}
    if(this.auth.isLoggedIn())
    {
      return true;
      
    }
    
    alert("Hey You!... You are not Loggedin Yet")
    this.router.navigate(['login']);
    return false;
  }
  
}
