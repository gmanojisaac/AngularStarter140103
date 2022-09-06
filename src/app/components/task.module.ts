import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './pure-task-list.component';
import { MarkdownModule } from 'ngx-markdown';

import {TaskMarkedComponent}from './taskMarked.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState]), MarkdownModule.forChild()],
  exports: [TaskComponent, TaskListComponent,TaskMarkedComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, TaskMarkedComponent],
  providers: [],
})
export class TaskModule {}