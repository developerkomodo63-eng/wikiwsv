import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function markdownLoader() {
  return {
    name: 'markdown-loader',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.md')) {
        return {
          code: `export default ${JSON.stringify(code)}`,
          map: null,
        }
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [react(), markdownLoader()],
})
