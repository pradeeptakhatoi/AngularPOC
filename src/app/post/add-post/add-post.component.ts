import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUsername } from '../../_validators';
import { PostService } from '../post.service';
import { fade } from '../../_helpers/animations';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  animations: [
    fade
  ]
})
export class AddPostComponent implements OnInit {
  loading = false;
  pageHeading = 'Create New Post';
  posts = [];

  @ViewChild('f') createPostForm: NgForm;

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

  // Implement canDeactivate method
  canDeactivate(): Observable<boolean> | boolean {
    if (this.createPostForm.submitted || this.createPostForm.dirty) {
      if (confirm('Discard changes for Person?')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  onSubmit() {
    if (this.createPostForm.valid) {
      const data: any = this.createPostForm.value;
      this.postService.addNewPost(data.title, data.body, data.rating);
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

}
