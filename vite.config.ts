import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ⚡ Make sure repo name yaha match kare
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/typescript-react-app/', // Repo name yahi hai
})
