import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

base: "ellty-frontend-assignment"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
