import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  id: number = null;
  post: any;
  loading = true;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    // Get Post
    this.postService.getSinglePost(this.id).then((post: any) => {
      this.loading = false;
      this.post = post;
    }, error => {
      this.loading = false;
      console.log(error);
    });

  }

}
