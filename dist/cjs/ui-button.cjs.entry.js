'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6109b6a6.js');

const UiButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = '';
    this.isLoading = false;
  }
  render() {
    return (index.h(index.Host, { class: 'Ui-Button' }, index.h("button", null, this.isLoading
      ? index.h("div", { class: "loader" })
      : '', index.h("div", { class: { 'Ui-Button--invisible': this.isLoading } }, " ", this.label, " "))));
  }
};

exports.ui_button = UiButton;
