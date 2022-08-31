import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { AboutmeIntroductionComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from '../app/app-shared/app-shared.module';

import 'marked';
import 'prismjs';
import 'mermaid';
import 'prismjs/components/prism-typescript.min.js';
export default {
  title: 'About me/Manoj Isaac G',
  component: AboutmeIntroductionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // MatProgressBarModule,
        AppSharedModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
      ],
      providers: [MarkdownService],
    }),
  ],
  argTypes: {
    color: {
      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<AboutmeIntroductionComponent> = (
  args: AboutmeIntroductionComponent
) => ({
  props: args,
});

export const Introduction = Template.bind({});
Introduction.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};
