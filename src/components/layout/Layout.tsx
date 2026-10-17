import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { Header } from './Header'
import { Footer } from './Footer'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    // Pages are lazy-loaded, so wait for the target element to exist.
    let tries = 0
    const id = decodeURIComponent(hash.slice(1))
    const timer = window.setInterval(() => {
      const el = document.getElementById(id)
      if (el || tries++ > 40) {
        window.clearInterval(timer)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
    return () => window.clearInterval(timer)
  }, [pathname, hash])

  return null
}

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-plum-800 text-white shadow-lift transition-colors hover:bg-plum-700 sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function PageFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-label="Loading">
      <span className="size-9 animate-spin rounded-full border-[3px] border-plum-100 border-t-plum-600" />
    </div>
  )
}

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plum-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
