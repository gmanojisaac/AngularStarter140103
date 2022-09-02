import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const parameters = {
  options: {
    storySort: {
      order: [
        'About me',
            ['Manoj Isaac G', 'Career', 'Lecturer', 'Telecom', 'Development'],
        'Youtube', ['02Sep22',['Title', 'FlowChart','RunAngular', 'RunStorybook', 'UpdatePR' ]]
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
