import "tsx/esm"

export default function (eleventyConfig) {
  // Add support for TSX files with lit-html
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function (inputContent, inputPath) {
      return async function (data) {
        const module = await import(inputPath)
        
        const component = module.default
      
        // If it's a function, call it with data
        if (typeof component === 'function') {
          return component(data)
        }
        

        
        return inputContent
      }
    },
  })

  // Copy static assets
  eleventyConfig.addPassthroughCopy('src/styles')
  eleventyConfig.addPassthroughCopy('src/components')
  
  // Watch for changes
  eleventyConfig.addWatchTarget('src/components/')
  eleventyConfig.addWatchTarget('src/styles/')

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: '_includes',
      data: '_data'
    }
  }
}