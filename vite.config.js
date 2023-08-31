import { resolve, win32, posix } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  root: './',
  build: {  
    build:'dist',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 730, // vuetify
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // nested: resolve(__dirname, 'sarnento/index.html'),
      },
      
    },
  },
})