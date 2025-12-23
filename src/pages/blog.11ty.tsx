import { html } from 'lit/static-html.js'
import type { BlogEntriesOverview } from '../../types/eleventy.js'

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
  console.log('data is',data.collections.posts)
  const entriesJson = JSON.stringify(data.collections.posts)
  console.log('entries are', entriesJson)
  return html`
    <main class="container bg-secondary-1">
      <h1> This is the Blog Tool </h1>
      <blog-tool data-entries='${entriesJson}'></blog-tool>
    </main>
  `
}
