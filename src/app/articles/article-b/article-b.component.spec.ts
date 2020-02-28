import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBComponent } from './article-b.component';

describe('ArticleBComponent', () => {
  let component: ArticleBComponent;
  let fixture: ComponentFixture<ArticleBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
