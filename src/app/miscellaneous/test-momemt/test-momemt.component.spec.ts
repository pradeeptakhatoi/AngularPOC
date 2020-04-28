import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMomemtComponent } from './test-momemt.component';

describe('TestMomemtComponent', () => {
  let component: TestMomemtComponent;
  let fixture: ComponentFixture<TestMomemtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMomemtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMomemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
