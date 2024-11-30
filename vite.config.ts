import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/lumber_camp',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components' : fileURLToPath(new URL('./src/components', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@blocks': fileURLToPath(new URL('./src/components/blocks', import.meta.url)),
      '@elements': fileURLToPath(new URL('./src/components/elements', import.meta.url)),
      '@modifiers': fileURLToPath(new URL('./src/components/modifiers', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
  }
})
