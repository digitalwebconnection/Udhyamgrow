import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

async function createServer() {
  const app = express()

  let vite
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base
    })
    app.use(vite.middlewares)
  } else {
    app.use(base, express.static(path.resolve(__dirname, 'dist/client'), {
      index: false,
    }))
  }

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, '')

      let template
      let render

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        // Using file:// URL import for cross-platform ES modules file paths in production
        const serverEntryPath = path.resolve(__dirname, 'dist/server/entry-server.js')
        render = (await import(`file://${serverEntryPath}`)).render
      }

      const { html: appHtml } = await render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e)
      }
      console.error(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app }
}

createServer().then(({ app }) =>
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  })
)
