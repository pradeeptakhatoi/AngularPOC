import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostComponent } from './edit-post.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostService } from 'dist/post/post';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('EditPostComponent', () => {
  let component: EditPostComponent;
  let fixture: ComponentFixture<EditPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostComponent ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [FormBuilder, PostService, ActivatedRoute, Router]
    });

    fixture = TestBed.createComponent(EditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
