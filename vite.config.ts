import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es'],
      fileName: () => 'js/components.js'
    },

    outDir: '_site',
    emptyOutDir: false,
    rollupOptions: {
      external: [/\.svg$/]
    },
  },
  assetsInclude: ['**/*.svg']
})