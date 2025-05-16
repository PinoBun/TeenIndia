// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TeenIndia/',  // ← put your repo name here (case-sensitive)
  plugins: [react()],
})
