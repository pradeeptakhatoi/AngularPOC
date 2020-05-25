import { TestBed, ComponentFixture, fakeAsync, flush } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { BrowserModule } from "@angular/platform-browser";
import { of } from 'rxjs';

import { HeroComponent } from "./hero.component";
import { HeroService } from './hero.service';

describe("HeroComponent", () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let bsModalService: BsModalService;
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserModule, ModalModule.forRoot()],
      declarations: [HeroComponent],
      providers: [HeroService]
    });

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    bsModalService = TestBed.inject(BsModalService);
    heroService = TestBed.inject(HeroService);
  });

  it("HeroComponent Created", () => {
    expect(component).toBeTruthy();
  });

  it("Test Hero List", fakeAsync(() => {
    const heroList = require("../../assets/data/heros.json");
    spyOn(heroService, 'getHeros').and.returnValue(of(heroList));
    fixture.detectChanges();
    flush();
    expect(component.heros).toEqual(heroList);
  }));

});
