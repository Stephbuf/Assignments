import { Component } from '@angular/core';
import { AddTaskService } from '../../services/add-task.service';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
addTaskService: AddTaskService;
newTask: Omit<Itask,"id"> = {
    title: "",
    description: "",
    category: "",
    task_date: new Date,
    priority_level: "",
    progress_level: "",

};

constructor(addTaskService: AddTaskService){
  this.addTaskService = addTaskService;
}

addTask() {
  this.newTask.task_date = new Date(this.newTask.task_date)
  console.log(this.newTask)
  this.addTaskService.postTasks(this.newTask).subscribe((result) =>
    console.log(result)
)

}
}
