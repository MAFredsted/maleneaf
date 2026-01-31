import { html, css, LitElement, unsafeCSS, isServer} from 'lit'
import { property, state } from 'lit/decorators.js'
import { baseStyles } from './baseStyles.js'

import type { BlogEntry } from '../../types/eleventy.js'
import type { PropertyValues } from 'lit'


export class BlogTool extends LitElement {

  static styles = [
    baseStyles,
    css`
      .maf-search-tool {
        border: 0.2rem solid var(--bg-secondary-2);
        border-radius: 2rem;
        margin: 1rem;
        padding: 2rem;
      }
      .maf-articles {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--space-md);
        align-items: stretch;
      }
      .nonActiveTag,
      .activeTag {
        cursor: pointer;
        margin-left: var(--space-sm);
      }
      .activeTag,
      .nonActiveTag:hover {
        color: var(--color-maroon);
      }
    `

  ]
  // Parse JSON attribute into a typed array before first render
  @property({
    attribute: 'data-entries',
    converter: {
      fromAttribute(value: string) {
        try { return JSON.parse(value || '[]') as BlogEntry[] }
        catch { return [] }
      },
      toAttribute(value: BlogEntry[]) { return JSON.stringify(value) as String }
    }
  })
  public entries: BlogEntry[]   = []

  @state() private tagSet: Set<string> = new Set<string>()
  @state() private activeTags: Set<string> = new Set<string>()


  onHydrated = (): void => {
    this.tagSet = new Set<string>(
        this.entries
          .flatMap(entry => entry.tags || [])
    )

    this.requestUpdate()
  }

  connectedCallback(): void {
    super.connectedCallback()
    window.addEventListener('maleneaf-hydrated', this.onHydrated, { once: true })

    if ((window as any).__maleneafHydrated) {
      this.onHydrated()
    }    
  }

  
  toggleTag = (tag: string) => {
    if (this.activeTags.has(tag)) {
      this.activeTags.delete(tag)
    } else {
      this.activeTags.add(tag)
    }
    this.requestUpdate()
  }

  filterArticles = () => {
    if(this.activeTags.size === 0 ) {
      return this.entries
    }
    else return this.entries.filter(entry => entry.tags.some(tag => this.activeTags.has(tag)))

  }
  goToArticle = (url: string) => {
    window.location.href=url
  }

  render() {
    if (!this.entries || !this.entries.length) {
      return html`
        <div class="maf-search-tool">
          <h2>Blog Entries</h2>
          <p>No entries found</p>
        </div>
        `
    }
    const filteredArticles: BlogEntry[] = this.filterArticles()
    return html`
      <div>
        <h2>Search Tools</h2>
        <div class="maf-search-tool">
          <input type="text" />
          <p>Active Tags: ${this.activeTags.size} </p>
          <details>
            <summary>Available Tags: ${this.tagSet.size} </summary>
            ${[...this.tagSet].map(tag => html`
              <button class=${this.activeTags.has(tag)? 'btn-outline-active' : 'btn-outline'} type="button" @click="${() => this.toggleTag(tag)}">${tag}</button>
            `)}
          </details>
        </div>
        <h2> Blog Entries </h2>
        <div class="maf-articles">
          ${filteredArticles.map(e =>
            html`
              <article class="maf-card"  @click="${() => this.goToArticle(e.url)}">
                <header>
                  <p class="maf-card-title">${e.title}</p>
                  <div class="maf-card-image">
                    <img src="/files/${e.image}" alt="Missing Image" />
                  </div>
                </header>               
                <div class="maf-card-meta">
                    <p class="maf-card-author">${e.author}</p>
                    <p class="maf-card-language">${e.language}</p>
                    <p class="maf-card-time"> ${new Date(e.date).toLocaleDateString('en-GB')} </p>
                    <div class="maf-card-tags">
                      <span class="maf-card-tags-label">tags:</span>
                      <span class="maf-card-tags-list">
                        ${ e.tags.map(tag => html`
                          <p class="${this.activeTags.has(tag)? "activeTag" : "nonActiveTag"}"
                             @click="${(event: Event) => { event.stopPropagation(); this.toggleTag(tag); }}">
                            ${tag}
                          </p>
                        `)}
                      </span>
                    </div>
                </div>
                <p class="maf-card-text">
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
