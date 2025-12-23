import {LitElement, html, css} from 'lit'

export class DemoGreeter extends LitElement {
  public name = ''
  static styles = css`
    b { color: red; }
  `

  static properties = {
    name: { type: String }
  }

  render() {
    return html`Hello <b>${this.name}</b>!`
  }
}
customElements.define('demo-greeter', DemoGreeter)

declare global {
  interface HTMLElementTagNameMap {
    'demo-greeter': DemoGreeter
  }
}
