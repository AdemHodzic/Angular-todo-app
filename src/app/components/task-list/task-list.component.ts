import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { Task } from '../../commons/models/task';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { trigger, transition, query, style, stagger, animate, keyframes, state } from '@angular/animations';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
    trigger('tasks', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
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
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.taskService.remove(task)
      .subscribe(data => this.tasks = data);
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
    this.removeTemp();
    this.taskService.getEditTask()
      .subscribe(data => {
        data.name = this.name;
        data.description = this.description;
        this.taskService.update()
          .subscribe(tasks => this.tasks = tasks);
      });
    this.toggle();
    this.name = '';
    this.description = '';


  }

  // Removes task we are editring to trigger animation
  removeTemp() {
    this.taskService.getEditTask()
      .subscribe(task => {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
      });
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
