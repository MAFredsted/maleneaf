import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../_site',
    rollupOptions: {
      input: {
        main: 'src/scripts/main.ts'
      }
    }
  },
  server: {
    port: 3000
  },
  esbuild: {
    target: 'es2020'
  }
})