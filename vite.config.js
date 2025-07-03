import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SouChat/', // <- exatamente o nome do seu repositório
  plugins: [react()],
})

