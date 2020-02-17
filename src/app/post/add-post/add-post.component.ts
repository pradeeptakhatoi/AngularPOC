import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  createPostForm: FormGroup;
  submitted = false;
  isUpdating = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      body: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.createPostForm.controls; }

  // Implement canDeactivate method
  canDeactivate(): Observable<boolean> | boolean {
    console.log('isUpdating : ' + this.isUpdating);
    console.log('dirty :' + this.createPostForm.dirty);
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
      console.log(this.createPostForm.value);
    } else {
      alert('Please enter all form fields!!');
    }
  }

}
