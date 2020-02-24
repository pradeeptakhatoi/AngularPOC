import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidateUsername } from '../../_validators';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '../../../../node_modules/@angular/compiler/src/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  editPostForm: FormGroup;
  title = 'Edit Post';
  submitted = false;
  isUpdating = false;
  loading = false;
  id: number = null;
  post: any;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.editPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', [Validators.required, Validators.minLength(20)]]
    });

    // Get Post
    this.postService.getSinglePost(this.id).then((post: any) => {
      this.loading = false;
      this.post = post;
      console.log(post);

      this.editPostForm.patchValue({
        title: this.post.title,
        body: this.post.body,
      });

    }, error => {
      this.loading = false;
      console.log(error);
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.editPostForm.controls; }

  // Implement canDeactivate method
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isUpdating || this.editPostForm.dirty) {
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

    if (this.editPostForm.valid) {
      this.isUpdating = true;

      setTimeout(() => {
        this.isUpdating = false;
        alert('Post updated successfully!');
        this.router.navigate(['/post']);
      }, 2000);

    } else {
      alert('Please enter all form fields!!');
    }
  }


}

