  ## Use Meta data to give location info
  # Title shows the place where you can find the story and add parameters to modify the view mode
  ```typescript
    <Meta title="YoutubeMaking/06Sep22"  
      parameters={{
      viewMode: 'docs',
      previewTabs: { 
        canvas: { hidden: true } 
      },
  ```

  ## Import Modules for story use
  # Import sharedModule which contains FlexBox, HTTPClient Module for MarkdownModule
  # Also the providers will have MarkdownService for markdown module
  ```typescript
  imports: [
  AppSharedModule,
  HttpClientModule,
  MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  ```

  ## Add the correct component!
  # Component is used in the StackblitzStorybookComponent
  ```typescript
      moduleMetadata({
        declarations: [StackblitzTitleComponent],
      ...
  ```
  --- 
  ## PageDesign __works__!

  <pre class="mermaid">
    flowchart TD
      id1([Prepare ngTemplate]) -->  id2([Mmyselectedtemp receive input from story])

      id2([myselectedtemp receive input from story]) -->  id3([Shows the template])

      id3([Shows the template]) -->  id4([use templateOutlet and context])
  </pre>
  
  # In html use the different templates
```typescript
  <ng-template #usingmarkdown >
  </ng-template>
```

  # call the templates using templateOutlet and can pass a context

```typescript
  <ng-container 
  [ngTemplateOutlet]="tems"
  [ngTemplateOutletContext]="myContext"> 
```

  # use the context in html

```typescript
  <ng-template #greet let-person><span>Hello {{person}} </span></ng-template>
  <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
  <ng-template #svk let-person="localSk" ><span>Ahoj {{person}}!</span></ng-template>
```

  # use the context in component

```typescript
  @ViewChild('greet', { static: true })
  greet!: TemplateRef<any>;
  @ViewChild('svk', { static: true })
  svk!: TemplateRef<any>;
  @ViewChild('eng', { static: true })
  eng!: TemplateRef<any>;

  myContext = { $implicit: 'World', localSk: 'Svet' };
  tems: TemplateRef<any> = this.greet;
```

  # use AfterContentInit

```typescript

  import { OnInit, AfterContentInit, ViewChild, TemplateRef, Input, Component } from '@angular/core';

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

```
  # From the story pass the right template name
## Change preview.js to modify the order
# Normally alpabetical order is followed
# If seperate .mdx files are used the preview.js will not control the order

```powershell
<Story name="pagedesign">
  {{
    template: `<app-stackblitz-title [myselectedtemp]= "myselectedtemp"></app-stackblitz-title>`,
    props: {
    myselectedtemp : 'pagedesign'
    },
  }}
</Story>
```
# This is the design of the Page
# Storybook mdx feature is used extensively
```typescript
options: {
    storySort: {
      order: [
       'YoutubeMaking', ['06Sep22', ['FirstPage', 'Mermaid', 'Markdown', 'PageDesign', 'StorybookDesign', 'AngularSetup']],
       ],
    },
        
 ```

