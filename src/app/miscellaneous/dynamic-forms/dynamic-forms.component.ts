import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "./question-base";
import { QuestionControlService } from "./question-control.service";
import { QuestionService } from './question.service';

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  providers: [QuestionService, QuestionControlService],
})
export class DynamicFormsComponent implements OnInit {
  title = "Dynamic Form";
  // @Input() questions: QuestionBase<string>[] = [];
  questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = "";

  constructor(private questionService: QuestionService, private qcs: QuestionControlService) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
      this.form = this.qcs.toFormGroup(this.questions);
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
