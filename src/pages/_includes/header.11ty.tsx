import { html } from 'lit/static-html.js'

export default (data: any) => {
  const pages = data.collections?.all || []

  return html`
    <header class="maleneaf-header">
        <div class="maleneaf-logo">
            <a href="/">
              <img src="/files/logo.svg" alt="${data.site?.title || 'Error: missing logo text'}"/>
            </a>
        </div>
        <div class="maleneaf-hero">
          <h1>
            ${data.site?.title || 'Error: missing title property'}
          </h1>
          <p>
            ${data.site?.description || 'Error: missing description property'}
          </p>
        </div>

        <nav class="maleneaf-nav">
          <ul>
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
          </ul>

        </nav>


    </header>
  `
}