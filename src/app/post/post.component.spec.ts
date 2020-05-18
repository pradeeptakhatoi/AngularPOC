import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { PostComponent } from './post.component';
import { Observable, Observer } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

const mockData = [
  {
    name: 'Victor Mejia',
    email: 'victor.mejia@example.com',
    phone: '123-456-7890'
  }
];

class MockPostService {
  getPosts(url) {
    return Observable.create((observer: Observer<any>) => {
      observer.next(mockData);
    });
  }
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [PostComponent],
      providers: [
        { provide: PostService, useClass: MockPostService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
