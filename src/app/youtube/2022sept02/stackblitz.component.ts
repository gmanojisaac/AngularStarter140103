import { Component, Input, OnInit, AfterContentInit, ViewChild, TemplateRef, } from '@angular/core';
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
    <ng-template #mermaidCenter >
      <div fxLayout="column">  
        <div class="markdown" fxLayoutAlign="center center">
          <markdown mermaid [src]="'../../assets/stackblitzTitle.md'"></markdown>
        </div>
      </div>
      <div class="footer">
        <mat-divider></mat-divider>
          <markdown emoji class="footer-text" fxLayout="row" fxLayoutAlign.gt-xs="center">
            Crafted with :heart: by **gmanojisaac** <span style="margin:0 .15em;">•</span> Follow on [GitHub](https://github.com/gmanoj.isaac)
          </markdown>
      </div>
    </ng-template>

    <ng-template #pagedesign >
      <markdown  ngPreserveWhitespaces clipboard>
        {{pagedesignvar}}
      </markdown>
      <div class="markdoWn">
        <markdown [src]="'../../assets/storydesign.md'" ngPreserveWhitespaces clipboard></markdown>
      </div>
    </ng-template>

    <ng-template #usingmermaid >
      <markdown [data]="usingmermaidMarkdown" ngPreserveWhitespaces clipboard></markdown>
    </ng-template>
    <ng-template #usingmarkdown >
      <markdown  ngPreserveWhitespaces clipboard>
      ## Markdown __works__!
      ---          
      </markdown>
      <markdown mermaid  ngPreserveWhitespaces clipboard>
        <pre class="mermaid">
          flowchart TD
            id1([Markdown in html])
            id2([Markdown in template])
            id3([Markdown in component])
            id4([Markdown loaded from src])
        </pre>
      </markdown>
      <markdown [data]="usingmarkdownMarkdown" ngPreserveWhitespaces clipboard ></markdown>
     
    </ng-template>
    <ng-container 
      [ngTemplateOutlet]="tems"
      [ngTemplateOutletContext]="myContext"> 
    </ng-container>
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
export class StackblitzTitleComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void { }

  something = `
  @ViewChild('mermaidCenter', { static: true })
  mermaidCenter!: TemplateRef<any>;`;
  @ViewChild('mermaidCenter', { static: true })
  mermaidCenter!: TemplateRef<any>;

  @ViewChild('usingmermaid', { static: true })
  usingmermaid!: TemplateRef<any>;

  @ViewChild('usingmarkdown', { static: true })
  usingmarkdown!: TemplateRef<any>;

  @ViewChild('pagedesign', { static: true })
  pagedesign!: TemplateRef<any>;
  
  tems: TemplateRef<any> = this.mermaidCenter;
  myContext = { $implicit: 'World', localSk: 'Svet' };


  @Input()
  myselectedtemp: string = 'first';

  storydesign=`
  \`\`\`typescript
  props: {
  myselectedtemp : 'usingmarkdown'
  },
  \`\`\`
  `;

  usingmarkdownMarkdown = `
  ### Markdown working from html
  \`\`\`typescript
  <markdown ngPreserveWhitespaces clipboard>
  ### Lists
    1. Ordered list
    2. Another bullet point
      - Unordered list
      - Another unordered bullet
  {{ '#working' | language: 'typescript' }}
  </markdown>
  \`\`\`
  ---

  ### Markdown working from template
  \`\`\`typescript
  <markdown  ngPreserveWhitespaces clipboard>
  ## Markdown __works__!
  ---          
  </markdown>
  \`\`\`

  ---

  ### Markdown working from component
  \`\`\`typescript
  <markdown ngPreserveWhitespaces clipboard>
  {{someothervar}}
  {{ somevar | language: 'typescript' }}
  </markdown>

  <div [innerHTML]="markdowncode | markdown"></div>
  \`\`\`

  # somevar should be having the markdown to run from the component
  ---

  
  ### Markdown working from src
  \`\`\`typescript
  <div class="markdown">
    <markdown [src]="'../../assets/storydesign.md'"></markdown>
  </div>
  \`\`\`

  ## .md file will not contain => backslash
  \`\`\`typescript
    props: {
    myselectedtemp : 'usingmarkdown'
    },   
  \`\`\`
  ---
`;

  usingmermaidMarkdown = `## Mermaid __works__!
  ---
  
  ### Mermaid works from html
  \`\`\`typescript
  <markdown mermaid>
  <pre class="mermaid">
    flowchart TD
      id1([Markdown in html])
      id2([Markdown in template])
      id3([Markdown in data])
      id4([Markdown loaded from src])
  </pre>
</markdown>
  \`\`\`
  
  # Markdown tag contains mermaid keyword and injected with code using pretty tag and class mermaid
  # Mermaid works from template same way
  ---
   
  ### Mermaid works from file load
  \`\`\`typescript
    <div class="markdown">
      <markdown mermaid [src]="'../../assets/stackblitzMermaid.md'"></markdown>
    </div>
  \`\`\`

  # Mermaid works from file load seamlessly
  `;

  pagedesignvar=`
  ## PageDesign __works__!

  # In html use the different templates
  \`\`\`typescript
  <ng-template #usingmarkdown >
  </ng-template>
  \`\`\`

  # call the templates using templateOutlet and can pass a context

  \`\`\`typescript
  <ng-container 
  [ngTemplateOutlet]="tems"
  [ngTemplateOutletContext]="myContext"> 
  \`\`\`

  # use the context in html

  \`\`\`typescript
  <ng-template #greet let-person><span>Hello {{person}} </span></ng-template>
  <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
  <ng-template #svk let-person="localSk" ><span>Ahoj {{person}}!</span></ng-template>
  \`\`\`

  # use the context in component

  \`\`\`typescript
  @ViewChild('greet', { static: true })
  greet!: TemplateRef<any>;
  @ViewChild('svk', { static: true })
  svk!: TemplateRef<any>;
  @ViewChild('eng', { static: true })
  eng!: TemplateRef<any>;

  myContext = { $implicit: 'World', localSk: 'Svet' };

  \`\`\`

  # use AfterContentInit

  \`\`\`typescript

  import { OnInit, AfterContentInit, ViewChild, TemplateRef } from '@angular/core';

  Component=>  implements OnInit, AfterContentInit {

  @Input()
  myselectedtemp: string = 'first';


  ngAfterContentInit() {

    switch (this.myselectedtemp) {
      case 'greet':
        this.tems = this.greet;
        break;
      case 'svk':
        this.tems = this.svk;
        break;
      case 'eng':
        this.tems = this.eng;
        break;
    }
  }

  \`\`\`


  # From the story pass the right template name


  
</ng-container>

  `;

  ngAfterContentInit() {

    switch (this.myselectedtemp) {
      case 'mermaidCenter':
        this.tems = this.mermaidCenter;
        break;

      case 'usingmermaid':
        this.tems = this.usingmermaid;
        break;

      case 'usingmarkdown':
        this.tems = this.usingmarkdown;
        break;
      case 'pagedesign':
        this.tems = this.pagedesign;
        break;
    }
  }

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


@Component({
  selector: 'app-stackblitz-startpage',
  template: `
<mat-progress-bar mode="buffer"></mat-progress-bar>
  <div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="10vw">
    <mat-slider fxFlex="10vw" min="1" max="100" step="1" value="50"></mat-slider>
    <mat-slider fxFlex="10vw" min="1" max="100" step="1" value="50"></mat-slider>
  </div>
<mat-progress-bar mode="buffer"></mat-progress-bar>

<h1>TaskOhers</h1>
<!--markdown class="variable-binding" [data]="markdowncode"></markdown-->


<div [innerHTML]="markdowncode | language : 'python' | markdown"><div>

<markdown ngPreserveWhitespaces lineNumbers lineHighlight  [line]="'6, 10-16'"
[lineOffset]="5" [src]="'../../assets/stackblitzTypescript.md'"></markdown>

<div class="markdown">
  <markdown mermaid [src]="'../assets/myfile.md'"></markdown>
</div>

<markdown mermaid >
  <pre class="mermaid">
  sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
</pre>
</markdown>
  `,
  styles: [`
  
  `]
})
export class StackblitzStartPageComponent implements OnInit {

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
  markdowncode: string = `\`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  <h5>
    angular@{{ angularVersion }} | ngx-markdown@{{ ngxMarkdownVersion }}
  </h5>
  <br>
  
  <div markdown ngPreserveWhitespaces>{{ markdown }}</div>
  <!-- <div markdown [data]="markdown"></div> -->
  \`\`\`
  ### Lists
  1. Ordered list
  2. Another bullet point
    - Unordered list
    - Another unordered bullet point
  
  ### Blockquote
  > Blockquote to the max!!!`;

}


@Component({
  selector: 'app-stackblitz-testpage',
  template: `
<!--markdown ngPreserveWhitespaces lineNumbers lineHighlight  [line]="'6, 10-16'"
[lineOffset]="5" [src]="'../../assets/stackblitzTypescript.md'"></markdown-->



<div markdown ngPreserveWhitespaces>{{ markdowncode }}</div>
<mat-progress-bar mode="buffer"></mat-progress-bar>
Down here
<ng-template #greet let-person><span>Hello {{person}} </span></ng-template>
<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
<ng-template #svk let-person="localSk" ><span>Ahoj {{person}}!</span></ng-template>
<mat-progress-bar mode="buffer"></mat-progress-bar>
<ng-container 
  [ngTemplateOutlet]="tems"
  [ngTemplateOutletContext]="myContext"> </ng-container>
<mat-progress-bar mode="buffer"></mat-progress-bar>
Here
  `,
  styles: [`
  
  `]
})
export class StackblitzStartTestComponent implements OnInit, AfterContentInit {

  constructor() { }

  @ViewChild('greet', { static: true })
  greet!: TemplateRef<any>;
  @ViewChild('svk', { static: true })
  svk!: TemplateRef<any>;
  @ViewChild('eng', { static: true })
  eng!: TemplateRef<any>;

  tems: TemplateRef<any> = this.greet;
  myContext = { $implicit: 'World', localSk: 'Svet' };


  @Input()
  myselectedtemp: string = 'first';
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
  \`\`\`powershell
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;

  ngOnInit(): void { }
  ngAfterContentInit() {

    switch (this.myselectedtemp) {
      case 'greet':
        this.tems = this.greet;
        break;
      case 'svk':
        this.tems = this.svk;
        break;
      case 'eng':
        this.tems = this.eng;
        break;
    }
  }

}


@Component({
  selector: 'app-stackblitz-mermaidinline',
  template: `

<markdown mermaid >
  <pre class="mermaid">
  sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
</pre>
</markdown>
  `,
  styles: [`
  
  `]
})
export class StackblitzMermaidInlineComponent implements OnInit {

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
