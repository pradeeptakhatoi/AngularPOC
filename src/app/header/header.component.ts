import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'AngularPOC';
  loading = false;
  @Input() user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // Code
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
