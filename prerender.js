import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
  
  const serverEntryPath = toAbsolute('dist/server/entry-server.js')
  const { render } = await import(`file://${serverEntryPath}`)

  const routesToPrerender = ['/']

  for (const url of routesToPrerender) {
    const { html: appHtml } = await render(url)
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist/client${url === '/' ? '/index.html' : `${url}.html`}`
    
    const dirName = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true })
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log(`Prerendered: ${filePath}`)
  }
}

prerender().catch(console.error)
