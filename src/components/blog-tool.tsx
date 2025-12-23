// ...existing code...
import { html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js'
import type { BlogEntry } from '../../types/eleventy.js'

export class BlogTool extends LitElement {
  static styles = css` :host { display:block } `

  // Parse JSON attribute into a typed array before first render
  @property({
    attribute: 'data-entries',
    converter: {
      fromAttribute(value: string) {
        console.log('dataentries is', value)
        try { return JSON.parse(value || '[]') as BlogEntry[] }
        catch { return [] }
      },
      toAttribute(value: BlogEntry[]) { return JSON.stringify(value) as String }
    }
  })
  public entries: BlogEntry[]   = []

  render() {
    console.log(this.entries)
    if (!this.entries || !this.entries.length) {
      return html`<div><p>No entries found</p></div>`
    }
    return html`<div>${this.entries.map(e => html`<article>...${e.title}...</article>`)}</div>`
  }
}

if (typeof globalThis !== 'undefined' && typeof (globalThis as any).customElements !== 'undefined') {
  if (!customElements.get('blog-tool')) {
    customElements.define('blog-tool', BlogTool as any)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blog-tool': BlogTool
  }
}
