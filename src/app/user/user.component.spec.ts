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


describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserService: UserService;


  beforeEach(async(() => {
    mockUserService = jasmine.createSpyObj(['getUsers', 'getRoles']);
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: mockUserService }
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
