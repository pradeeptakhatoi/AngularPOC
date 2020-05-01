import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { User } from '../_models';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, DoCheck {
  title = 'AngularPOC';
  loading = false;
  @Input() user: User;
  userUpdated = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // console.log('Before Update : ' + JSON.stringify(this.user));
    setTimeout(() => {
      if (this.user) {
        this.user.firstName = 'Pradeepta';
        this.user.lastName = 'Khatoi';
        this.user.username = 'pradeepta';
        this.userUpdated = true;
      }
      // console.log('After Update : ' + JSON.stringify(this.user));
    }, 2000);
  }

  ngDoCheck() {
    // check for object mutation
    if (this.userUpdated) {
      this.userUpdated = !this.userUpdated;
      this.cd.markForCheck();
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
