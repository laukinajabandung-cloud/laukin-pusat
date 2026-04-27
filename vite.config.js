import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'nama-repository-umi' dengan nama kodingan Umi di GitHub (misal: 'laukinajah')
export default defineConfig({
  plugins: [react()],
  base: './', 
})