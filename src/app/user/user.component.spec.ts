import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { Observable, Observer } from 'rxjs';


const mockData = [
  {
    name: 'Victor Mejia',
    email: 'victor.mejia@example.com',
    phone: '123-456-7890'
  }
];

class MockUserService {
  getUsers() {
    return Observable.create((observer: Observer<any>) => {
      observer.next(mockData);
    });
  }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: MockUserService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
