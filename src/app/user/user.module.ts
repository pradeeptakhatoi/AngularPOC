import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { FormatPhonePipe } from './format-phone.pipe';

@NgModule({
  declarations: [UserComponent, AddUserComponent, FormatPhonePipe],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
