import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { AddUserComponent } from './add-user/add-user.component';
import { FormatPhonePipe } from './format-phone.pipe';

// Import primeng modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    FormatPhonePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    ButtonModule,
    InputTextareaModule,
    RadioButtonModule,
    EditorModule
  ],
  providers: [UserService]
})
export class UserModule { }
