import { html } from 'lit/static-html.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'


export default (data: any) => {
  const content = data.content || ""
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
       <script type="module" src="/js/components.js"></script>
    </head>
    <body>
      ${unsafeHTML(content)}
    </body>
    </html>
  `
}