'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6109b6a6.js');

/*
 Stencil Client Patch Esm v2.22.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ui-button.cjs",[[0,"ui-button",{"label":[1],"isLoading":[4,"loading"],"isDisabled":[4,"disabled"]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
