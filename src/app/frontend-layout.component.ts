import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  template: `
  <app-header [user]="user"></app-header>
  <div class="content" role="main">
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>
  `,
})
export class FrontendlayoutComponent implements OnInit {


  user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

}
