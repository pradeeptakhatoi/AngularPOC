import { TestBed, ComponentFixture, fakeAsync, tick, flush } from "@angular/core/testing";
import { Router } from "@angular/router";
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CapitalizePipe } from '../_helpers/capitalize.pipe';
import { AdService } from '../ads/ad.service';
import { AboutusComponent } from "./aboutus.component";

describe("AboutusComponent", () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;
  let mockRouter;
  let mockAdService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(["Router", "navigate", "navigateByUrl"]);
    mockAdService = jasmine.createSpyObj(["AdService", "getAds"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AboutusComponent,
        AdBannerComponent,
      ],
      providers: [
        // { provide: Router, useClass: Router },
        { provide: AdService, useValue: mockAdService },
        CapitalizePipe
      ],
    });

    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
  });

  it("AboutusComponent Created", () => {
    expect(component).toBeTruthy();
  });

  it("Test Page Heading", () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toContain(component.pageHeading);
  });

  it("Test onClick Method", () => {
    component.counter = 0;

    const router: any = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.callFake(() => {
      component.counter++;
      return Promise.resolve({});
    });

    component.onClick();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(component.counter).toEqual(1);
  });

  it('Test testTimer Function', fakeAsync(() => {
    component.counter = 0;
    component.testTimer();
    flush();
    expect(component.counter).toEqual(1);
  }));

});

@Component({ selector: "app-ad-banner", template: `<div></div>` })
export class AdBannerComponent {
  @Input() ads: any[];
}
