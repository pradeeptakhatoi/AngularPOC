import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CanDeactivateGuard } from '../_helpers/can-deactivate.guard';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'addpost', component: AddPostComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'editpost/:id', component: EditPostComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
