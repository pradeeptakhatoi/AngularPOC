import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';

import { ViewPostComponent } from './view-post.component';
import { PostService } from 'dist/post/post';
import { ActivatedRoute } from '@angular/router';

const fakeActivatedRoute = {
  snapshot: {
    queryParams: {
      returnUrl: '/'
    }
  }
};

describe('ViewPostComponent', () => {
  let component: ViewPostComponent;
  let fixture: ComponentFixture<ViewPostComponent>;
  let mockPostService;
  // let mockActivatedRoute;

  beforeEach(async(() => {
    mockPostService = jasmine.createSpyObj('PostService', ['getSinglePost']);
    // mockActivatedRoute = { route: { params: { of({id: '5'}); }}};

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewPostComponent ],
      providers: [
        {provide: PostService, useValue: mockPostService},
        {provide: ActivatedRoute, useClass: ActivatedRoute },
      ]
    });

    fixture = TestBed.createComponent(ViewPostComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
