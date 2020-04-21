import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MiscellaneousComponent } from "./miscellaneous/miscellaneous.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormUsingFBComponent } from "./reactive-form-using-fb/reactive-form-using-fb.component";


const routes = [
  { path: "", component: MiscellaneousComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "reactive-form-using-fb", component: ReactiveFormUsingFBComponent },
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
    ReactiveFormUsingFBComponent
  ],
  providers: [],
})
export class MiscellaneousModule {}
