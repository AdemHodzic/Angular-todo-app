import { Component, OnInit } from '@angular/core';
import { Task } from '../../commons/models/task';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  task: Task;
  name: string;
  description: string;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.task = this.taskService.getEditTask();
    this.name = this.task.name;
    this.description = this.task.description;
  }

  edit() {
    this.task.name = this.name;
    this.task.description = this.description;
  }

}
