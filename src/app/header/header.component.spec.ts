import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { AuthenticationService } from "../_services";
import { User } from "../_models";

class MockAuthenticationService {
  getData: () => {};
  logout() {}
}

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthenticationService;
  let router: Router;

  const mockUser = {
    id: 1,
    role: "admin",
    firstName: "any",
    lastName: "thing",
    username: "pkk",
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it("HeaderComponent Created", () => {
    expect(component).toBeTruthy();
  });

  it("Test ngOnInit Method", fakeAsync(() => {
    component.user = mockUser;
    component.ngOnInit();
    flush();
    expect(component.user.username).toEqual("pradeepta");
  }));

  it("Test ngDoCheck Method", () => {
    component.userUpdated = true;
    component.ngDoCheck();
    expect(component.userUpdated).toBeFalse();
  });

  it("Test Logout Method", () => {
    const spy = spyOn(router, "navigate");
    component.logout();
    expect(spy).toHaveBeenCalled();
  });

});
