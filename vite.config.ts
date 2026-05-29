import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the root of the custom domain (likhit-ajeesh.com),
// so the base path is always '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
