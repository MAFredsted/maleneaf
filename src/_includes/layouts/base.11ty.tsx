interface LayoutData {
  title: string;
  description: string;
  content: string;
}

import { html } from 'lit'

export default function({ title, description, content }: LayoutData) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <meta name="description" content="${description}">
      <link rel="stylesheet" href="/styles/main.css">
    </head>
    <body>
      <header class="site-header">
        <nav>
          <div class="nav-brand">
            <a href="/">Malene AF</a>
          </div>
        </nav>
      </header>
      
      <main class="main-content">
        ${content}
      </main>

      <footer class="site-footer">
        <p>&copy; ${new Date().getFullYear()} Malene Andrä-Fredsted</p>
      </footer>
      
      <script type="module" src="/scripts/main.js"></script>
    </body>
    </html>
  `.toString()
}