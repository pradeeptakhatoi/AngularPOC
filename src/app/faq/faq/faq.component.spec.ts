import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from '@angular/platform-browser';

import { FaqComponent } from './faq.component';
import { Faq } from '../models/faq';


describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  const mockFaq: Faq = {
    title: 'Test',
    body: 'Faq Body'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqComponent]
    });

    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
  });

  it('FaqComponent Created', () => {
    expect(component).toBeTruthy();
  });

  it('FaqComponent Created', () => {
    component.faq = mockFaq;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('a'));
    expect(de.nativeElement.textContent).toContain(mockFaq.title);
  });

});
