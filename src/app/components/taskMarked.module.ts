import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { InboxScreenComponent } from './inbox-screen.component';

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
  imports: [CommonModule, MarkdownModule.forChild()],
  exports: [InboxScreenComponent],
  declarations: [InboxScreenComponent],
  providers: [],
})
export class TaskMarkedModule {}