// ...existing code...
import { LitElement, html, css } from "lit"
import { customElement, state } from "lit/decorators.js"
import type { BlogEntry } from "../../types/eleventy.js"

//lightweight version for clientside sorting (date is JSON-safe string)
type ClientBlogEntry = {
  url: string
  title?: string
  description?: string
  author?: string
  date?: string
  tags?: string[]
  language?: 'DA' | 'EN' | 'DE'
  highlight?: boolean
}

console.log('[components] loading blog-overview');

@customElement('blog-tool')
export class BlogTool extends LitElement {

  // render into light DOM so your global maleneaf.css applies
  createRenderRoot() { return this }

  @state()
  private entries: ClientBlogEntry[] = []

  connectedCallback(): void {
    super.connectedCallback()
    // we provide data for clientside code as an inline script
    const script = this.querySelector('script[type="application/json"]')
    if (script?.textContent) {
      try {
        const parsed = JSON.parse(script.textContent)
        if (Array.isArray(parsed)) this.entries = parsed
      } catch (e) {
        console.error('[BlogOverview] Failed to initialize due to ill-formed input data', e)
      }
    }
  }

  render() {
    if (!this.entries.length) return html`<p class="maf-error">No Posts Found</p>`

    return html`
    <pre>${JSON.stringify(this.entries, null, 2)}</pre>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "blog-tool": BlogTool
  }
}
// ...existing code...