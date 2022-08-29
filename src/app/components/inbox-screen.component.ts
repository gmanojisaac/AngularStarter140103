import { Component, OnInit } from '@angular/core';
//import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-inbox-screen',
  template: `
    <!--app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen-->
    <markdown class="variable-binding" [data]="markdowncode"></markdown>
<div class="markdown">
  <markdown mermaid [src]="'../../assets/myfile.md'"></markdown>
</div>

<div class="markdown">
  <markdown [src]="'../../assets/myfilemark.md'"></markdown>
</div>
  `
})
export class InboxScreenComponent  implements OnInit{
  //error$: Observable<boolean>;
  //constructor(private store: Store) {
    //this.error$ = store.select((state) => state.taskbox.error);
  //}

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


  ngOnInit(): void {

  }
}
