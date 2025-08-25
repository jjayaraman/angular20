import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss'],
  standalone: true,
})
export class TodoitemComponent {
  todo = signal<string>('');
}
