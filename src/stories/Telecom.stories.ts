import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { AboutmeTelecomComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import 'marked';
import 'prismjs';
import 'mermaid';
import 'prismjs/components/prism-typescript.min.js';
export default {
  title: 'About me/Telecom',
  component: AboutmeTelecomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatProgressBarModule,
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

const Template: Story<AboutmeTelecomComponent> = (
  args: AboutmeTelecomComponent
) => ({
  props: args,
});

export const Introduction = Template.bind({});
Introduction.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};
