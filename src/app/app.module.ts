import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent  } from './app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TaskModule } from './components/task.module';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { InboxScreenComponent } from './components/inbox-screen.component';
import { TaskCheckComponent } from './components/checkComponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent, PureInboxScreenComponent,TaskCheckComponent, ProgressBarComponent], //],
  imports: [
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
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
    BrowserAnimationsModule
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent],
})
export class AppModule {}
