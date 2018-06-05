import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Task } from '../../commons/models/task';
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
  button = 'Add';
  color = 'btn-success';
  constructor(
    private taskService: TasksService,
    ) { }

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
    this.toggle();
    this.taskService.setEditTask(task);
    this.name = task.name;
    this.description = task.description;
  }

  clicked() {
    if (this.button === 'Add') {
      this.add();
    } else {
      this.updateTask();
    }
  }

  private updateTask() {
    const task = this.taskService.getEditTask();
    task
      .subscribe(data => {
        data.name = this.name;
        data.description = this.description;
        this.taskService.update()
          .subscribe(elem => console.log(elem));
      })
      .unsubscribe();
    this.toggle();
    this.name = '';
    this.description = '';


  }

  private add() {
    if (this.name && this.description) {
      let id = this.taskService.getLength();
      const task = new Task(id++, this.name, this.description, new Date());
      this.taskService.addTask(task)
        .subscribe(data => this.tasks = data);
    }
    this.name = '';
    this.description = '';
  }

  private toggle() {
    if (this.button === 'Add') {
      this.button = 'Edit';
      this.color = 'btn-primary';
    } else {
      this.button = 'Add';
      this.color = 'btn-success';
    }
  }
}
