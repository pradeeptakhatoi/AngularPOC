import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("f") f: NgForm;
  title = "Template Driven Form Example";
  submitted = false;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    console.log("======================");
    console.log(this.f);
    console.log("======================");
    console.log(this.f.value);
    console.log("======================");
  }
}
