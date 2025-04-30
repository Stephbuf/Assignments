import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: false,
})
export class TasksPage implements OnInit {
  taskForm!: FormGroup;
  isEdit: boolean = false;
  editTaskId!: number;
  tasks: Task[] = [];

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      task_date: ['', Validators.required],
      priority_level: ['', Validators.required],
      progress_level: ['', Validators.required],
      // completed: [false] 
    });

    const taskId = this.route.snapshot.paramMap.get('task_id');

    if (taskId) {
      this.editTaskId = parseInt(taskId, 10);
      this.isEdit = true;

      this.tasksService.getSingleTask(this.editTaskId).subscribe((result: Task) => {
        this.taskForm.patchValue(result);
      });
    }
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getAllTasks().subscribe((result: Task[]) => {
      this.tasks = result;
    });
  }

  
  onSubmit() {
    if (this.taskForm.invalid) {
      alert('Cannot be blank');
      return;
    }
  
    if (this.isEdit) {
      this.updateTask();
    } else {
      this.addTask();
    }
  }
  addTask() {
    const formData = this.taskForm.value;
    this.tasksService.addTask(formData).subscribe((result: Task) => {
      alert('Task was created successfully!');
      this.taskForm.reset();
      this.getTasks(); 
    });
  }

  updateTask() {
    const formData = this.taskForm.value;
    this.tasksService.updateTask(this.editTaskId, formData).subscribe((result: Task) => {
      alert('Task was updated successfully!');
      this.taskForm.reset();
      this.getTasks(); // reload after updating
    });
  }

  deleteTask(taskId: number) {
    if (confirm('Are you sure?')) {
      this.tasksService.deleteTask(taskId).subscribe(() => {
        alert('Task deleted successfully!');
        this.getTasks(); // reload after deleting
      });
    }
  }
}


// export class TasksPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
