import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
<<<<<<< HEAD
    RoutingModule,
    HttpClientModule
=======
    HttpClientModule,
    RoutingModule
>>>>>>> observables
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
