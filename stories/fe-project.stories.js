import { html } from 'lit-html';
import '../src/fe-project.js';

export default {
  title: 'FeProject',
  component: 'fe-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <fe-project
      style="--fe-project-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </fe-project>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
