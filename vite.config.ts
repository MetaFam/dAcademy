import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import richSVG from 'vite-plugin-react-rich-svg'

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    richSVG(),
  ],
})
