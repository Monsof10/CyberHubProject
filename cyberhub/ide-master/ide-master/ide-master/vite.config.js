import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/run': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ['monaco-editor']
  },
  resolve: {
    alias: {
      'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api.js'
    }
  },
  esbuild: {
    sourcemap: false
  }
});
