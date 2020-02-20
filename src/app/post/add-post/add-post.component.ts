import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUsername } from '../../_validators';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  createPostForm: FormGroup;
  title = 'Create New Post';
  submitted = false;
  isUpdating = false;
  loading = false;
  posts = [];

  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50), ValidateUsername]],
      body: ['', [Validators.required, Validators.minLength(20)]]
    });

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

  // convenience getter for easy access to form fields
  get f() { return this.createPostForm.controls; }

  // Implement canDeactivate method
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isUpdating || this.createPostForm.dirty) {
      if (confirm('Discard changes for Person?')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    this.isUpdating = true;

    if (this.createPostForm.valid) {
      this.postService.addNewPost(this.createPostForm.value.title, this.createPostForm.value.body);
      this.createPostForm.reset();
      this.submitted = false;
    } else {
      alert('Please enter all form fields!!');
    }
  }

}
