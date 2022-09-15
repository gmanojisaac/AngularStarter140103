import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TaskModule } from './components/task.module';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//import { InboxScreenComponent } from './components/inbox-screen.component';
import { TaskCheckComponent } from './components/checkComponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ProgressBarComponent,
  AboutmeIntroductionComponent,
  AboutmeLecturerComponent,
  AboutmeTelecomComponent,
  AboutmeDevelopmentComponent,
  AboutmeTestingComponent, StartScreenComponent
} from './progress-bar/progress-bar.component';
import { AppSharedModule } from './app-shared/app-shared.module';
import { StackblitzComponent,
  StackblitzTitleComponent,
  StackblitzRunAngularComponent,
  StackblitzStorybookComponent,
  StackblitzUpdatePRComponent,
  StackblitzStartPageComponent,
  StackblitzStartTestComponent,
  StackblitzMermaidInlineComponent
 } from './youtube/2022sept02/stackblitz.component';
 import {SeptfifteenComponent} from './youtube/Sep2022/septfifteen/septfifteen.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { YoutubeMakingComponent } from './youtube-making/youtube-making.component';
@NgModule({
  declarations: [
    AppComponent,
    PureInboxScreenComponent,
    TaskCheckComponent,
    ProgressBarComponent,
    AboutmeIntroductionComponent,
    AboutmeLecturerComponent,
    AboutmeTelecomComponent,
    AboutmeDevelopmentComponent,
    AboutmeTestingComponent,StartScreenComponent,
    StackblitzComponent, StackblitzTitleComponent,
    StackblitzRunAngularComponent,
    StackblitzStorybookComponent,
    StackblitzUpdatePRComponent,
    StackblitzStartPageComponent,
    StackblitzStartTestComponent,
    StackblitzMermaidInlineComponent,
    SeptfifteenComponent,
    AboutMeComponent,
    YoutubeMakingComponent
  ], //],
  imports: [
    AppSharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserAnimationsModule,
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent],
})
export class AppModule {}
