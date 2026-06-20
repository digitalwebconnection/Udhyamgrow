import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function prerender() {
  // Read the HTML template from the client build output directory (dist)
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  
  // Load the server entry point from dist-server
  const serverEntryPath = toAbsolute('dist-server/entry-server.js')
  const { render } = await import(`file://${serverEntryPath}`)

  const routesToPrerender = ['/']

  for (const url of routesToPrerender) {
    const { html: appHtml } = await render(url)
    const html = template.replace(`<!--app-html-->`, appHtml)

    // Write the output back to the client build output directory (dist)
    const filePath = `dist${url === '/' ? '/index.html' : `${url}.html`}`
    
    const dirName = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true })
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log(`Prerendered: ${filePath}`)
  }

  // Clean up the server build directory so it's not included in static deployments
  try {
    const serverDir = toAbsolute('dist-server')
    if (fs.existsSync(serverDir)) {
      fs.rmSync(serverDir, { recursive: true, force: true })
      console.log('Cleaned up dist-server directory.')
    }
  } catch (err) {
    console.warn('Could not clean up dist-server directory:', err.message)
  }
}

prerender().catch(console.error)
