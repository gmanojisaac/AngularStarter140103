

  --- 
  ## PageDesign __works__!

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

```

  # use AfterContentInit

```typescript

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

```
  # From the story pass the right template name

```typescript
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
---  