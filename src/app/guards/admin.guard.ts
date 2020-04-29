
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canLoad(route: Route): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.role === 'admin') {
      return true;
    }
    console.log('You are not authorised to visit this page');
    this.router.navigate(['/login']);
  }
}
