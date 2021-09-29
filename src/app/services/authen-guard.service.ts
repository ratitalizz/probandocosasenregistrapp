import { Injectable } from '@angular/core';

//
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuardService {

  constructor(
    public authenticationService:AuthenticationService
  ) { 

  }

  canActivate():boolean{
    return this.authenticationService.isAuthenticated();
  }

}
