import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ProgressBarComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export default {
  title: 'About me/Career',
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

export const TillNow = Template.bind({});
TillNow.args = {
  mode: 'indeterminate',
  value: 30,
  color: 'accent', // primary | accent | warn
};
