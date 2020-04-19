import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUsername } from '../../_validators';
import { PostService } from '../post.service';
import { fade } from '../../_helpers/animations';
import { ICanDeactivate } from 'src/app/_helpers/can-deactivate';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  animations: [
    fade
  ]
})
export class AddPostComponent implements OnInit, ICanDeactivate {
  loading = false;
  ratingCount = 0;
  pageHeading = 'Create New Post';
  posts = [];

  @ViewChild('f', {static: false}) createPostForm: NgForm;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    // Get Posts
    this.postService.getPosts().subscribe(posts => {
      this.loading = false;
      this.posts = posts;
    }, error => {
      this.loading = false;
      console.log(error);
    });

    this.postService.getNewPost().subscribe((post: any) => {
      this.posts = [post, ...this.posts];
    });

  }

  onSubmit() {
    if (this.createPostForm.valid) {
      const {title, body, rating} = this.createPostForm.value; // Object Destructured
      const newPost = {title, body, rating};
      this.posts = [newPost, ...this.posts]; // Update post list using spread operator
      // this.posts.unshift(newPost);
      // this.posts = this.posts.slice(0);
      // this.posts.unshift(newPost);
      // this.postService.addNewPost(title, body, rating);
      this.createPostForm.resetForm();
    } else {
      alert('Please enter all form fields!!');
    }
  }

  onDelete(index: number) {
    if (confirm('Are you sure, you want to delete?')) {
      this.posts.splice(index, 1);
    }
  }

  hasChanges(): Observable<boolean> | Promise<boolean> | boolean {
    return this.createPostForm.touched;
  }

}
