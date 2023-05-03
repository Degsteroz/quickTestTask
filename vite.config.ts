import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.join(__dirname, './src'),
      modules: `${path.join(__dirname, 'src/modules')}`,
      stores: `${path.resolve(__dirname, 'src/stores')}`,
      assets: `${path.resolve(__dirname, 'src/assets')}`
    },
  }
})
