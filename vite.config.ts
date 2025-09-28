import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/BrickCustomizer/",
  build: {
    chunkSizeWarningLimit: 2000, // 2 MB limit instead of 500 KB
  },
})

