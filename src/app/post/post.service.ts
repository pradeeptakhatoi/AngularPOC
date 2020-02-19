import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  private newPostSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get<[any]>('./assets/data/posts.json').pipe(map(posts => posts.slice(0, 5)));
  }

  public getPostsUsingPromise(limit = 5) {
    const promise = new Promise((resolve, reject) => {
      this.http.get<any[]>('./assets/data/posts.json')
        .pipe(map(posts => posts.slice(0, limit)))
        .toPromise()
        .then((posts: any) => {
          resolve(posts);  // Success
        }, err => {
          reject(err); // Error
        });
    });
    return promise;
  }

  addNewPost(title: string, body: string) {
    this.newPostSubject.next({ title, body });
  }

  getNewPost(): Observable<any> {
    return this.newPostSubject.asObservable();
  }

}
