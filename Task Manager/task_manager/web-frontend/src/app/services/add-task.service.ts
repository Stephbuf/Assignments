import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Itask } from '../interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor(private http: HttpClient) { }

  postTasks(newtask: Omit<Itask,"id">) {
    console.log(newtask)
    return this.http.post<Itask>('http://localhost:3000/tasks', newtask, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

