import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const port = Number(env.VITE_PORT) || 3000

  console.log(`Starting development server on port ${port}...`)

  return {
    plugins: [react()],
    server: {
      port,
    },
  }
})
