import {
  Component,
  Input,
  OnInit,
  AfterContentInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss'],
})
export class StackblitzComponent implements OnInit {
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
  selector: 'app-stackblitz-title',
  template: `

<ng-template #pagedesign>
<markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
        <pre class="mermaid">
          flowchart TD
          id1([1.Setup Windows Env]) -->  id2([2.Run Local Hello World Angular])

          id2([2.Run Local Hello World Angular]) -->  id3([3.Add Shared Module])

          id3([3.Add Shared Module])  --> id4([4.Add Material Design])
      
          id4([4.Add Material Design]) -->  id5([5.Add FlexLayout])

          id5([5.Add FlexLayout]) -->  id6([6.Add Lazy Loaded Module/ Service])

          id6([6.Add Lazy Loaded Module/ Service]) -->  id7([7.Add Reactive Forms])
        </pre>
      </markdown>
</ng-template>
    <ng-template #angularComp>
      <markdown  ngPreserveWhitespaces clipboard>
        ---
      </markdown>
      <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
        <pre class="mermaid">
          flowchart TD
          id1([1.Setup Windows Env]) -->  id2([2.Run Local Hello World Angular])

          id2([2.Run Local Hello World Angular]) -->  id3([3.Add Shared Module])

          id3([3.Add Shared Module])  --> id4([4.Add Material Design])
      
          id4([4.Add Material Design]) -->  id5([5.Add FlexLayout])

          id5([5.Add FlexLayout]) -->  id6([6.Add Lazy Loaded Module/ Service])

          id6([6.Add Lazy Loaded Module/ Service]) -->  id7([7.Add Reactive Forms])

          id7([7.Add Reactive Forms]) -->  id8([8.Github-pages hosting])
        </pre>
      </markdown>
      <markdown  [src]="'../../assets/angularcomp.md'" ngPreserveWhitespaces clipboard
      commandLine
      [prompt]="'PS C:\Manoj>'"
      [filterOutput]="'(out)'">
    </markdown>
    </ng-template>
    <ng-template #storybookdesign >
      <markdown  ngPreserveWhitespaces clipboard>
            ---
      </markdown>
      <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
        <pre class="mermaid">
          flowchart TD
          id1([Create a MDX file]) -->  id2([Give the correct component])

          id2([Give the correct component]) -->  id3([Prepare the Meta data])

          id3([Prepare the Meta data]) -->  id4([Create a Story from the component])

          id4([Create a Story from the component]) -->  id5([Change the Order of the displayed stories])
        </pre>
      </markdown>
      <markdown mermaid [src]="'../../assets/storydesign.md'" ngPreserveWhitespaces clipboard ></markdown>
  </ng-template>

  <ng-template #angularsetup >
    <markdown  ngPreserveWhitespaces clipboard>
        ---
    </markdown>
    <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
      <pre class="mermaid">
        flowchart TD
          id4([1.Prepare Git Environment]) -->  id5([2.Add repo and push in github])
          id5([2.Add repo and push in github]) -->  id6([3.Host static pages in gh-pages])
          id6([3.Host static pages in gh-pages]) -->  id7([4.Prepare Stackblitz Environment])
          id7([4.Prepare Stackblitz Environment]) -->  id8([5.Prepare for Storybook branch])
          id8([5.Prepare for Storybook branch]) -->  id9([6.Run in stackblitz Environment])
      </pre>
    </markdown>
    <markdown  [src]="'../../assets/angularsetup.md'" ngPreserveWhitespaces clipboard
      commandLine
      [prompt]="'PS C:\Manoj>'"
      [filterOutput]="'(out)'">
    </markdown>
  </ng-template>

  <ng-template #mermaidCenter >
    <markdown  ngPreserveWhitespaces clipboard>
        ---
    </markdown>
    <div class="markdown" fxLayoutAlign="center center">
      <markdown mermaid [src]="'../../assets/stackblitzTitle.md'"></markdown>
    </div>
    <markdown  ngPreserveWhitespaces clipboard>
      ---
  </markdown>
    <div class="footer">
      <markdown emoji class="footer-text" fxLayout="row" fxLayoutAlign.gt-xs="center">
        Crafted with :heart: by **gmanojisaac** <span style="margin:0 .15em;">•</span> Follow on [GitHub](https://github.com/gmanoj.isaac)
      </markdown>
    </div>
    <markdown mermaid [src]="'../../assets/angularfirstpage.md'"  ngPreserveWhitespaces clipboard></markdown>
  </ng-template>

  <ng-template #usingmermaid >
    <markdown  ngPreserveWhitespaces clipboard>
    ---          
    </markdown>
    <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
      <pre class="mermaid">
        flowchart TD
        id1([Mermaid works]) --> id2([In html])
        id1([Mermaid works]) --> id3([From src])
      </pre>
    </markdown>
    <markdown  ngPreserveWhitespaces clipboard>
      ---
      ## Mermaid __works__! 
    </markdown>
    <markdown mermaid [src]="'../../assets/angularmermaid.md'"  ngPreserveWhitespaces clipboard></markdown>
  </ng-template>

  <ng-template #usingmarkdown >
    <markdown  ngPreserveWhitespaces clipboard>
      ---          
    </markdown>
    <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
      <pre class="mermaid">
        flowchart TD
          id1([Markdown used in]) --> id2([In html])
          id1([Markdown used in]) --> id3([In template])
          id1([Markdown used in]) --> id4([In Component])
          id1([Markdown used in]) --> id5([Load from src])
          id1([Markdown used in]) --> id6([Load from .md file])
      </pre>
    </markdown>
    <markdown  ngPreserveWhitespaces clipboard>
      ---
      ## Markdown __works__!          
    </markdown>      
    <markdown  [src]="'../../assets/angularmarkdown.md'" ngPreserveWhitespaces clipboard 
    commandLine
      [prompt]="'PS C:\Manoj>'"
      [filterOutput]="'(out)'">
      ></markdown>
  </ng-template>
  <ng-template #usingngxs >
    <markdown  ngPreserveWhitespaces clipboard>
      ---          
    </markdown>
    <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
      <pre class="mermaid">
        flowchart TD
          id1([1. Ngxs setup]) --> id2([2. Create HTML Task component ])
          id2([2. Create HTML Task component ]) --> id3([3. Define Task Component Array and States ])
          id3([3. Define Task Component Array and States ]) --> id4([4. Display logic for Task States from Store])
          id4([4. Display logic for Task States from Store]) --> id5([5. Load All Task States from Store])
          id5([5. Load All Task States from Store]) --> id6([6. Logic for Error State and normal state])
          id6([6. Logic for Error State and normal state]) --> id7([7. Update Error State from Store])
          id7([7. Update Error State from Store]) --> id8([8. Load the github code to stackblitz also Load the static-pages])
          
      </pre>
    </markdown>
    <markdown  ngPreserveWhitespaces clipboard>
      ---
      ## NgXs __works__!          
    </markdown>      
    <div fxLayoutAlign="center center">
    <markdown mermaid [src]="'../../assets/angularngxs.md'" ngPreserveWhitespaces clipboard ></markdown>   
    </div>
    <iframe
    src="https://stackblitz.com/edit/node-guc5va?embed=1&file=README.md&hideNavigation=1&view=editor"
    style="width: 50em; min-height: 30em; margin-top: 10vh;"
  ></iframe>

  <iframe
    src="https://gmanojisaac.github.io/AngularGithub/beforelogin"
    style="width: 50em; min-height: 30em; margin-top: 10vh;"
  ></iframe>
  </ng-template>
  <ng-container 
    [ngTemplateOutlet]="tems"
    [ngTemplateOutletContext]="myContext"> 
  </ng-container>
  `,
  styles: [
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
export class StackblitzTitleComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit(): void {}

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

  @ViewChild('storybookdesign', { static: true })
  storybookdesign!: TemplateRef<any>;

  @ViewChild('angularsetup', { static: true })
  angularsetup!: TemplateRef<any>;

  @ViewChild('angularComp', { static: true })
  angularComp!: TemplateRef<any>;

  @ViewChild('usingngxs', { static: true })
  usingngxs!: TemplateRef<any>;

  tems: TemplateRef<any> = this.mermaidCenter;
  myContext = { $implicit: 'World', localSk: 'Svet' };

  @Input()
  myselectedtemp: string = 'first';

  storydesign = `
  \`\`\`typescript
  props: {
  myselectedtemp : 'usingmarkdown'
  },
  \`\`\`
  `;

  usingmarkdownMarkdown = `
`;

  usingmermaidMarkdown = `   
  `;

  pagedesignvar = `

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
        console.log('reached');
        break;
      case 'storybookdesign':
        this.tems = this.storybookdesign;
        break;
      case 'angularsetup':
        this.tems = this.angularsetup;
        break;
      case 'angularComp':
        this.tems = this.angularComp;
        break;
      case 'usingngxs':
        this.tems = this.usingngxs;
        break;
    }
  }
}

@Component({
  selector: 'app-stackblitz-runangular',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss'],
})
export class StackblitzRunAngularComponent implements OnInit {
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
  selector: 'app-stackblitz-storybook',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss'],
})
export class StackblitzStorybookComponent implements OnInit {
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
  selector: 'app-stackblitz-updatePR',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss'],
})
export class StackblitzUpdatePRComponent implements OnInit {
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
  styles: [
    `
  
  `,
  ],
})
export class StackblitzStartPageComponent implements OnInit {
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
  styles: [
    `
  
  `,
  ],
})
export class StackblitzStartTestComponent implements OnInit, AfterContentInit {
  constructor() {}

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

  ngOnInit(): void {}
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
  styles: [
    `
  
  `,
  ],
})
export class StackblitzMermaidInlineComponent implements OnInit {
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
