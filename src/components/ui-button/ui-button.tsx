import { Component, Prop, h, Host } from '@stencil/core';

/**
 * UiButton web component
 *
 * <ui-button />
 */
@Component({
  tag: 'ui-button',
})
export class UiButton {
  /**
   * Button label
   */
  @Prop() label = '';

  /**
   * Enables the loader loading
   */
  @Prop({ attribute: 'loading' }) isLoading = false;

  render(): HTMLElement {
    return (
      <Host class={'Ui-Button'}>
        <button>
          { this.isLoading
            ? <div class="loader" />
            : ''
          }
          <div class={{ 'Ui-Button--invisible': this.isLoading }}> {this.label} </div>
        </button>
      </Host>
    );
  }
}

