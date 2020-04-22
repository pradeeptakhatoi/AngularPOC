import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormArray } from "@angular/forms";
import STATES from "../../../assets/data/states.json";

@Component({
  selector: "app-dynamic-forms-input",
  templateUrl: "./dynamic-form-input.component.html",
})
export class DynamicFormInputComponent implements OnInit {
  title = "Form With Dynamic Inputs";
  submitted = false;
  states = STATES;

  profileForm = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""],
    }),
    aliases: this.fb.array([this.fb.control("", [Validators.required, Validators.minLength(5)])]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get f() {
    return this.profileForm.controls;
  }

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control("", [Validators.required, , Validators.minLength(5)]));
  }

  removeAlias(i) {
    this.aliases.removeAt(i);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.aliases.controls);
    console.log(this.profileForm);
    console.log(this.profileForm.value);
  }
}
