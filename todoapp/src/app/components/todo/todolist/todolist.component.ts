import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  standalone: true,
})
export class TodolistComponent implements OnInit {
  todoService = inject(TodoService);

  todos = signal<any[]>([]);
  ngOnInit() {
    this.todoService.getTodos().subscribe((data) => {
      console.log(data);
      this.todos.set(data as any);
    });
  }
}
