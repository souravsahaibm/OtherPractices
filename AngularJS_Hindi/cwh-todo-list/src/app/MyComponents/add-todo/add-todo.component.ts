import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  first_name!: string
  surname!: string;
  age!: number
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log('Add todo button clicked');
    const todo = {
      slno: 1,
      first_name: this.first_name,
      surname: this.surname,
      age: this.age,
      active: true
    }
    this.addTodo.emit(todo);
  }
}
