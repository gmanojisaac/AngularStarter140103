import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input()
  mode: ProgressBarMode = 'indeterminate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  markdowncode: string = `## Markdown __rulez__!
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

}

@Component({
  selector: 'app-stackblitz-title',
  template: `

    <div fxLayout="column">  
      <div class="markdown" fxLayoutAlign="center center">
        <markdown mermaid [src]="'../../assets/stackblitzTitle.md'"></markdown>
      </div>

      <div class="footer">
        <mat-divider></mat-divider>
          <markdown emoji class="footer-text" fxLayout="row" fxLayoutAlign.gt-xs="center">
            Crafted with :heart: by **gmanojisaac** <span style="margin:0 .15em;">•</span> Follow on [GitHub](https://github.com/gmanoj.isaac)
          </markdown>
      </div>
    </div>


  `,
  styles: [`
  
  .footer {
        margin: 32px 0 8px;
  
        &-text {
          display: block;
          font-size: 13px;
          padding-top: 4px;
        }
      }
  
      .mat-fab,
      .mat-mini-fab {
        img {
          margin-bottom: 2px;
        }
      }
  
      .sticky {
        position: sticky;
        top: 80px;
      }
  
      .scrollup-button {
        margin:14px;
  
        &--fixed {
          position: fixed;
          bottom: 16px;
          right: 16px;
        }
      }  
  `]
})
export class StackblitzTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input()
  mode: ProgressBarMode = 'indeterminate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  markdowncode: string = `## Markdown __rulez__!
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

}

@Component({
  selector: 'app-stackblitz-runangular',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzRunAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input()
  mode: ProgressBarMode = 'indeterminate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  markdowncode: string = `## Markdown __rulez__!
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

}

@Component({
  selector: 'app-stackblitz-storybook',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzStorybookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input()
  mode: ProgressBarMode = 'indeterminate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  markdowncode: string = `## Markdown __rulez__!
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

}

@Component({
  selector: 'app-stackblitz-updatePR',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzUpdatePRComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  @Input()
  mode: ProgressBarMode = 'indeterminate';

  /**
   * ProgressBar Value (0 -100) - Applicable only for Determinate and Buffer modes
   */
  @Input()
  value: number = 40;

  /**
   * ProgressBar BufferValue (0 -100) - Applicable only for Buffer mode
   */
  @Input()
  bufferValue: number = 60;

  /**
   * ProgressBar Color - primary (Theme color) | accent | warn
   */
  @Input()
  color: ThemePalette = 'primary';

  @Input()
  markdowncode: string = `## Markdown __rulez__!
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

}
