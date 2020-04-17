import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: any[];
  loading = true;
  today = moment().format('YYYY-MM-DD');
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // Get Posts
    // this.postService.getPosts().subscribe(posts => {
    //   this.loading = false;
    //   this.posts = posts;
    // }, error => {
    //   this.loading = false;
    //   console.log(error);
    // });

    // Get Posts Using Promise
    this.postService.getPostsUsingPromise(8).then((posts: any[]) => {
      this.loading = false;
      this.posts = posts;
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }

  onDelete(index) {
    if (confirm('Are you sure, you want to delete?')) {
      this.posts.splice(index, 1);
    }
  }

}
