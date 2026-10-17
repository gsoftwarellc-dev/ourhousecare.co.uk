import type { ReactNode } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Reveal } from './Reveal'

export function Section({
  children,
  className,
  id,
  tone = 'white',
}: {
  children: ReactNode
  className?: string
  id?: string
  tone?: 'white' | 'tint'
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 sm:py-24 lg:py-28',
        tone === 'tint' && 'bg-plum-50',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p
      className={cn(
        'w-fit text-[0.8rem] font-semibold uppercase tracking-[0.14em]',
        light ? 'text-white' : 'text-plum-700',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  light,
  as: Heading = 'h2',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  light?: boolean
  as?: 'h1' | 'h2' | 'h3'
}) {
  return (
    <Reveal
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <div className={cn('mb-4 flex', align === 'center' && 'justify-center')}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <Heading
        className={cn(
          'text-[2rem] font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]',
          light && 'text-white',
        )}
      >
        {title}
      </Heading>
      {description && (
        <div
          className={cn(
            'mt-5 text-base leading-7 sm:text-lg sm:leading-8',
            light ? 'text-white' : 'text-ink-soft',
          )}
        >
          {description}
        </div>
      )}
    </Reveal>
  )
}

export function CheckList({
  items,
  className,
  columns = 1,
  light,
}: {
  items: ReactNode[]
  className?: string
  columns?: 1 | 2
  light?: boolean
}) {
  return (
    <ul className={cn('grid gap-x-8 gap-y-3.5', columns === 2 && 'sm:grid-cols-2', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <Check
            aria-hidden
            className={cn('mt-0.5 size-5 shrink-0', light ? 'text-white' : 'text-plum-700')}
            strokeWidth={2.25}
          />
          <span className={cn('text-[0.97rem] leading-6', light ? 'text-white' : 'text-ink')}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Card({
  children,
  className,
  hover,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8',
        hover && 'transition-colors hover:border-plum-300',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-plum-200 bg-white px-3.5 py-1.5 text-[0.82rem] font-medium text-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}
