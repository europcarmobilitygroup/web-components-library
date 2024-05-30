'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6109b6a6.js');

/*
 Stencil Client Patch Browser v2.22.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('medium-web-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ui-button.cjs",[[0,"ui-button",{"label":[1],"isLoading":[4,"loading"]}]]]], options);
});

exports.setNonce = index.setNonce;
