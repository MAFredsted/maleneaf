export const data = {
  layout: 'layouts/base.11ty.tsx',
  title: 'Malene Andrä-Fredsted - Developer and Crafts',
  description: 'This site is an overview of my portfolio as well as any other interests I have'
}

import { html } from 'lit'

export default function(data: any) {
  return html`
    <div class="homepage">
      <section class="hero">
        <h1>Hi, I'm Malene Andrä-Fredsted</h1>
        <p class="lead">Developer & Creative Thinker</p>
        <p>Welcome to my corner of the internet!</p>
      </section>
      
      <section class="features">
        <div class="feature-grid">
          <div class="feature">
            <h3>🚀 Projects</h3>
            <p>Check out my latest work</p>
          </div>
          <div class="feature">
            <h3>📝 Blog</h3>
            <p>Thoughts on development</p>
          </div>
          <div class="feature">
            <h3>💻 Skills</h3>
            <p>TypeScript & Modern Web</p>
          </div>
        </div>
      </section>
      
      <hello-world name="Malene"></hello-world>
    </div>
  `.toString()
}