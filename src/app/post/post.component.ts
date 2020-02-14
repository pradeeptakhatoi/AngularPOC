import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: any = [];
  loading = true;
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
  }

}
