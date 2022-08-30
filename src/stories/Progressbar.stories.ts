import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ProgressBarComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import 'marked';
import 'prismjs';
import 'mermaid';
import 'prismjs/components/prism-typescript.min.js';
export default {
  title: 'MANOJ ISAAC G',
  component: ProgressBarComponent,
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

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const Introduction = Template.bind({});
Introduction.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};

export const College = Template.bind({});
College.args = {
  mode: 'indeterminate',
  value: 30,
  color: 'accent', // primary | accent | warn
};

export const PG = Template.bind({});
PG.args = {
  mode: 'indeterminate',
  value: 65,
  bufferValue: 65,
  color: 'warn', // primary | accent | warn
};

export const Teaching = Template.bind({});
Teaching.args = {
  mode: 'indeterminate',
  value: 65,
  bufferValue: 65,
  color: 'warn', // primary | accent | warn
};
