import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target:
          mode === 'development'
            ? 'http://localhost:3000'
            : 'http://192.168.40.136',
        changeOrigin: false,
      },
    },
  },
}))
