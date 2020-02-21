import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './post.service';
import { async } from '../../../node_modules/@types/q';


describe('PostService', () => {
  let service: PostService;
  let posts: any[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPosts should return 2 posts', async () => {
    await service.getPosts(2).toPromise().then((data: any[]) => {
      posts = data;
    });
    expect(posts.length).toBe(2);
  });

  it('getPostsUsingPromise should return 3 posts', async () => {
    await service.getPostsUsingPromise(3).then((data: any[]) => {
      posts = data;
    });
    expect(posts.length).toBe(3);
  });

});
