import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lista de todas as imagens de public/images, para a tela de entrada baixar tudo antes de abrir o site.
// Vira o módulo "virtual:site-images" (um array de caminhos, ex.: '/images/design/sinfo-inicio.webp').
function siteImages() {
  const id = 'virtual:site-images'
  const root = join(process.cwd(), 'public')
  const walk = (dir) =>
    readdirSync(dir).flatMap((name) => {
      const path = join(dir, name)
      return statSync(path).isDirectory() ? walk(path) : [path]
    })
  return {
    name: 'site-images',
    resolveId: (source) => (source === id ? `\0${id}` : null),
    load(source) {
      if (source !== `\0${id}`) return null
      const files = walk(join(root, 'images'))
        .filter((f) => /\.(webp|png|jpe?g|svg|gif|avif)$/i.test(f) && !/og\.jpg$/.test(f))
        .map((f) => `/${relative(root, f).split('\\').join('/')}`)
      return `export default ${JSON.stringify(files)}`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteImages()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // React em um arquivo separado: muda pouco, então fica em cache entre deploys.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
