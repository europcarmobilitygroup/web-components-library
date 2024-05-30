import { html } from 'lit-html';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../dist/custom-elements/index';

setCustomElementsManifest(customElements);

export default {
  title: 'UiButton',
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Test',
    },
  }
};

export const WebComponent = (argTypes) => html`
  <section>
    <ui-button
      loading="${argTypes.loading}"
      label="${argTypes.label}"
    />
  </section>
`;