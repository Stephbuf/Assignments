import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  splice(index: number, arg1: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Itask[]>('http://localhost:3000/tasks');
  }

  getSingleTask(id: number) {
    return this.http.get<Itask>('http://localhost:3000/tasks' + id);
  }

  createTask(task: Itask) {
    return this.http.post<Itask>('http://localhost:3000/tasks', task);
  }

  deleteTask(taskId: number) {
    return this.http.delete<Itask>('http://localhost:3000/tasks/' + taskId);
  }
  

}

