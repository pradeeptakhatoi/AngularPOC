import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { NonInjectableJsonService } from './services/non-injectable-json.service';
import { ComponentLevelService } from './services/component-level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ComponentLevelService ]
})
export class AppComponent implements OnInit {
  title = 'AngularPOC';
  todos: any = [];
  heros: any = [];
  posts: any = [];
  nonInjectableJsonService: NonInjectableJsonService;

  constructor(private todosService: TodosService, private componentLevelService: ComponentLevelService) {
    this.nonInjectableJsonService = new NonInjectableJsonService();
  }

  ngOnInit() {

    // Get Todos
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    }, error => {
      console.log(error);      
    });

    // Get Heros
    this.heros = this.nonInjectableJsonService.getHeros();

    // Get Posts
    this.componentLevelService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);      
    });

  }
}
