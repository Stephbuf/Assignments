import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) { }


  getAllNotes() {
    return this.http.get<Note[]>('http://localhost:3000/notes'); // defining the structure we are looking for in the backend "[]"= array of data that has all students
  }

  addNote(formData: any){
    return this.http.post<Note>('http://localhost:3000/notes/', formData);
  }

  deleteNote(id: number) {
    return this.http.delete<Note>('http://localhost:3000/notes/' + id);
  }

  updateNote(id: number, formData: any) {
    return this.http.patch<Note>('http://localhost:3000/notes/' + id, formData);
  }
  getSingleNote(id: number) {
    return this.http.get<Note>('http://localhost:3000/notes/' + id);
  }
}