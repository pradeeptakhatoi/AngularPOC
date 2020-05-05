import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  title = 'Post Listing';
  posts: any[];
  loading = true;
  today = moment().format('YYYY-MM-DD');

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Get Posts Using Promise
    this.postService.getPostsUsingPromise(8).then((posts: any[]) => {
      this.loading = false;
      this.posts = posts;
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  onDelete(index: number) {
    if (confirm('Are you sure, you want to delete?')) {
      this.posts.splice(index, 1);
    }
  }

}
