import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [react(),
  tailwindcss()],
  base: 'https://github.com/likhithsabbarapu/https---github.com-likhithsabbarapu-myportfolio.git',
})
