import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { of } from 'rxjs';


import { AddPostComponent } from './add-post.component';
import { PostService } from '../post.service';

export class MockPostService {
  posts = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequunturutem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihim non debitis possimus qui neque nisi nulla'
    }
  ];

  getPosts() {
    return of(this.posts);
  }
  getNewPost() {
    return of(this.posts[this.posts.length - 1]);
  }
  getPostsUsingPromise() { }
}

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [AddPostComponent],
      providers: [
        { provide: PostService, useClass: MockPostService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddPostComponent', () => {
    expect(component).toBeTruthy();
  });

  it('title should equal to title set my the component', () => {
    expect(component.title).toEqual(fixture.nativeElement.querySelector('h1').textContent);
  });

  it('should use the posts list from the service', () => {
    expect(fixture.nativeElement.querySelectorAll('#postBody > tr').length).toEqual(3);
  });

});
