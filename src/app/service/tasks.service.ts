import { Injectable } from '@angular/core';
import { Task } from '../commons/models/task';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TasksService {


  editTask: Task;
  constructor(private http: HttpClient) { }
  api = 'http://localhost:8080/slim/public/tasks';

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

  getLength() {
    let num;
    this.http.get<Task[]>(this.api)
      .subscribe(data => num = data.length);
    return num;
  }

  updateUser() {
    return this.http.put<Task>(`http://localhost:8080/slim/public/tasks/update/${this.editTask.id}`, this.editTask);
  }
}
