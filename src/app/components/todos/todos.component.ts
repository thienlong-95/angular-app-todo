import { Todo } from './../../models/Todo';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [];
  constructor() {}

  ngOnInit(): void {}

  receiveMessage($event) {
    this.todos.unshift($event);
  }
  receiveTodoId($event) {
    this.todos = this.todos.filter((todo) => todo.id !== $event);
  }
  receiveEditTodo($event) {
    const { title, id } = $event;
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
    });
  }
}
