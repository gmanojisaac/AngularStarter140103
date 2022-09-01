import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { AboutmeTestingComponent } from '../app/progress-bar/progress-bar.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from '../app/app-shared/app-shared.module';

export default {
  title: 'Testing/Mermaid',
  component: AboutmeTestingComponent,
  decorators: [
    moduleMetadata({
      imports: [
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

const Template: Story<AboutmeTestingComponent> = (
  args: AboutmeTestingComponent
) => ({
  props: args,
});

export const Introduction = Template.bind({});
Introduction.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};
