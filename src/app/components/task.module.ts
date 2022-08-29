import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './pure-task-list.component';
import { MarkdownModule } from 'ngx-markdown';

import {TaskMarkedComponent}from './taskMarked.component';

/*
import 'marked';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-mermaid.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'mermaid';
import 'clipboard/dist/clipboard.min.js';
*/
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState]), MarkdownModule.forChild()],
  exports: [TaskComponent, TaskListComponent,TaskMarkedComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, TaskMarkedComponent],
  providers: [],
})
export class TaskModule {}