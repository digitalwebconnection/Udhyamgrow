import { useEffect } from 'react'
import { Toaster } from 'sonner'
import './App.css'
import './index.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { HomePage } from './sections/index.js'
import { CookieConsent } from './components/CookieConsent'
import { WhatsAppBot } from './components/WhatsAppBot'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      infinite: false,
    })

    window.lenis = lenis

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <HomePage />
      <CookieConsent />
      <WhatsAppBot />
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
