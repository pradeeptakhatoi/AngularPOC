import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get<[any]>('https://jsonplaceholder.typicode.com/todos').pipe(map(todos => todos.slice(0, 10)));
  }
}
