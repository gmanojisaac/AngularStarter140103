 ---
  ## 1. Setup Windows Environment
  # Using 64bit Windows OS
  # Open powershell in Admin Mode

```typescript
node -v
(out)v16.10.0
```

  ## Check npm version
  # npm version should be compatible with the node

```typescript
npm -v
(out)7.24.0
```
  ## Check Angular Version vs the required typescript compiler version
  # Compiler version is changing fast

| Angular       | Typescript    |
| ------------- |:-------------:| 
| 13.0          | 4.4 & 4.5     |
| 13.2          | 4.4 & 4.5     |   
| 13.3          | 4.4, 4.5, 4.6 |  
| 14.1.3        | 4.7.2 |  

  ## update the nodeJS for the required Angular-cli version
  # check the latest angular-cli version compatibility

```typescript
ng version
(out)
(out)     _                      _                 ____ _     ___
(out)    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
(out)   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
(out)  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
(out) /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
(out)                |___/
(out)    
(out)
(out)Angular CLI: 14.1.3
(out)Node: 16.10.0
(out)Package Manager: npm 7.24.0
(out)OS: win32 x64
(out)
(out)Angular: 14.1.3
(out)... animations, cli, common, compiler, compiler-cli, core, forms
(out)... platform-browser, platform-browser-dynamic, router
(out)
(out)Package                         Version
(out)---------------------------------------------------------
(out)@angular-devkit/architect       0.1401.3
(out)@angular-devkit/build-angular   14.1.3
(out)@angular-devkit/core            14.1.3
(out)@angular-devkit/schematics      14.1.3
(out)@angular/cdk                    14.2.0
(out)@angular/flex-layout            14.0.0-beta.40
(out)@angular/material               14.2.0
(out)@schematics/angular             14.1.3
(out)rxjs                            7.5.6
(out)typescript                      4.7.4

```

  ## Download NodeJs for the required OS - mine is 64bit Windows OS
  # Check the minimum supported nodeJs and npm version
  # https://nodejs.org/en/ -  open command prompt, type winver / wmic os get osarchitecture

```typescript
wmic os get osarchitecture
(out)OSArchitecture
(out)64-bit
```

 ## To check the supported nodeJs version for the installed angular
  Goto https://unpkg.com/browse/@angular/core@14.1.3/package.json 

```typescript
(out)"engines": {
(out)  "node": "^14.15.0 || >=16.10.0"
(out)  },
```

 ## To Update the latest angular-cli, prepare the npm Environment, Restart the laptop

  Open Explorer and type %APPDATA% and go to that location
```powershell
npm uninstall -g @angular/cli
cd  C:\Users\gmano\AppData\Roaming
npm install -g rimraf
rimraf -rf ./npm-cache/
npm cache clean --force
npm cache verify
shutdown -r 
```

## 2. Run Local Hello World Angular
# open the powershell in Admin Mode-Create new Angular Project and execute in Laptop

```powershell
npm install -g @angular/cli@latest
ng version
ng new AngularStarter
Select y for Angular Routing
Select scss for styling
cd AngularStarter
ng build , y for analytics
ng serve
Go to browser and open link => http://localhost:4200/
```

## 3.Add Shared Module
# Execute Angular cli command for creating the shared module

```powershell
(out) ng g module app-shared
```

# Modify the appSharedModule and add exports

```typescript
(out)import { NgModule } from '@angular/core';
(out)import { CommonModule } from '@angular/common';
(out)@NgModule({
(out)   declarations: [],
(out)   exports: [
(out)       CommonModule
(out)            ]
(out) 
(out)   })
(out)export class AppSharedModule { }
```

# Add AppSharedModule in main app module

```typescript
(out) import { AppSharedModule } from '../lib/app-shared/app-shared.module';
(out) ...
(out)imports: [
(out)AppSharedModule,
```

# Warning: initial exceeded maximum budget. Solved by changing the budget
Angular.json-> modify to 2mb

```typescript
(out)
(out) "budgets": [
(out)                {
(out)                  "type": "initial",
(out)                  "maximumWarning": "2mb",
(out)                  "maximumError": "2mb"
(out)                },
(out)                {
(out)                  "type": "anyComponentStyle",
(out)                  "maximumWarning": "2mb",
(out)                  "maximumError": "2mb"
(out)                }

```
## 4.Add Material Module inside app-shared module
# Execute Angular cli command for creating the shared module

```powershell
(out) ng g m material --module=app-shared
```

# Add MaterialModule in main app-shared module both import and export

```typescript
(out) import { MaterialModule } from '../material/material.module';
(out) ...
(out)imports: [
(out)MaterialModule,
(out) ...
(out)exports: [
(out)MaterialModule,
```

# Add Material using npm and give options

```powershell
ng add @angular/material
(out) Choose a prebuilt theme name, or "custom" for a custom theme: Deep Purple/Amber
(out) Y- GLobal Typogrgaphy styles
(out) y-BrowserAnimations
```

# Import all the Modules and export in Material Module

```typescript
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
 
@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class MaterialModule { }
```


# Add a Slider in app.component.html

```typescript
(out) <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
```

## 5. Add FlexLayout 
# In app-shared Module
```typescript
(out) import { FlexLayoutModule } from '@angular/flex-layout';
(out)  , exports: [
(out)    FlexLayoutModule,

```
# Add FlexLayout using npm

```powershell
npm i -s @angular/flex-layout
```

# Flex Align the mat-slider in app.component.html

```typescript
(out) <div fxLayout="column" fxLayoutAlign="space-between">
(out)    <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
(out)    <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
(out)  </div>
```


## 6. Add LazyLoaded Feature module/ Service

```powershell
ng generate module beforeLogin --route beforelogin --module app.module
```
# Add a service

```powershell
ng generate service service/userdata
```

# Add Feature Module

```powershell
ng g m beforeLogin 
```

# Add the sharedModule in Feature Module

```typescript
(out)import { AppSharedModule } from '../app-shared/app-shared.module';
(out) , imports: [
(out)   AppSharedModule ,
```

# Modify the app.routing.module

```typescript
(out)const routes: Routes = [
(out)  { path: '', redirectTo: 'beforelogin', pathMatch: 'full' },
(out){ path: 'beforelogin', loadChildren: () => import('./before-login/before-login.module').then(m => m.BeforeLoginModule) }];
```

# Add in app.component.ts:

```typescript
(out)  template: 
(out)       
(out)  <router-outlet></router-outlet>
```

## 7. Add Reactive Forms Module in app-shared module

```typescript
(out)import { FormsModule, ReactiveFormsModule } from '@angular/forms';
(out), exports: [
(out)FormsModule, ReactiveFormsModule
```

## 8. Add ngXs Store
# Modify the compiler option -    "strict": false,

```powershell
npm install @ngxs/store @ngxs/store@dev @ngxs/logger-plugin@dev --save
```
# In App.module

```typescript
(out)    NgxsModule.forRoot([], {
(out)      developmentMode: !environment.production,
(out)    }),
(out)    NgxsReduxDevtoolsPluginModule.forRoot(),
(out)    NgxsLoggerPluginModule.forRoot({
(out)      disabled: environment.production,
(out)    }),
```
## 9. Add ngx-markdown
# mermaid, highlight, linenumbers, prismjs should work

```powershell
npm install ngx-markdown --save
```

# Add node modules in angular.io scripts and styles

```typescript
(out)    "styles": [
(out)        "node_modules/prismjs/themes/prism-okaidia.css",
(out)        "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
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



