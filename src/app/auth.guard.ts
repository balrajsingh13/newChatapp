import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route:Router, 
    private authenticateService:AuthenticateService){}

  canActivate() {
    if(!!this.authenticateService.getData()){
    return true;
    // if(!!localStorage.getItem('UserId')){
    // return true;
  }
    else{
      this.route.navigate(['/']);
    return false;
  } 
 } 
}
