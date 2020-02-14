
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {

  constructor(private authenticationService: AuthenticationService) { }

  canLoad(route: Route): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    console.log(currentUser);
    if (!currentUser || currentUser.role !== 'admin') {
      alert('You are not authorised to visit this page');
      return false;
    }
    return true; // Admin logged in so return true
  }
}
