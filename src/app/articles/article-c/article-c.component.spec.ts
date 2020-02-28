import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCComponent } from './article-c.component';

describe('ArticleCComponent', () => {
  let component: ArticleCComponent;
  let fixture: ComponentFixture<ArticleCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
