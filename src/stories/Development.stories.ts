import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { AboutmeDevelopmentComponent } from '../app/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export default {
  title: 'About me/Development',
  component: AboutmeDevelopmentComponent,
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

const Template: Story<AboutmeDevelopmentComponent> = (
  args: AboutmeDevelopmentComponent
) => ({
  props: args,
});

export const Introduction = Template.bind({});
Introduction.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};
