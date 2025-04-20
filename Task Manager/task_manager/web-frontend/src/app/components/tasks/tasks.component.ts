import { Component, OnInit } from '@angular/core';
import { Itask } from '../../interfaces/itask';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
tasks!: Itask[];

constructor(private tasksService: TasksService){
  this.tasksService.getTasks().subscribe((result) => {
    this.tasks = result;
  });
}

ngOnInit(): void {
  this.tasksService.getTasks().subscribe( result => {
    this.tasks = result;
  });
}

deleteTask(taskId: number) {
  if (confirm('Are you sure? like really sure?')) {
    let index = this.tasks.findIndex(stud => stud.id === taskId);

    this.tasks.splice(index, 1);

    this.tasksService.deleteTask(taskId).subscribe(result => {
      console.log('Student was deleted successfully.. bye bye');
    });

  }
}
}