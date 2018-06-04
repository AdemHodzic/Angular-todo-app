import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Task } from '../../commons/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  edit(task: Task) {
    this.taskService.setEditTask(task);
  }
}
