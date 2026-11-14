import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@lucide/vue')) {
              return 'vendor-icons'
            }
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vendor-vue'
            }
            return 'vendor-core'
          }
        },
      },
    },
  },
})
