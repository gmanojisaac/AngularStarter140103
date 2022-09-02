import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { StackblitzStorybookComponent } from '../app/youtube/2022sept02/stackblitz.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from '../app/app-shared/app-shared.module';

export default {
  title: 'Youtube/02Sep22/RunStorybook',
  component: StackblitzStorybookComponent,
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

const Template: Story<StackblitzStorybookComponent> = (
  args: StackblitzStorybookComponent
) => ({
  props: args,
});

export const RunStorybook = Template.bind({});
RunStorybook.args = {
  mode: 'indeterminate',
  value: 10,
  color: 'primary', // primary | accent | warn
};
