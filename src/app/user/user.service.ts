import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<[any]>('./assets/data/users.json').pipe(map(items => items.slice(0, 5)));
  }
}
