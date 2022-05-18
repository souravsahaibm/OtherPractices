import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        slno: 1,
        first_name: 'sourav',
        surname: 'saha',
        age: 31,
        active: true
      },
      {
        slno: 2,
        first_name: 'atanu',
        surname: 'das',
        age: 32,
        active: true
      },
      {
        slno: 3,
        first_name: 'debonil',
        surname: 'dutta',
        age: 33,
        active: false
      }
    ]
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
}
