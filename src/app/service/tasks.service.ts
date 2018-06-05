import { Injectable } from '@angular/core';
import { Task } from '../commons/models/task';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TasksService {


  editTask: Task;
  api = 'http://localhost:8080/slim/public/tasks';

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  addTask(task: Task) {
    return this.http.post<Task[]>(this.api + '/add', task);
  }

  remove(task: Task) {
    return this.http.delete<Task[]>(this.api + `/delete/${task.id}`);
  }

  update() {
    return this.http.put<Task[]>(this.api + `/update/${this.editTask.id}`, this.editTask);
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

}
