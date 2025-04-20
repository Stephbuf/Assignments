import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'] 
})
export class TaskComponent {
  @Input() task!: Itask;
  @Output() deleteTask = new EventEmitter();

  onDelete(): void {
    
      this.deleteTask.emit(this.task.id);
    
  }
}