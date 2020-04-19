import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ICanDeactivate } from './can-deactivate';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivate> {

  canDeactivate(
    component: ICanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(currentRoute);
      console.log(currentState);
      if(component.hasChanges()) {
        const msg = 'Entries will not be saved!. You leave this screen.?';
        return confirm(msg);
      }
      return true;
  }

}
