import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { site } from '@/config/site'
import { Eyebrow } from './Section'

export function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
  return null
}

const ease = [0.22, 1, 0.36, 1] as const

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  imageAlt = '',
  actions,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  breadcrumb: string
  image?: string
  imageAlt?: string
  actions?: ReactNode
  aside?: ReactNode
}) {
  const hasMedia = Boolean(image || aside)

  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div
        className={cn(
          'container-page relative grid items-center gap-12 py-14 sm:py-16 lg:py-20',
          hasMedia && 'lg:grid-cols-12 lg:gap-16',
        )}
      >
        <motion.div
          className={cn(hasMedia ? 'lg:col-span-7' : 'max-w-4xl')}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.85rem] text-ink-soft">
              <li>
                <Link to="/" className="transition-colors hover:text-plum-700">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5 opacity-60" />
              </li>
              <li aria-current="page" className="font-medium text-plum-700">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
          {description && (
            <div className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-[1.2rem] sm:leading-9">
              {description}
            </div>
          )}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </motion.div>

        {hasMedia && (
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            {image ? (
              <div className="relative overflow-hidden rounded-[2rem] bg-plum-50 shadow-lift aspect-[4/3.2]">
                <img src={image} alt={imageAlt} className="size-full object-cover" fetchPriority="high" />
              </div>
            ) : (
              aside
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
