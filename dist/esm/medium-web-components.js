import { p as promiseResolve, b as bootstrapLazy } from './index-6830b1a8.js';
export { s as setNonce } from './index-6830b1a8.js';

/*
 Stencil Client Patch Browser v2.22.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ui-button",[[0,"ui-button",{"label":[1],"isLoading":[4,"loading"],"isDisabled":[4,"disabled"]}]]]], options);
});
