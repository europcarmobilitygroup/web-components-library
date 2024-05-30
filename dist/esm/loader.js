import { p as promiseResolve, b as bootstrapLazy } from './index-6830b1a8.js';
export { s as setNonce } from './index-6830b1a8.js';

/*
 Stencil Client Patch Esm v2.22.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ui-button",[[0,"ui-button",{"label":[1],"isLoading":[4,"loading"]}]]]], options);
  });
};

export { defineCustomElements };
