import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPost',
})
export class PostPipe implements PipeTransform {

  transform(posts: any[]) {
    console.log(posts);
    return posts.filter(p => p.title.length > 15);
  }

}
