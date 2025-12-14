import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import litPlugin from '@lit-labs/eleventy-plugin-lit'

import "tsx/esm"
import { render } from '@lit-labs/ssr'
import { pathToFileURL } from 'url'
import { resolve } from 'path'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      build: {
        lib: {
          entry: resolve(process.cwd(), 'src/components/index.ts'),
          formats: ['es'],
          fileName: () => 'js/components.js'
        },
        outDir: resolve(process.cwd(), '_site'),
        emptyOutDir: false,
      },
      server: {
        fs: { allow: [process.cwd()] }
      }
    }
  })
  eleventyConfig.addTemplateFormats('11ty.tsx')

  eleventyConfig.addExtension('11ty.tsx', {
    key: "11ty.js",
    outputFileExtension: "html",
    compile: async (_, inputPath) => {
      return async (data = {}) => {
        const mod = await import(pathToFileURL(inputPath).href)
        const exported = mod.default ?? mod

        // Call function exports or use the export value directly
        let result
        if (typeof exported === 'function') {
          result = await exported(data)
        } else {
          result = exported
        }

        // If it's already a string, return
        if (typeof result === 'string') return result

        // If it's a Lit TemplateResult, serialize with @lit-labs/ssr
        try {
          const ssr = await import('@lit-labs/ssr')
          if (typeof ssr.renderToString === 'function') {
            return await ssr.renderToString(result)
          }
          if (typeof ssr.render === 'function') {
            let out = ''
            for await (const chunk of ssr.render(result)) out += chunk
            return out
          }
        } catch (e) {
          // fall through to fallback
        }

        // Fallback: coerce to string
        return String(result ?? '')
      }
    }
  })
  eleventyConfig.addDataExtension("ts", {
    parser: async ( contents, filePath ) => {
      const mod = await import(pathToFileURL(filePath).href)
      return mod.default ?? mod
    },
    read: false
  })

  eleventyConfig.addPlugin(litPlugin, {
    componentModules: ["./_site/js/components.js"],
    mode: 'vm'
  })
  eleventyConfig.addPassthroughCopy('src/pages/css')
  eleventyConfig.addPassthroughCopy('src/pages/files')

  return {
    dir:
      {
        input: "src/pages",
        data: "_data",
        includes: "_includes",
        output: "_site"
      },
      templateFormats: ["11ty.tsx", "html", "md"]
  }
}