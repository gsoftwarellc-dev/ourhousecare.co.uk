import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'light' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/button inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 ease-out-soft focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'bg-plum-700 text-white hover:bg-plum-800',
  gold: 'bg-gold-400 text-black hover:bg-gold-300',
  outline: 'border border-plum-300 bg-white text-plum-800 hover:border-plum-700 hover:bg-plum-50',
  ghost: 'text-plum-700 hover:bg-plum-50',
  light: 'bg-white text-black hover:bg-plum-50',
  'outline-light': 'border border-white/70 text-white hover:bg-white/10 hover:border-white',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-7 text-base',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  arrow?: boolean
  className?: string
  children: ReactNode
}

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out-soft group-hover/button:translate-x-0.5"
        />
      )}
    </>
  )
}

export function ButtonLink({
  to,
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  ...rest
}: CommonProps & { to: string } & Omit<ComponentProps<'a'>, 'href'>) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const external = /^(https?:|mailto:|tel:)/.test(to)
  if (external) {
    return (
      <a href={to} className={classes} {...rest}>
        <Content arrow={arrow}>{children}</Content>
      </a>
    )
  }
  return (
    <Link to={to} className={classes} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  type = 'button',
  ...rest
}: CommonProps & ComponentProps<'button'>) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <Content arrow={arrow}>{children}</Content>
    </button>
  )
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group/link inline-flex items-center gap-1.5 font-semibold text-plum-700 transition-colors hover:text-plum-900',
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-300 ease-out-soft group-hover/link:translate-x-1"
      />
    </Link>
  )
}
