import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  loading = false;
  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Get Posts
    // this.userService.getUsers().subscribe(users => {
    //   this.loading = false;
    //   this.users = users;
    // }, error => {
    //   this.loading = false;
    //   console.log(error);
    // });

    // Convert Convert Observable to Promise
    this.userService.getUsers().toPromise().then(users => {
      this.loading = false;
      this.users = users;
    }).catch(error => {
      this.loading = false;
      console.log(error);
    });
  }
}
