import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * ProgressBar mode - determinate | indeterminate | Buffer | Query
   */
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
  selector: 'app-aboutme-Introduction',
  template: `

      
    <mat-progress-bar 
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue"
        [color]="color">
    </mat-progress-bar>


    <div class="markdown">
      <markdown
        class="variable-binding"
        [src]="'../../assets/Introduction.md'"
      ></markdown>
    </div>

    Here
    <div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="10vw">
      <mat-slider fxFlex="10vw" min="1" max="100" step="1" value="50"></mat-slider>
      <mat-slider fxFlex="10vw" min="1" max="100" step="1" value="50"></mat-slider>
    </div>
  `,
})
export class AboutmeIntroductionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  selector: 'app-aboutme-Lecturer',
  template: `

      
    <mat-progress-bar 
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue"
        [color]="color">
    </mat-progress-bar>

    <div class="markdown">
    <markdown mermaid [src]="'../../assets/Lecturer.md'"></markdown>
  </div>

  `,
})
export class AboutmeLecturerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  selector: 'app-aboutme-Telecom',
  template: `

      
    <mat-progress-bar 
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue"
        [color]="color">
    </mat-progress-bar>


    <div class="markdown">
    <markdown mermaid [src]="'../../assets/Telecom.md'"></markdown>
  </div>

  `,
})
export class AboutmeTelecomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  selector: 'app-aboutme-Development',
  template: `

      
    <mat-progress-bar 
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue"
        [color]="color">
    </mat-progress-bar>


    <div class="markdown">
      <markdown
        class="variable-binding"
        [src]="'../../assets/Development.md'"
      ></markdown>
    </div>

  `,
})
export class AboutmeDevelopmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
  selector: 'app-aboutme-Testing',
  template: `
    <mat-progress-bar 
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue"
        [color]="color">
    </mat-progress-bar>

  <div class="markdown">
    <markdown mermaid [src]="'../../assets/Testing.md'"></markdown>
  </div>

  <markdown ngPreserveWhitespaces lineNumbers lineHighlight  [line]="'6, 10-16'"
  [lineOffset]="5">
  \`\`\`typescript
  export function greetings(name: string): string &#123;
    return 'Hello ' + name;
  }
  export function greetings(name: string): string &#123;
  return 'Hello ' + name;
}
export function greetings(name: string): string &#123;
return 'Hello ' + name;
}
export function greetings(name: string): string &#123;
return 'Hello ' + name;
}
export function greetings(name: string): string &#123;
return 'Hello ' + name;
}
  \`\`\`
</markdown>


<markdown ngPreserveWhitespaces clipboard 
commandLine
[prompt]="'PS C:\Users\Chris>'"
[filterOutput]="'(out)'">
\`\`\` powershell
Get-Date
(out)
(ut)Sunday, November 7, 2021 8:19:21 PM
(out)
\`\`\`
</markdown>

<div class="footer">
<mat-divider></mat-divider>
<markdown emoji class="footer-text" fxLayout="row" fxLayoutAlign.gt-xs="center">
  Crafted with :heart: by **jfcere** <span style="margin:0 .15em;">•</span> Follow on [GitHub](https://github.com/jfcere)
</markdown>
</div>

  `,
  style: [
    `
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
    
    `,
  ],
})
export class AboutmeTestingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
