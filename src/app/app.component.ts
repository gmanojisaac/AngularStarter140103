import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularStarter140103';
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


  constructor() { 
   
  }

  ngOnInit(): void {
    mermaid.initialize({
      startOnLoad: true
    });
  }
}


/**
 <markdown class="variable-binding" [data]="markdowncode"></markdown>
<div class="markdown">
  <markdown mermaid [src]="'../assets/myfile.md'"></markdown>
</div>
<pre class="mermaid">
  sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
</pre>
 */