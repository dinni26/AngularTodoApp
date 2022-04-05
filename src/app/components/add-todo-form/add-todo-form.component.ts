import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string | null = null;

  constructor() { }

  today = new Date();
  
  message: string = ''

  addTodo() {
    if (this.inputTodo != null) {
      const todo: Todo = {
        content: this.inputTodo,
        completed:false
    };

    this.message = "Todo Berhasil Di Tambahkan!";
    this.newTodoEvent.emit(todo)
    this.inputTodo = null;
    } else {
      this.message = "Silahkan Isikan Todo Terlebih Dahulu!";
    }
  }
}
