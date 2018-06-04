import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Task } from '../../commons/models/task';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.taskService.getAllTasksFromSlim()
      .subscribe(data => {
        data.forEach(element => {
          this.tasks.push(element);
        });
      });
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  edit(task: Task) {
    this.taskService.setEditTask(task);
  }
}
