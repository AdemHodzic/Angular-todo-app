import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Task } from '../../commons/models/task';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  name: string;
  description: string;

  constructor(
    private taskService: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.taskService.getAllTasks()
      .subscribe(data => this.tasks = data);
  }

  remove(task: Task) {
    this.taskService.remove(task)
      .subscribe(data => {
        this.tasks = data;
      });
  }

  edit(task: Task) {
    this.taskService.setEditTask(task);
  }

  add() {
    if (this.name && this.description) {
      let id = this.taskService.getLength();
      const task = new Task(id++, this.name, this.description, new Date());
      this.taskService.addTask(task)
        .subscribe(data => this.tasks = data);
    }
    this.name = '';
    this.description = '';

  }
}
