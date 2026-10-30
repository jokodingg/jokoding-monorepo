import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['localhost', '.ngrok.io', '.ngrok-free.app', 'limberly-supercandid-caprice.ngrok-free.dev'],
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true
    }
  }
})