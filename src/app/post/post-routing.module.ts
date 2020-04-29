import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostComponent } from "./post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { CanDeactivateGuard } from "../_helpers/can-deactivate.guard";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: PostComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: "addpost", component: AddPostComponent, canDeactivate: [CanDeactivateGuard], },
      { path: "editpost/:id", component: EditPostComponent, canDeactivate: [CanDeactivateGuard], },
      { path: "viewpost/:id", component: ViewPostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}

