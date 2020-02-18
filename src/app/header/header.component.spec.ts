// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HeaderComponent } from './header.component';
// import { Observable, Observer } from 'rxjs';
// import { AuthenticationService } from '../_services';

// class MockAuthenticationService {
//   getData: () => {};
// }

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [HeaderComponent],
//       providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });



//   it('dfgdfgdfgfd', () => {
//     spyOn(MockAuthenticationService, 'getData').and.returnValue({ subscribe: () => { } });
//     // do stuff
//     expect(MockAuthenticationService.getData).toHaveBeenCalled();
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
