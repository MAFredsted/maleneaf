import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
export class MyCounter extends LitElement {
  @property( {type: Number }) public count  = 0;

  static styles = css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }`;

  render() {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

}

if (typeof globalThis !== 'undefined' && typeof (globalThis as any).customElements !== 'undefined') {
  if (!customElements.get('my-counter')) {
    customElements.define('my-counter', MyCounter as any);
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "my-counter": MyCounter
  }
}
