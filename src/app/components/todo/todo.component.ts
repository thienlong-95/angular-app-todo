import { element } from 'protractor';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() deleteTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();
  titleEdit: string;
  open: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log(this.todos);
  }
  setChange(isChecked, id) {
    this.todos.forEach((todo) => {
      todo.id == id ? (todo.isChecked = !isChecked) : '';
    });
  }
  setOpen(id, open) {
    this.todos.forEach((todo) => {
      todo.id == id ? (todo.isOpen = !open) : '';
      this.titleEdit = '';
    });
  }

  onSubmit(e, id) {
    e.preventDefault();
    if (e.type === 'submit') return;
  }
  sendEdit(id) {
    console.log(this.todos);
    this.todos.forEach((todo) => {
      if (todo.id == id) {
        const buffer = {
          title: this.titleEdit,
          id,
        };
        todo.isOpen = !open;
        this.editTodo.emit(buffer);
      }
    });
  }
}
