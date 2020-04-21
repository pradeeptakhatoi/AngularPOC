import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import STATES from "../../../assets/data/states.json";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form-using-fb.component.html",
})
export class ReactiveFormUsingFBComponent implements OnInit {
  title = "Reactive Form Using Form Builder";
  submitted = false;
  states = STATES;
  passwordPattern = "[a-zA-Z0-9_@]{8,15}$";

  userForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: [""],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.pattern(this.passwordPattern)]],
    address: this.fb.group({
      address1: ["", [Validators.required]],
      address2: [""],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      zip: ["", [Validators.required, Validators.pattern("([0-9]){6}")]],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("====================");
    console.log(this.userForm.valid);
    console.log("====================");
    console.log(this.userForm);
    console.log("====================");
    console.log(this.userForm.value);
    console.log("====================");
  }
}
