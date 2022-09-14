import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { StackblitzTitleComponent } from '../app/youtube/2022sept02/stackblitz.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from '../app/app-shared/app-shared.module';

export default {
  title: 'Youtube/02Sep22/Title',
  component: StackblitzTitleComponent,
  parameters: {
    viewMode: 'docs',
    previewTabs: { 
      canvas: { hidden: true } 
    }
  },
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

const Template: Story<StackblitzTitleComponent> = (
  args: StackblitzTitleComponent
) => ({
  props: args,
});

export const Title = Template.bind({});
Title.args = {
  myselectedtemp : 'pagedesign'
};
