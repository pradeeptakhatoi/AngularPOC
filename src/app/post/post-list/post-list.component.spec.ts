import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PostListComponent } from './post-list.component';
import { PostService } from '../post.service';
import POSTS from '../../../assets/data/posts.json';
import { By } from '@angular/platform-browser';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let mockPostService;

  beforeEach(() => {
    mockPostService = jasmine.createSpyObj('PostService', ['getPostsUsingPromise', 'deletePost']);

    TestBed.configureTestingModule({
      declarations: [PostListComponent],
      providers: [{ provide: PostService, useValue: mockPostService }],
    });

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
  });

  it('PostListComponent Should Be Created', () => {
    expect(component).toBeTruthy();
  });

  it('Initialize posts list', fakeAsync(() => {
    mockPostService.getPostsUsingPromise.and.returnValue(Promise.resolve(POSTS));
    fixture.detectChanges();
    tick();
    expect(component.posts.length).toEqual(POSTS.length);
  }));

  it('Test Page Title', fakeAsync(() => {
    mockPostService.getPostsUsingPromise.and.returnValue(Promise.resolve(POSTS));
    fixture.detectChanges();
    tick();

    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toContain(component.title);
  }));

});
