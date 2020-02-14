import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
