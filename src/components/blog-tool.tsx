// ...existing code...
import { html, css, LitElement, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'
import type { BlogEntry } from '../../types/eleventy.js'



export class BlogTool extends LitElement {

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

  @state() private tagSet: Set<string> = new Set<string>()

  connectedCallback(): void {
    super.connectedCallback()
    const onHydrated = (): void => {
      console.log('we call onhydrated')
      this.tagSet = new Set<string>(
          this.entries
            .flatMap(entry => entry.tags || [])
      )
      console.log('onhydrated new tagSet', this.tagSet)
      this.requestUpdate()
    }
    window.addEventListener('maleneaf-hydrated', onHydrated, { once: true })
    if ((window as any).__maleneafHydrated) {
      onHydrated()
    }    
  }

  goToArticle = (url: string) => {
    window.location.href=url
  }
  render() {
    if (!this.entries || !this.entries.length) {
      return html`
        <link rel="stylesheet" href="/css/maleneaf.css" />
        <div class="maf-search-tool">
          <h1>Blog Tool</h1>
          <p>No entries found</p>
        </div>
        `
    }
    return html`
      <link rel="stylesheet" href="/css/maleneaf.css" />
      <div>
        <div class="maf-search-tool">
          <input type="text" />
          <details>
            <summary>tags</summary>
            ${[...this.tagSet].map(tag => html`
              <button type="button">${tag}</button>
            `)}
          </details>
        </div>
        <div class="maf-articles">
          ${this.entries.map(e =>
            html`
              <article class="maf-article"  @click="${() => this.goToArticle(e.url)}">
                <header>
                  ${e.title}
                  ${e.author}
                  ${e.language}
                  ${e.date}
                </header>
                <p>
                  ${e.description}
                </p>
              </article>
            `
          )}
        </div>

      </div>
    `
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
