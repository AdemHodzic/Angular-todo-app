import { Component, OnInit } from '@angular/core';
import { Task } from '../../commons/models/task';
import { TasksService } from '../../service/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  task: Task;
  name: string;
  description: string;

  constructor(
    private taskService: TasksService,
    private router: Router) { }

  ngOnInit() {
    this.taskService.getEditTask()
      .subscribe(task => {
        this.task = task;
        this.description = this.task.description;
        this.name = this.task.name;
      });
  }

  edit() {
    this.task.name = this.name;
    this.task.description = this.description;
    this.taskService.setEditTask(null);
    this.router.navigate(['/']);
  }

}
