import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUsername } from '../../_validators';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  updateProfile: FormGroup;
  submitted = false;
  isUpdating = false;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  get f() { return this.updateProfile.controls; }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.updateProfile = this.fb.group({
      username: [user.username, [Validators.required, Validators.maxLength(50), ValidateUsername]],
      firstName: [user.firstName, [Validators.required, Validators.minLength(4)]],
      lastName: [user.lastName, [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isUpdating = true;
    if (this.updateProfile.valid) {
      setTimeout(() => {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        user.username = this.updateProfile.value.username;
        user.firstName = this.updateProfile.value.firstName;
        user.lastName = this.updateProfile.value.lastName;
        this.authenticationService.updateProfile(user);
        this.submitted = false;
        this.isUpdating = false;
      }, 2000);
    } else {
      alert('Please enter all form fields!!');
    }
  }

}
