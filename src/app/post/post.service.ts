import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get<[any]>('./assets/data/posts.json').pipe(map(posts => posts.slice(0, 5)));
  }

}
