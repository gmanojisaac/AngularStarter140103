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

          id7([7.Add Reactive Forms]) -->  id8([8.Add ngXs Store])

          id8([8.Add ngXs Store]) -->  id9([9.Add ngx-markdown])
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
      <markdown ngPreserveWhitespaces clipboard>
        ---          
        ## Add the correct component!
        # Component is used in the StackblitzStorybookComponent
          {{ 'moduleMetadata(\{
              declarations: [StackblitzTitleComponent],' | language: 'typescript' }}     
      </markdown>      
      <markdown ngPreserveWhitespaces clipboard>     
        ## Use Meta data to give location info
        # Title shows the place where you can find the story
          {{ '\\<Meta title="YoutubeMaking/06Sep22"    ' | language: 'typescript' }}   
      </markdown>
      <markdown ngPreserveWhitespaces clipboard>     
        ## Import Modules for story use
        # Import sharedModule which contains FlexBox, HTTPClient Module for MarkdownModule
        # Also the providers will have MarkdownService for markdown module
          {{ 'imports: \[
          AppSharedModule\,
          HttpClientModule\,
          MarkdownModule.forRoot({ loader: HttpClient })\,
        \]\,
        providers: [MarkdownService]\,"    ' | language: 'typescript' }}   
      </markdown>
      <markdown ngPreserveWhitespaces clipboard>     
        ## Prepare the template for the storybook added in MDX
        # Send the prop value to the component

      </markdown>
      <markdown [src]="'../../assets/storydesign.md'" ngPreserveWhitespaces clipboard></markdown>
      <markdown ngPreserveWhitespaces clipboard>     
        ## Change preview.js to modify the order
        # Normally alpabetical order is followed
        # If seperate .mdx files are used the preview.js will not control the order
      </markdown>
      <markdown [src]="'../../assets/storydesignOrder.md'" ngPreserveWhitespaces clipboard></markdown> 
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
  </ng-template>

  <ng-template #pagedesign >
    <markdown  ngPreserveWhitespaces clipboard>
        ---
    </markdown>
    <markdown mermaid  ngPreserveWhitespaces clipboard fxLayoutAlign="center center">
      <pre class="mermaid">
        flowchart TD
          id1([Prepare ngTemplate]) -->  id2([Mmyselectedtemp receive input from story])

          id2([myselectedtemp receive input from story]) -->  id3([Shows the template])

          id3([Shows the template]) -->  id4([use templateOutlet and context])
      </pre>
    </markdown>
    <markdown  ngPreserveWhitespaces clipboard>
      {{pagedesignvar}}
    </markdown>
    <markdown [src]="'../../assets/storydesign.md'" ngPreserveWhitespaces clipboard></markdown>   
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
    <markdown [data]="usingmermaidMarkdown" ngPreserveWhitespaces clipboard></markdown>
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
      </pre>
    </markdown>
    <markdown  ngPreserveWhitespaces clipboard>
      ---
      ## Markdown __works__!          
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

  @ViewChild('storybookdesign', { static: true })
  storybookdesign!: TemplateRef<any>;

  @ViewChild('angularsetup', { static: true })
  angularsetup!: TemplateRef<any>;

  @ViewChild('angularComp', { static: true })
  angularComp!: TemplateRef<any>;

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
  # use single back slash \ for escaping comma , angle brackets etc
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
  ### Markdown showing command line
  # filterOutput will not show the prompt
  \`\`\`typescript
  <markdown [src]="'../../assets/markdowncommandline.md'"
    commandLine
    [prompt]="'PS C:\Users\Manoj>'"
    [filterOutput]="'(out)'">
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
    <markdown [src]="'../../assets/storydesign.md'"></markdown>
  \`\`\`

  ## .md file will not contain => backslash
  \`\`\`typescript
    props: {
    myselectedtemp : 'usingmarkdown'
    },   
  \`\`\`
  # Markdown also has other features which can be used.
  ---
`;

  usingmermaidMarkdown = `  
  
  ### Mermaid works from html
  \`\`\`typescript
<markdown mermaid  ngPreserveWhitespaces clipboard>
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
      <markdown mermaid [src]="'../../assets/stackblitzMermaid.md'"></markdown>
  \`\`\`

  # Mermaid works from file load seamlessly
  ---    
  `;

  pagedesignvar=`
  --- 
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
      case 'storybookdesign':
        this.tems = this.storybookdesign;
        break;
      case 'angularsetup':
        this.tems = this.angularsetup;
        break;
      case 'angularComp':
        this.tems = this.angularComp;
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
