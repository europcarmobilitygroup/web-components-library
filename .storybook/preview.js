import '!style-loader!css-loader!sass-loader!./styles.scss';

import { applyPolyfills, defineCustomElements } from '../loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

export const parameters = {
  themes: {
    default: 'Brand 1',
    list: [
      { name: 'Brand 1', class: 'theme-brand-1', color: '#f00' },
      { name: 'Brand 2', class: 'theme-brand-2', color: '#0f0' },
      { name: 'Brand 3', class: 'theme-brand-3', color: '#00f' },
    ],
  },
}
