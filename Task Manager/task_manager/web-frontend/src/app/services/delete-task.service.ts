import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itask } from '../interfaces/itask';
import { Observable } from 'rxjs';
import id from '@angular/common/locales/id';

@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  // DELETE request by ID
  deleteTask(taskId: number): Observable<Itask> {
    return this.http.delete<Itask>('http://localhost:3000/tasks/' + taskId);
  }
}




// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Itask } from '../interfaces/itask';

// @Injectable({
//   providedIn: 'root'
// })
// export class DeleteTaskService {

//   constructor(private http: HttpClient) {}

//   deleteTasks(newtask: Omit<Itask, "id">) {
//     console.log(newtask);
//     return this.http.delete<Itask>('http://localhost:3000/tasks', {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//       body: newtask
//     });
//   }
// }
