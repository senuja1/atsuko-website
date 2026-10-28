import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Disable source maps in production to prevent source code and path disclosure
    sourcemap: false,
    // Ensure clean chunking
    chunkSizeWarningLimit: 1000,
  },
})
