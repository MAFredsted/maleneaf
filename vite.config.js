import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(process.cwd(), 'src/components/index.js'),
      formats: ['es'],
      fileName: () => 'js/components.js'
    },
    outDir: resolve(process.cwd(), '_site'),
    emptyOutDir: false,
    rollupOptions: {
      // only externalize assets like svg; DO NOT externalize 'lit'
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
})
