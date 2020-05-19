import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HighlightLongStringDirective } from './highlight-long-string.directive';

@Component({
  template: `<div appHighlightLongString [str]="str" [len]="len">Some text</div>`
})
class TestDirComponent {
  str = "Some Sample text";
  len = 10;
}

describe('HighlightLongStringDirective', () => {
  let component: TestDirComponent;
  let fixture: ComponentFixture<TestDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestDirComponent,
        HighlightLongStringDirective
      ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(TestDirComponent);
    component = fixture.componentInstance;
  }));

  it('Componet Created', () => {
    expect(component).toBeTruthy();
  });

  it('Set Border Color If text > 10 chars', () => {
    component.str = "Some Text More Than 10 Characters";
    component.len = 10;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.directive(HighlightLongStringDirective));
    expect(de.nativeElement.style.border).toEqual('1px dotted red');
  });

  it('Remove Border Color If text < 10 chars', () => {
    component.str = "text";
    component.len = 10;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.directive(HighlightLongStringDirective));
    expect(de.nativeElement.style.border).toEqual('');
  });

  it('Change Background On mouseenter', () => {
    const de = fixture.debugElement.query(By.directive(HighlightLongStringDirective));
    de.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(de.nativeElement.style.background).toEqual('yellow');
  });

  it('Change Background On mouseleave', () => {
    const de = fixture.debugElement.query(By.directive(HighlightLongStringDirective));
    de.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(de.nativeElement.style.background).toEqual('white');
  });

});
