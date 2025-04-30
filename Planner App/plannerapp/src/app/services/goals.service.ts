import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from '../interfaces/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }


  getAllGoals() {
    return this.http.get<Goal[]>('http://localhost:3000/goals'); // defining the structure we are looking for in the backend "[]"= array of data that has all students
  }

  addGoal(formData: any){
    return this.http.post<Goal>('http://localhost:3000/goals/', formData);
  }

  deleteGoal(id: number) {
    return this.http.delete<Goal>('http://localhost:3000/goals/' + id);
  }

  updateGoal(id: number, formData: any) {
    return this.http.patch<Goal>('http://localhost:3000/goals/' + id, formData);
  }
  getSingleGoal(id: number) {
    return this.http.get<Goal>('http://localhost:3000/goals/' + id);
  }
}