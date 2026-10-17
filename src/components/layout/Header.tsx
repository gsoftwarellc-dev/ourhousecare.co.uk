import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { mainNav, type NavItem, type NavLinkItem } from '@/config/navigation'
import { phoneHref, site } from '@/config/site'
import { cn } from '@/lib/cn'
import { ButtonLink } from '@/components/ui/Button'
import { Logo } from './Logo'

function UtilityBar() {
  return (
    <div className="hidden bg-plum-950 text-[0.82rem] text-white lg:block">
      <div className="container-page flex h-10 items-center justify-between gap-6">
        <p>
          Ofsted-registered children's home in {site.homeLocation.split(',')[0]} · Ages {site.ages.replace(' to ', '–')}
        </p>
        <div className="flex items-center gap-5">
          {site.phone && (
            <a href={phoneHref(site.phone)} className="hover:underline">
              {site.phone}
            </a>
          )}
          <a href={`mailto:${site.email}`} className="hover:underline">
            {site.email}
          </a>
          <span aria-hidden className="h-4 w-px bg-white/40" />
          <span>
            Child in immediate danger? Call <strong className="font-semibold text-white">999</strong>
          </span>
        </div>
      </div>
    </div>
  )
}

const navLinkClass = (active: boolean) =>
  cn(
    'relative inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-full px-2.5 text-[0.9rem] font-medium transition-colors xl:px-3.5 xl:text-[0.94rem]',
    active ? 'text-plum-800' : 'text-ink hover:bg-plum-50 hover:text-plum-800',
  )

function ActiveDot({ show }: { show: boolean }) {
  return show ? (
    <motion.span
      layoutId="nav-active"
      aria-hidden
      className="absolute inset-x-2.5 -bottom-0.5 xl:inset-x-3.5 h-0.5 rounded-full bg-plum-700"
    />
  ) : null
}

function NavDropdown({ item }: { item: Extract<NavItem, { children: NavLinkItem[] }> }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const { pathname } = useLocation()
  const active = item.children.some((c) => pathname.startsWith(c.href))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return
        window.clearTimeout(closeTimer.current)
        setOpen(true)
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== 'mouse') return
        closeTimer.current = window.setTimeout(() => setOpen(false), 140)
      }}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={navLinkClass(active)}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn('size-4 opacity-60 transition-transform duration-300', open && 'rotate-180')}
        />
        <ActiveDot show={active} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3"
          >
            <ul className="rounded-2xl border border-line bg-white p-2 shadow-lift">
              {item.children.map((child) => (
                <li key={child.href}>
                  <NavLink
                    to={child.href}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-3 py-2.5 text-[0.95rem] font-medium text-ink transition-colors',
                        isActive ? 'bg-plum-50 text-plum-800' : 'hover:bg-plum-50',
                      )
                    }
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-plum-800 transition-colors hover:bg-plum-50 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              >
                <div className="flex h-20 items-center justify-between border-b border-line px-5">
                  <Logo className="h-12" />
                  <Dialog.Title className="sr-only">Site menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-plum-800 hover:bg-plum-50"
                      aria-label="Close menu"
                    >
                      <X className="size-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-5">
                  <ul className="space-y-5">
                    {mainNav.map((item) =>
                      item.children ? (
                        <li key={item.label}>
                          <p className="px-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-700">
                            {item.label}
                          </p>
                          <ul className="mt-1.5 space-y-0.5">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <MobileLink item={child} />
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : null,
                    )}
                    <li>
                      <p className="px-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-plum-700">
                        More
                      </p>
                      <ul className="mt-1.5 space-y-0.5">
                        {mainNav
                          .filter((item): item is NavLinkItem & { children?: undefined } => !item.children)
                          .map((item) => (
                            <li key={item.href}>
                              <MobileLink item={item} />
                            </li>
                          ))}
                      </ul>
                    </li>
                  </ul>
                </nav>

                <div className="space-y-2.5 border-t border-line p-4">
                  <ButtonLink to="/referrals" arrow className="w-full">
                    Make a referral
                  </ButtonLink>
                  <ButtonLink to={`mailto:${site.email}`} variant="outline" className="w-full">
                    Email us
                  </ButtonLink>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function MobileLink({ item }: { item: NavLinkItem }) {
  return (
    <NavLink
      to={item.href}
      end
      className={({ isActive }) =>
        cn(
          'block rounded-2xl px-3 py-2.5 text-[1rem] font-medium transition-colors',
          isActive ? 'bg-plum-50 text-plum-800' : 'text-ink hover:bg-plum-50/70',
        )
      }
    >
      {item.label}
    </NavLink>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <UtilityBar />
      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300',
          scrolled
            ? 'border-line bg-white'
            : 'border-transparent bg-white',
        )}
      >
        <div className="container-page flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.25rem] xl:gap-6">
          <Logo className="h-12 sm:h-14 xl:h-16" />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <NavDropdown item={item} />
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink to={item.href} end className={({ isActive }) => navLinkClass(isActive)}>
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <ActiveDot show={isActive} />
                        </>
                      )}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink to="/referrals" size="sm" arrow className="hidden h-11 px-5 sm:inline-flex lg:px-4 xl:px-5">
              Make a referral
            </ButtonLink>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}
