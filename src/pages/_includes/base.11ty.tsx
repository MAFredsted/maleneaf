import { html } from 'lit/static-html.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import header from './header.11ty.js'
import type { MainPage } from '../../../types/eleventy.js'


export default (data: MainPage ) => {
  const content = data.content || ""
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
       <script type="module" src="/js/components.js"></script>
      <link rel="stylesheet" href="/css/maleneaf.css">
      <link rel="icon" type="image/x-icon" href="/files/favicon.ico">
    </head>
    <body>
      ${header(data)}
      ${unsafeHTML(content)}
    </body>
    </html>
  `
}