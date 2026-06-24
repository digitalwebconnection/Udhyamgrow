import { useEffect, useState } from 'react'
import { Toaster } from 'sonner'
import './App.css'
import './index.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { HomePage, PrivacyPolicyPage } from './sections/index.js'
import { CookieConsent } from './components/CookieConsent'
import { WhatsAppBot } from './components/WhatsAppBot'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-gold via-gold-light to-blue-950 origin-left z-9999 shadow-md"
    />
  )
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer border border-neutral-250 group hover:border-gold transition-colors duration-300"
          aria-label="Back to top"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
            <path
              className="text-neutral-100"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              style={{ pathLength: scrollYProgress }}
              className="text-gold"
              strokeWidth="2.5"
              strokeDasharray="100, 100"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <ChevronUp className="w-5 h-5 text-blue-950 transition-colors duration-300 group-hover:text-gold" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      <ScrollProgressBar />
      {currentPath === '#privacy-policy' ? (
        <PrivacyPolicyPage />
      ) : (
        <HomePage />
      )}
      <CookieConsent />
      <WhatsAppBot />
      <BackToTop />
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
