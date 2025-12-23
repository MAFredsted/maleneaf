import { html } from 'lit/static-html.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import header from './header.11ty.js'
import type { MainPage } from '../../../types/eleventy.js'

export default (data: MainPage ) => {
  const content = data.content || ''
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
       <link rel="stylesheet" href="/css/maleneaf.css">
       <link rel="icon" type="image/x-icon" href="/files/favicon.ico">
       
       <link rel="modulepreload" href="/node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js">
      <style>
        body[dsd-pending] {
          display: none;
        }
      </style>
    </head>
    <body dsd-pending>
      <script>
        if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          // This browser has native declarative shadow DOM support, so we can
          // allow painting immediately.
          document.body.removeAttribute('dsd-pending');
        }
      </script>

      ${header(data)}
      ${unsafeHTML(content)}

      <script type="module">
        (async () => {
          // Start fetching the Lit hydration support module (note the absence
          // of "await" -- we don't want to block yet).
          const litHydrateSupportInstalled = import(
            '/node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js'
          );

          // Check if we require the declarative shadow DOM polyfill. As of
          // February 2022, Chrome and Edge have native support, but Firefox
          // and Safari don't yet.
          if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
            // Fetch the declarative shadow DOM polyfill.
            const {hydrateShadowRoots} = await import(
              '/node_modules/@webcomponents/template-shadowroot/template-shadowroot.js'
            );

            // Apply the polyfill. This is a one-shot operation, so it is important
            // it happens after all HTML has been parsed.
            hydrateShadowRoots(document.body);

            // At this point, browsers without native declarative shadow DOM
            // support can paint the initial state of your components!
            document.body.removeAttribute('dsd-pending');
          }

          // The Lit hydration support module must be installed before we can
          // load any component definitions. Wait until it's ready.
          await litHydrateSupportInstalled;

          // Load component definitions. As each component definition loads, your
          // pre-rendered components will come to life and become interactive.
          //
          // You may also prefer to bundle your components into fewer JS modules.
          // See https://lit.dev/docs/tools/production/#building-with-rollup for
          // more details.
          import('/js/components.js');
        })();
      </script>
    </body>
    </html>
  `
}
