import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUsername } from '../../_validators';
import { PostService } from '../post.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeIn', [
      // fade in when created. this could also be written as transition('void => *')
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(1000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ]),
    trigger('fadeOut', [
      // fade out when deleted. this could also be written as transition('* => void')
      transition('* => void', [
        animate(1000, style({ backgroundColor: 'red', opacity: 0 }))
      ])
    ])
  ]
})
export class AddPostComponent implements OnInit {
  createPostForm: FormGroup;
  title = 'Create New Post';
  submitted = false;
  isUpdating = false;
  loading = false;
  isDeleted = true;
  posts = [];
  changeDivSize = 'initial';

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

    setInterval(() => {
      this.changeDivSize = this.changeDivSize === 'final' ? 'initial' : 'final';
    }, 2500);
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
      // this.createPostForm.reset();
      this.submitted = false;
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
