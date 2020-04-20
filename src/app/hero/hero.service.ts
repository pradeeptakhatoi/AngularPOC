import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  public getHeros() {
    const options = {observe: 'response'};
    return this.http.get<[any]>('./assets/data/heros.json', options); //.pipe(map(heros => heros.slice(0, 5)));
  }

}

