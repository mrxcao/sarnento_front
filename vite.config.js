import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: 'https://btramos.com/sarnento/',
  // base: "https://btramos.com/sarnento/"
  
})
