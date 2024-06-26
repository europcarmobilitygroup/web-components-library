/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    /**
     * UiButton web component
     * <ui-button />
     */
    interface UiButton {
        /**
          * Enables the loader loading
         */
        "isLoading": boolean;
        /**
          * Button label
         */
        "label": string;
    }
}
declare global {
    /**
     * UiButton web component
     * <ui-button />
     */
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
    };
    interface HTMLElementTagNameMap {
        "ui-button": HTMLUiButtonElement;
    }
}
declare namespace LocalJSX {
    /**
     * UiButton web component
     * <ui-button />
     */
    interface UiButton {
        /**
          * Enables the loader loading
         */
        "isLoading"?: boolean;
        /**
          * Button label
         */
        "label"?: string;
    }
    interface IntrinsicElements {
        "ui-button": UiButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * UiButton web component
             * <ui-button />
             */
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
        }
    }
}
