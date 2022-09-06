import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { InboxScreenComponent } from './inbox-screen.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild()],
  exports: [InboxScreenComponent],
  declarations: [InboxScreenComponent],
  providers: [],
})
export class TaskMarkedModule {}