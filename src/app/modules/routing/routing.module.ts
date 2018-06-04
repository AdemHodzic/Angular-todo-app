import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { EditComponentComponent } from '../../components/edit-component/edit-component.component';

const routes = [
  { path: '', component: AddTaskComponent},
  { path: 'edit', component: EditComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
