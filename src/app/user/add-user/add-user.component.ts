import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { CdkScrollable } from '@angular/cdk/scrolling';
import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  cities: City[];
  rating = 2;

  constructor() {
    // An array of cities
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  submitted = false;
  // userRoles: any = [];
  // selectedValues: string[] = ['val1', 'val2'];


  @ViewChild('userForm') public userForm: NgForm;

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      alert('Please fill all the form fields');
    }
  }

}
