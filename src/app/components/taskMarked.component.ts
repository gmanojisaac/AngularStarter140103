import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import mermaid from 'mermaid';

@Component({
  selector: 'app-task-marked',
  template: `
   <markdown class="variable-binding" [data]="markdowncode"></markdown>
<div class="markdown">
  <markdown mermaid [src]="'../../assets/myfile.md'"></markdown>
</div>
<pre class="mermaid">
  sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
</pre>
  `
})
export class TaskMarkedComponent implements OnInit {
  @Input()
  task!: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }

  markdowncode = `## Markdown __rulez__!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  ngOnInit(): void {
    mermaid.initialize({
      startOnLoad: true
    });
  }

}
