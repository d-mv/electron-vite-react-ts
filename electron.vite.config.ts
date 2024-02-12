import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/renderer/src/shared'),
        '@views': resolve('src/renderer/src/views'),
        '@components': resolve('src/renderer/src/shared/components'),
        '@utils': resolve('src/renderer/src/shared/utils'),
        '@store': resolve('src/renderer/src/shared/store')
      }
    },
    plugins: [react()]
  }
})
