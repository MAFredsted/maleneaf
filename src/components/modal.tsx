import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement('overview-modal')
export class OverviewModal extends LitElement {
  @property({ type: Boolean }) open = false
  render() {
    return html`
      <div class="maleneaf-modal">
        <span class="close-btn" @click=${this._close}>
        </span>
        <h2>
          Overview
        </h2>
      </div>
    `
  }
  private _close() {
    this.open = false
    this.dispatchEvent(new CustomEvent('overview-close'))
  }
}