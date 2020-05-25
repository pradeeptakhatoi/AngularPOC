import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { POCSharedModule } from '../shared/poc-shared.module';

import { MiscellaneousComponent } from "./miscellaneous/miscellaneous.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReactiveFormUsingFBComponent } from "./reactive-form-using-fb/reactive-form-using-fb.component";
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { DynamicFormInputComponent } from "./dynamic-form-input/dynamic-form-input.component";
import { DynamicFormQuestionComponent } from "./dynamic-forms/dynamic-form-question.component";
import { TestMomemtComponent } from './test-momemt/test-momemt.component';
import { PlayYoutubeVideoComponent } from './play-youtube-video/play-youtube-video.component';
import { PlayYoutubeVideoPopupComponent } from './play-youtube-video-popup/play-youtube-video-popup.component';

const routes = [
  { path: "", component: MiscellaneousComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "reactive-form-using-fb", component: ReactiveFormUsingFBComponent },
  { path: "dynamic-form-input", component: DynamicFormInputComponent },
  { path: "dynamic-forms", component: DynamicFormsComponent },
  { path: "test-moment", component: TestMomemtComponent },
  { path: "youtube-videos", component: PlayYoutubeVideoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    POCSharedModule
  ],
  exports: [RouterModule],
  declarations: [
    MiscellaneousComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormUsingFBComponent,
    DynamicFormInputComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    TestMomemtComponent,
    PlayYoutubeVideoComponent,
    PlayYoutubeVideoPopupComponent
  ],
  providers: [],
})
export class MiscellaneousModule {}
