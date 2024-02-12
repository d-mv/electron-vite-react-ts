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
        '@shared': resolve('src/renderer/src/shared/*'),
        '@views': resolve('src/renderer/src/views/*'),
        '@components': resolve('src/renderer/src/components/*'),
        '@utils': resolve('src/renderer/src/utils/*'),
        '@store': resolve('src/renderer/src/store/*')
      }
    },
    plugins: [react()]
  }
})
