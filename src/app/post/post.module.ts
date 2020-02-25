import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightLongStringDirective } from './highlight-long-string.directive';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

@NgModule({
  declarations: [PostComponent, AddPostComponent, HighlightLongStringDirective, EditPostComponent, ViewPostComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    MomentModule
  ],
  providers: []
})
export class PostModule { }
