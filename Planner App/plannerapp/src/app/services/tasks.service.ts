import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }


  getAllTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks'); // defining the structure we are looking for in the backend "[]"= array of data that has all students
  }

  addTask(formData: any){
    return this.http.post<Task>('http://localhost:3000/tasks/', formData);
  }

  deleteTask(id: number) {
    return this.http.delete<Task>('http://localhost:3000/tasks/' + id);
  }

  updateTask(id: number, formData: any) {
    return this.http.patch<Task>('http://localhost:3000/tasks/' + id, formData);
  }
  getSingleTask(id: number) {
    return this.http.get<Task>('http://localhost:3000/tasks/' + id);
  }




  ngOnInit(){
   
  }

}