import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
  standalone: false,
})
export class ToDoListPage implements OnInit {
  tasks: Task[] = [];
  showToast = false;
toastMessage = '';


  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      // Load tasks from localStorage first
      this.tasks = JSON.parse(storedTasks);
      console.log('Tasks loaded from localStorage:', this.tasks);
    }

    // Always also fetch fresh tasks from server
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getAllTasks().subscribe({
      next: (result: Task[]) => {
        const freshTasks = result.map(task => ({
          ...task,
          completed: this.findCompletedState(task)
        }));

        this.tasks = freshTasks;
        this.saveTasks(); // Save the updated list
        console.log('Tasks loaded from server:', this.tasks);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
      }
    });
    
  }

  findCompletedState(taskFromServer: Task): boolean {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      const localTasks: Task[] = JSON.parse(storedTasks);
      const localTask = localTasks.find(t => t.id === taskFromServer.id);
      return localTask ? (localTask as any).completed || false : false;
    }

    return false;
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  onTaskCheckboxChange(task: Task) {
    this.saveTasks();
  
    if (task.completed) {
      this.toastMessage = `"${task.title}" marked as completed ✅`;
    } else {
      this.toastMessage = `"${task.title}" marked as incomplete ❌`;
    }
  
    this.showToast = true; // Open the toast
  }
  onDelete(taskId: number) {
    this.tasksService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
        this.toastMessage = 'Task deleted successfully!';
        this.showToast = true;
      },
      error: (error) => {
        console.error('Error deleting task:', error);
        this.toastMessage = 'Failed to delete task!';
        this.showToast = true;
      }
    });

    
  }
}

