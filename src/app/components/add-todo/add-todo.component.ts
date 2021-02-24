import { Todo } from './../../models/Todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: Todo = {
    id: Math.floor(Math.random() * 1000) + 1,
    title: '',
    isChecked: false,
    isOpen: false,
  };
  @Output() messageTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(e) {
    e.preventDefault();
    if (this.todo.title == '') return;
    this.sendMessage();
    this.todo = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: '',
      isChecked: false,
      isOpen: false,
    };
  }
  sendMessage() {
    this.messageTodo.emit(this.todo);
  }
}
