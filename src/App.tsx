import { useEffect } from 'react'
import { Toaster } from 'sonner'
import './App.css'
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

    ;(window as unknown as Record<string, unknown>).lenis = lenis

    let raf: number
    const loop = (time: number) => {
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

