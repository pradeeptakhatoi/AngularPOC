import { TestBed } from "@angular/core/testing";
import { AuthenticationService } from "./authentication.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../environments/environment";
import { HttpErrorResponse } from '@angular/common/http';

describe("AuthenticationService", () => {
  let authService: AuthenticationService;
  let httpMock: HttpTestingController;

  const mockUserData = {
    id: 1,
    role: "admin",
    username: "admin",
    firstName: "pradeepta",
    lastName: "khatoi",
    token: "fake-jwt-token",
  };

  const mockUserList = [
    {
      id: 1,
      role: "admin",
      username: "admin",
      firstName: "pradeepta",
      lastName: "khatoi",
      token: "fake-jwt-token",
    },
    {
      id: 1,
      role: "admin",
      username: "admin",
      firstName: "pradeepta",
      lastName: "khatoi",
      token: "fake-jwt-token",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService],
    });

    authService = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("AuthenticationService Created", () => {
    expect(authService).toBeTruthy();
  });

  it("Test Login Method", () => {

    const { username, password } = { username: "admin", password: "admin@123" };

    authService.login(username, password).subscribe((user) => {
      expect(user).toBe(mockUserData);
    });

    const loginUrl = `${environment.apiUrl}users/authenticate`;
    const req = httpMock.expectOne(loginUrl);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe("json");
    expect(req.request.method).toBe("POST");

    req.flush(mockUserData);
  });

  it("Test Logout", () => {
    const spy = spyOn(localStorage, 'removeItem');
    authService.logout();
    expect(spy).toHaveBeenCalled();
  });

  it("Test updateProfile", () => {
    const spy = spyOn(localStorage, 'setItem');
    authService.updateProfile(mockUserData);
    expect(spy).toHaveBeenCalled();
  });

  it("Test getAllUsers", () => {
    authService.getAllUsers().subscribe((users) => {
      expect(users).toEqual(mockUserList);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}users`);

    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(mockUserList);
  });

  it("Should test 404 error", () => {
    const errorMsg = "mock 404 error occured";
    const statusTxt = "Not Found";

    authService.getAllUsers().subscribe((data) => {
      fail("failing with error 404");
    }, (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.statusText).toEqual(statusTxt);
      expect(error.error).toEqual(errorMsg);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}users`);

    req.flush(errorMsg, {status: 404, statusText: statusTxt});
  });


});
