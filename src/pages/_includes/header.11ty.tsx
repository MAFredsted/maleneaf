import { html } from 'lit/static-html.js'
import type { MainPage } from '../../../types/eleventy.js'

export default (data: MainPage ) => {
  const pages = data.collections?.all || []
  // Use page-level title/description, fallback to site-level
  const pageTitle = data.title || data.site?.title || 'Error: missing title property'
  const pageDescription = data.description || data.site?.description || 'Error: missing description property'
  
  console.log(data.page)
  return html`
    <header class="maleneaf-header">
        <div class="maleneaf-header-top">
          <a href="/" class="maleneaf-logo">
            <img src="/files/logo.svg" alt="${data.site?.title || 'Error: missing logo text'}"/>
          </a>
          
          <nav class="maleneaf-header-nav">
            ${pages
              .filter((page: any) => page.data.eleventyNavigation)
              .map((page: any) => html`
                <a href="${page.url}"
                  class="${page.url == data.page?.url ? 'active' : ''}"
                  >
                  ${page.data.eleventyNavigation.key}
                </a>
              `
              )}
          </nav>
        </div>

        <div class="maleneaf-header-bio">
          <h1>
            ${pageTitle}
          </h1>
          <p>
            ${pageDescription}
          </p>
        </div>
    </header>
  `
}