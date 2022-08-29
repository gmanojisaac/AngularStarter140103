import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { fireEvent, within } from '@storybook/testing-library';

import { CommonModule } from '@angular/common';

import { InboxScreenComponent } from './inbox-screen.component';

import { TaskMarkedModule } from './taskMarked.module';

import { Store, NgxsModule } from '@ngxs/store';

import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import 'marked';
import 'prismjs';

import 'mermaid';
import 'clipboard';


export default {
  component: InboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule,HttpClientModule, TaskMarkedModule, NgxsModule.forRoot([]), MarkdownModule.forRoot({ loader: HttpClient })],
      providers: [Store, MarkdownService],
    }),
  ],
  title: 'PureInboxScreenMarked',
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};
export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};
