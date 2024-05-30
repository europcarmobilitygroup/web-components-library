import { h, Host } from '@stencil/core';
/**
 * UiButton web component
 *
 * <ui-button />
 */
export class UiButton {
  constructor() {
    this.label = '';
    this.isLoading = false;
    this.isDisabled = false;
  }
  render() {
    return (h(Host, { class: 'Ui-Button' }, h("button", null, this.isLoading
      ? h("div", { class: "loader" })
      : '', h("div", { class: { 'Ui-Button--invisible': this.isLoading } }, " ", this.label, " "))));
  }
  static get is() { return "ui-button"; }
  static get properties() {
    return {
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Button label"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "isLoading": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Enables the loader loading"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "isDisabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disables button's functionalities"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
