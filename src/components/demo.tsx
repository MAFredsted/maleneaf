import {LitElement, html, css} from 'lit';


const _BaseElement: any =
  (typeof globalThis !== 'undefined' && typeof (globalThis as any).HTMLElement !== 'undefined')
    ? (globalThis as any).HTMLElement
    : class {}


    
export class DemoGreeter extends LitElement {
  public name = '';
  static styles = css`
    b { color: red; }
  `;

  static properties = {
    name: { type: String },
  };

  render() {
    return html`Hello <b>${this.name}</b>!`;
  }
}
customElements.define('demo-greeter', DemoGreeter);

declare global {
  interface HTMLElementTagNameMap {
    "demo-greeter": DemoGreeter
  }
}