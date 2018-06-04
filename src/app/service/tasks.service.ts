import { Injectable } from '@angular/core';
import { Task } from '../commons/models/task';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

=======
import { tap } from 'rxjs/operators';
>>>>>>> observables
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    new Task(1, 'temp1', 'temp desc 1', new Date()),
    new Task(2, 'temp2', 'temp desc 2', new Date()),
    new Task(3, 'temp3', 'temp desc 3', new Date()),
  ];

  editTask: Task;
<<<<<<< HEAD
  constructor(private http: HttpClient) { }
=======

  api = 'http://localhost:8080/slim/public/tasks';
>>>>>>> observables

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>(this.api);
  }

  addTask(task: Task) {
    return this.http.post<Task>(`http://localhost:8080/slim/public/tasks/add`, task);
  }

  remove(task: Task) {
    return this.http.delete<Task>(`http://localhost:8080/slim/public/tasks/delete/${task.id}`);
  }

  getEditTask() {
    return of(this.editTask);
  }

  setEditTask(task: Task) {
    this.editTask = task;
  }

  getAllTasksFromSlim() {
    /*
    return this.http.get('http://localhost:8080/slim/public/tasks')
      .pipe(
        map(data => {
          new Task(data.id, data.name, data.description, data.created)
        })
      );
      */
    return this.http.get<Task[]>('http://localhost:8080/slim/public/tasks');
  }
}
