import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CanDeactivateGuard } from '../_helpers/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'addpost', component: AddPostComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
