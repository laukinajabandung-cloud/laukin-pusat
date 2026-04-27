import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Ini sangat penting supaya GitHub bisa baca file di dalam folder
})