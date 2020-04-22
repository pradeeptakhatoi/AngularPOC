import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MiscellaneousComponent } from "./miscellaneous/miscellaneous.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormUsingFBComponent } from "./reactive-form-using-fb/reactive-form-using-fb.component";
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { DynamicFormInputComponent } from "./dynamic-form-input/dynamic-form-input.component";
import { DynamicFormQuestionComponent } from "./dynamic-forms/dynamic-form-question.component";


const routes = [
  { path: "", component: MiscellaneousComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "reactive-form-using-fb", component: ReactiveFormUsingFBComponent },
  { path: "dynamic-form-input", component: DynamicFormInputComponent },
  { path: "dynamic-forms", component: DynamicFormsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
    MiscellaneousComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormUsingFBComponent,
    DynamicFormInputComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent
  ],
  providers: [],
})
export class MiscellaneousModule {}
