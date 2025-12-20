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
  const posts = (data.collections?.all || [])
    .filter((p: any) => (p.url || '').startsWith('/posts/'))
    .map((p: any) => {
      const entry: Partial<BlogEntry> = {
        url: p.url,
        title: p.data?.title,
        description: p.data?.description,
        author: p.data?.author || p.data?.author,
        tags: p.data?.tags || [],
        language: p.data?.language,
        highlight: p.data?.highlight,
        // keep date as ISO string for safe JSON serialization
        date: p.date ? new Date(p.date) : new Date()
      }
      return entry
    }) as unknown as BlogEntry[] // cast so your types are used for dev-time checks
  console.log(posts)

  return html`
    <main class="container bg-secondary-1">
      <h1> This is the Blog Tool </h1>

      <!-- inject the posts JSON for the client component to pick up -->
      <blog-tool>
        <script type="application/json">${JSON.stringify(posts)}</script>
      </blog-tool>
    </main>
  `
}