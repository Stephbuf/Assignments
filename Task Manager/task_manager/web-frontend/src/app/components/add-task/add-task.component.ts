import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddTaskService } from '../../services/add-task.service';
import { Itask } from '../../interfaces/itask';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule]
})


export class AddTaskComponent implements OnInit {
  addTaskForm!: FormGroup;
  

  constructor(
    private formB: FormBuilder,
    private _addTasks: AddTaskService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = this.formB.group({
      title: ['', Validators.required],
      priority_level: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      progress_level: ['', Validators.required],
      task_date: ['', Validators.required],
    });
  }

  onClick(): void {
    if (this.addTaskForm.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    const newTask: Omit<Itask, "id"> = {
      ...this.addTaskForm.value,
      task_date: new Date(this.addTaskForm.value.task_date)
    };

    this._addTasks.postTasks(newTask).subscribe({
      next: (result) => {
        alert('Task was created successfully!');
        console.log(result);
        this.addTaskForm.reset();
      },
      error: (err) => {
        console.error('Error creating task:', err);
        alert('Something went very very wrong...');
      }
    
    });
  
  }
}

