import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import litPlugin from '@lit-labs/eleventy-plugin-lit'

import 'tsx/esm'
import { pathToFileURL } from 'url'
import { resolve } from 'path'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      build: {
        lib: {
          entry: resolve(process.cwd(), 'src/components/index.js'),
          formats: ['es'],
          fileName: () => 'js/components.js'
        },
        outDir: resolve(process.cwd(), '_site'),
        emptyOutDir: false,
        rollupOptions: {
          external: (id) => {
            if (id.endsWith('.svg')) return true
            return false
          }
        }
      },
      server: {
        fs: { allow: [process.cwd()] }
      },
      assetsInclude: ['**/*.svg']
    },
    inject: false
  })

  eleventyConfig.addTemplateFormats('11ty.tsx')

  eleventyConfig.addExtension('11ty.tsx', {
    key: '11ty.js',
    outputFileExtension: 'html',
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
          console.warn(e.message)
        }

        // Fallback: coerce to string
        return String(result ?? '')
      }
    }
  })
  eleventyConfig.addDataExtension('ts', {
    parser: async ( contents, filePath ) => {
      const mod = await import(pathToFileURL(filePath).href)
      return mod.default ?? mod
    },
    read: false
  })

  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: ['./ssr/src/components/index.js']
  })
  eleventyConfig.addPassthroughCopy('src/pages/css')
  eleventyConfig.addPassthroughCopy('src/pages/files')
  //eleventyConfig.addPassthroughCopy('node_modules/lit')
  eleventyConfig.addPassthroughCopy('node_modules/@lit-labs/ssr-client')
  eleventyConfig.addPassthroughCopy('node_modules/@webcomponents/template-shadowroot')
  eleventyConfig.addWatchTarget('src/components')

  // add data entry covering blog entries
  eleventyConfig.addCollection('posts', function (collectionApi) {
    // Also accepts an array of globs!
    return collectionApi.getFilteredByGlob(['src/pages/posts/*.md']).map(post => {
      const postData = post.data
      return {
        title: postData.title || '[posts] Error: Post does not contain title attribute',
        url: post.url || '[posts] Error: Post does not contain url attribute',
        author: postData.author || '[posts] Error: Post does not contain author attribute',
        tags: postData.tags || [],
        date: postData.date || null,
        language: postData.language || '',
        description: postData.description || '[posts] Error: Post does not contain summary attribute',
        highlight: postData.highlight || null
      }
    })
  })
  return {
    dir:
      {
        input: 'src/pages',
        data: '_data',
        includes: '_includes',
        output: '_site'
      },
    templateFormats: ['11ty.tsx', 'html', 'md']
  }
}
