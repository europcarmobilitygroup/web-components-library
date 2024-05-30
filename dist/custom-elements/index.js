import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const UiButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.label = '';
    this.isLoading = false;
  }
  render() {
    return (h(Host, { class: 'Ui-Button' }, h("button", null, this.isLoading
      ? h("div", { class: "loader" })
      : '', h("div", { class: { 'Ui-Button--invisible': this.isLoading } }, " ", this.label, " "))));
  }
};

const UiButton = /*@__PURE__*/proxyCustomElement(UiButton$1, [0,"ui-button",{"label":[1],"isLoading":[4,"loading"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      UiButton
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { UiButton, defineCustomElements };
