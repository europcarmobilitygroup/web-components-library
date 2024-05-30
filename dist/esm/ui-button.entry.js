import { r as registerInstance, h, H as Host } from './index-6830b1a8.js';

const UiButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = '';
    this.isLoading = false;
  }
  render() {
    return (h(Host, { class: 'Ui-Button' }, h("button", null, this.isLoading
      ? h("div", { class: "loader" })
      : '', h("div", { class: { 'Ui-Button--invisible': this.isLoading } }, " ", this.label, " "))));
  }
};

export { UiButton as ui_button };
