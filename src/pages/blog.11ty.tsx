import { html } from 'lit/static-html.js'
import type { BlogEntriesOverview, BlogEntry } from '../../types/eleventy.js' 

export const data = {
  title: 'Personal Blog',
  description: 'Ideas, Projects and thoughts about the things I care about',
  layout: 'base.11ty.tsx',
  eleventyNavigation: {
    key: 'Blog',
    order: 3
  }
}

export default (data: BlogEntriesOverview ) => {
  // filter your collection for /posts/ and map into a serializable subset

  return html`
    <main class="container bg-secondary-1">
      <h1> This is the Blog Tool </h1>

      <demo-greeter name="Help Me !"></demo-greeter>
      <my-counter></my-counter>
    </main>
  `
}