import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FaqListComponent } from "./faq-list.component";
import { FaqService } from '../services/faq.service';

describe("FaqListComponent", () => {
  let fixture: ComponentFixture<FaqListComponent>;
  let component: FaqListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqListComponent],
      providers: [FaqService]
    });

    fixture = TestBed.createComponent(FaqListComponent);
    component = fixture.componentInstance;
  });

  it("FaqListComponent should be defined", () => {
    expect(component).toBeTruthy();
  });

});


