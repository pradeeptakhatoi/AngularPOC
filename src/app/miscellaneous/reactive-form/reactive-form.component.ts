import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import STATES from "../../../assets/data/states.json";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
})
export class ReactiveFormComponent implements OnInit {
  title = "Reactive Form Example";
  submitted = false;
  states = STATES;
  passwordPattern = "[a-zA-Z0-9_@]{8,15}$";

  userForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(this.passwordPattern),
    ]),
    address: new FormGroup({
      address1: new FormControl("", [Validators.required]),
      address2: new FormControl(""),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      zip: new FormControl("", [
        Validators.required,
        Validators.pattern("([0-9]){6}"),
      ]),
    }),
  });

  get f() {
    return this.userForm.controls;
  }

  constructor() {}

  ngOnInit(): void {}

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
