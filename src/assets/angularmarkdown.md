## Add ngx-markdown
# mermaid, highlight, linenumbers, prismjs should work

```powershell
npm install ngx-markdown autoprefixer@10.4.5 --save
npm install @types/clipboard @types/marked @types/mermaid @types/prismjs --save-dev
```

# Add node modules in angular.io scripts and styles

```typescript
(out)    "styles": [
(out)        "node_modules/prismjs/themes/prism-okaidia.css",
(out)        "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css",
(out)        "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css",
(out)        "node_modules/prismjs/plugins/command-line/prism-command-line.css"
(out)    ],
(out)    "scripts": [
(out)        "node_modules/marked/marked.min.js",
(out)        "node_modules/prismjs/prism.js",
(out)        "node_modules/prismjs/components/prism-typescript.min.js",
(out)        "node_modules/prismjs/components/prism-mermaid.min.js",
(out)        "node_modules/prismjs/components/prism-powershell.min.js",
(out)        "node_modules/prismjs/components/prism-css.min.js",
(out)        "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js",
(out)        "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js",
(out)        "node_modules/prismjs/plugins/command-line/prism-command-line.js",
(out)        "node_modules/mermaid/dist/mermaid.min.js",
(out)        "node_modules/clipboard/dist/clipboard.min.js",
(out)        "node_modules/emoji-toolkit/lib/js/joypixels.min.js"
(out)    ]
```
# Add in app.module

```typescript
(out) import { MarkdownModule, MarkdownService } from 'ngx-markdown';
(out) import { HttpClient } from '@angular/common/http';
(out) import { HttpClientModule } from '@angular/common/http';
(out) 
(out) imports:[
(out)     ...
(out)     HttpClientModule,
(out)     MarkdownModule.forRoot({ loader: HttpClient }),
(out)     ],
(out)   providers: [MarkdownService],
```

# Add in component.html

```typescript
(out)<ng-template #greet let-person><span>Hello {{person}}</span>
(out)  <div class="markdown">
(out)    <markdown mermaid [src]="'../../assets/Testing.md'"></markdown>
(out)    </div>
(out)  </ng-template>
(out)<ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
(out)<ng-template #svk let-person="localSk" ><span>Ahoj {{person}}!</span></ng-template>
(out)<ng-container 
(out)  [ngTemplateOutlet]="tems"
(out)  [ngTemplateOutletContext]="myContext"> </ng-container>
  ```

# Add in component.ts

```typescript
(out)import { Component, Input, OnInit, AfterContentInit, ViewChild, TemplateRef, } from '@angular/core';
(out)...
(out)implements OnInit, AfterContentInit{
(out)  title = 'AngularGhPages';
(out)
(out)  @ViewChild('greet', { static: true })
(out)  greet!: TemplateRef<any>;
(out)  @ViewChild('svk', { static: true })
(out)  svk!: TemplateRef<any>;
(out)  @ViewChild('eng', { static: true })
(out)  eng!: TemplateRef<any>;
(out)
(out)  tems: TemplateRef<any> = this.greet;
(out)  myContext = { $implicit: 'World', localSk: 'Svet' };
(out)  @Input()
(out)  myselectedtemp: string = 'greet';
(out)  ngOnInit(): void { }
(out)  ngAfterContentInit() {
(out)
(out)    switch (this.myselectedtemp) {
(out)      case 'greet':
(out)        this.tems = this.greet;
(out)        break;
(out)  case 'svk':
(out)        this.tems = this.svk;
(out)    break;
(out)      case 'eng':
(out)        this.tems = this.eng;
(out)        break;
(out)    }
(out)  }
(out)
(out)
```

# Create a new file Testing.md in assets folder
```typescript
(out)<pre class="mermaid">
(out)journey
(out)  title My Career Graph
(out)  section Before Tech
(out)  Secondary- 88%: 1: Manoj
(out)  Higher Secondary-89%: 2: Manoj
(out)  College-UG- 67%: 3: Manoj
(out)  College-PG- 74%: 4: Manoj
(out)  section After Tech
(out)  Lecturer- 1Y: 5: Manoj
(out)  Telecom Testing- 14Y: 6: Manoj
(out)  Development- 7Y: 7: Manoj
(out)
(out)</pre>
  ```
  
### Markdown working from html
  # use single back slash \ for escaping comma , angle brackets etc
```typescript
(out)  <markdown ngPreserveWhitespaces clipboard>
(out)  ### Lists
(out)    1. Ordered list
(out)    2. Another bullet point
(out)      - Unordered list
(out)      - Another unordered bullet
(out)  {{ '#working' | language: 'typescript' }}
(out)  </markdown>
```
  ---
  ### Markdown showing command line
  # filterOutput will not show the prompt
```typescript
(out)  <markdown [src]="'../../assets/markdowncommandline.md'"
(out)    commandLine
(out)    [prompt]="'PS C:\Users\Manoj>'"
(out)    [filterOutput]="'(out)'">
(out)</markdown>
```
  ---
  ### Markdown working from template
```typescript
(out)  <markdown  ngPreserveWhitespaces clipboard>
(out)  ## Markdown __works__!
(out)  ---          
(out)  </markdown>
```

  ---

  ### Markdown working from component
```typescript
(out)  <markdown ngPreserveWhitespaces clipboard>
(out)  {{someothervar}}
(out)  {{ somevar | language: 'typescript' }}
(out)  </markdown>
(out)
(out)  <div [innerHTML]="markdowncode | markdown"></div>
```

  # somevar should be having the markdown to run from the component
  ---

  
  ### Markdown working from src
```typescript
(out)    <markdown [src]="'../../assets/storydesign.md'"></markdown>
```

  ## .md file will not contain => backslash
```typescript
(out)    props: {
(out)    myselectedtemp : 'usingmarkdown'
(out)    },   
```
  # Markdown also has other features which can be used.
  ---