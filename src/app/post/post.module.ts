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
import { RatingInputComponent } from '../rating/rating-input.component';
import { PostPipe } from './post.pipe';
import { POCSharedModule } from '../shared/poc-shared.module';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    HighlightLongStringDirective,
    EditPostComponent,
    ViewPostComponent,
    RatingInputComponent,
    PostPipe,
    PostListComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    MomentModule,
    POCSharedModule
  ],
  providers: []
})
export class PostModule { }
