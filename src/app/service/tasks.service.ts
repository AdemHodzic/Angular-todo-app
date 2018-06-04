import { Injectable } from '@angular/core';
import { Task } from '../commons/models/task';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
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

  api = 'http://localhost:8080/slim/public/tasks';

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
    return this.editTask;
  }

  setEditTask(task: Task) {
    this.editTask = task;
  }
}
