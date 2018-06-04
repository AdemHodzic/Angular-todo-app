import { Component, OnInit } from '@angular/core';
import { Task } from '../../commons/models/task';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  name: string;
  description: string;
  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  add() {
    if (this.name && this.description) {
      let id = 6;
      const task = new Task(id++, this.name, this.description, new Date());
      console.log(task);
      this.taskService.addTask(task)
        .subscribe(data => console.log(data));
    }
  }

}
