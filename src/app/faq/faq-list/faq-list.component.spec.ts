import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { FaqListComponent } from "./faq-list.component";
import { FaqService } from '../services/faq.service';
import { FaqComponent } from '../faq/faq.component';

describe("FaqListComponent", () => {
  let fixture: ComponentFixture<FaqListComponent>;
  let component: FaqListComponent;
  let faqService: FaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqListComponent, FaqComponent],
      providers: [FaqService]
    });

    fixture = TestBed.createComponent(FaqListComponent);
    component = fixture.componentInstance;
    faqService = TestBed.inject(FaqService);
  });

  it("FaqListComponent should be defined", () => {
    expect(component).toBeTruthy();
  });

  it("Faq count must match", () => {
    const faqList = require('../../../assets/data/faq.json');
    spyOn(faqService, 'getFaqList').and.returnValue(of(faqList));
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.directive(FaqComponent));
    expect(de.length).toEqual(component.faqList.length);
  });

  it("FaqComponent input property faq must be initialized", () => {
    const faqList = require('../../../assets/data/faq.json');
    spyOn(faqService, 'getFaqList').and.returnValue(of(faqList));
    fixture.detectChanges();

    const faqComponentDE = fixture.debugElement.queryAll(By.directive(FaqComponent))[0];
    fixture.detectChanges();
    expect(faqComponentDE.componentInstance.faq).toEqual(faqList[0]);
  });


  it("Toggle isHidden property on click", () => {
    const faqList = require('../../../assets/data/faq.json');
    spyOn(faqService, 'getFaqList').and.returnValue(of(faqList));
    fixture.detectChanges();

    const faqComponentDE = fixture.debugElement.queryAll(By.directive(FaqComponent))[0];
    const h2 = faqComponentDE.query(By.css('h2'));
    // Set to false
    faqComponentDE.componentInstance.isHidden = false;

    // After click it should be true
    h2.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(faqComponentDE.componentInstance.isHidden).toBe(true);

    // After click it should be false again
    h2.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(faqComponentDE.componentInstance.isHidden).toBe(false);
  });

});


