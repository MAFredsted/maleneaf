import { html } from 'lit/static-html.js'
import type { MainPage } from '../../types/eleventy.js'

export const data = {
  title: 'Home',
  layout: 'base.11ty.tsx',
  eleventyNavigation: {
    key: 'Home',
    order: 1
  }
}

export default (data: MainPage ) => {
  return html`
    <main class="container bg-secondary-1">
      <h1>Work in Progress </h1>
      ${data.title}
    </main>
  `
}
