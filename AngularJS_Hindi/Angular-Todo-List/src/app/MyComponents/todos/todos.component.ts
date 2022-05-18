import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  listItem: string;
  constructor() {
    this.listItem = localStorage.getItem("todos")!;
    // console.log(this.listItem);
    if (this.listItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.listItem);
    }
  }

  ngOnInit(): void {
  }
  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // console.log(todo);
  }
  todoAdd(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
