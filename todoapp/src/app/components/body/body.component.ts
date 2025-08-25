import { Component } from '@angular/core';
import { TodolistComponent } from '../todo/todolist/todolist.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  standalone: true,
  imports: [TodolistComponent],
})
export class BodyComponent {}
