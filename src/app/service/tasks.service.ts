import { Injectable } from '@angular/core';
import { Task } from '../commons/models/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    new Task(1, 'temp1', 'temp desc 1', new Date()),
    new Task(2, 'temp2', 'temp desc 2', new Date()),
    new Task(3, 'temp3', 'temp desc 3', new Date()),
  ];

  editTask: Task = this.tasks[0];

  constructor() { }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  remove(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  getEditTask() {
    return this.editTask;
  }

  setEditTask(task: Task) {
    this.editTask = task;
  }
}
