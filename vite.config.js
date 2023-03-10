import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',
  root: './static/src',

  server: {
    origin: 'http://localhost:5173',
  }
})
