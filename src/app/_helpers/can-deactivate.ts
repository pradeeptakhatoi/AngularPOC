import { Observable } from 'rxjs';

export interface ICanDeactivate {
  hasChanges(): Observable<boolean> | Promise<boolean> | boolean;
}
