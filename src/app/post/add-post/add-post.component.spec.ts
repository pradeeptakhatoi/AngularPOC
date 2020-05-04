import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from "rxjs";

import { AddPostComponent } from "./add-post.component";
import { PostService } from "../post.service";
import { PostPipe } from "../post.pipe";
import { NO_ERRORS_SCHEMA, forwardRef } from "@angular/core";
import { RatingInputComponent } from '../../rating/rating-input.component';

const POSTS = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequunturutem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihim non debitis possimus qui neque nisi nulla",
  },
];

describe("AddPostComponent", () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let mockPostService;

  beforeEach(async(() => {
    mockPostService = jasmine.createSpyObj("PostService", ["getPosts", "getNewPost"]);
    TestBed.configureTestingModule({
      declarations: [AddPostComponent, PostPipe, RatingInputComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule],
      providers: [
        { provide: PostService, useValue: mockPostService },
      ]
    });

    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;

    mockPostService.getPosts.and.returnValue(of(POSTS));
    mockPostService.getNewPost.and.returnValue(of(POSTS[0]));
  }));

  it("Should Create AddPostComponent", () => {
    expect(component).toBeTruthy();
  });

  it("title should equal to title set my the component", () => {
    fixture.detectChanges();
    expect(component.pageHeading).toContain(fixture.nativeElement.querySelector("h1").textContent);
  });

  it("should use the posts list from the service", () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll("#postBody > tr").length).toEqual(2);
  });
});
