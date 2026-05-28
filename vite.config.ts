import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages project site: set GITHUB_PAGES=true before build
// For user site (Likkiii.github.io): leave unset — base stays '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.GITHUB_PAGES === 'true' ? '/likhit-portfolio/' : '/',
})
