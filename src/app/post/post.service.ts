import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  private newPostSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getPosts(limit = 5) {
    return this.http.get<[any]>('./assets/data/posts.json').pipe(map(posts => posts.slice(0, limit)));
  }

  public getSinglePost(id: number) {
    const promise = new Promise((resolve, reject) => {
      return this.http.get<[any]>('./assets/data/posts.json')
        .toPromise()
        .then((posts: any[]) => {
          const post = posts.filter(p => p.id == id);
          if (post && post.length) {
            resolve(post[0]);  // Success
          } else {
            reject('Post Not Found'); // Error
          }
        }, err => {
          reject(err); // Error
        });
    });
    return promise;
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

  addNewPost(title: string, body: string, rating: number) {
    this.newPostSubject.next({ title, body, rating});
  }

  getNewPost(): Observable<any> {
    return this.newPostSubject.asObservable();
  }

}
