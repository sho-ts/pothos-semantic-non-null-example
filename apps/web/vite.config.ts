import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import relay from 'vite-plugin-relay';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), relay],
})
