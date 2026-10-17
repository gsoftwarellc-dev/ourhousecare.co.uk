import { Link } from 'react-router'
import logo from '@/assets/logo.webp'
import logoWhite from '@/assets/logo-white.webp'
import { cn } from '@/lib/cn'

export function Logo({ className, variant = 'color' }: { className?: string; variant?: 'color' | 'white' }) {
  return (
    <Link to="/" aria-label="Our House Care Group: home" className={cn('inline-flex shrink-0 items-center', className)}>
      <img
        src={variant === 'white' ? logoWhite : logo}
        alt="Our House Care Group Ltd: supporting children today for brighter tomorrows"
        width={709}
        height={271}
        className="h-full w-auto"
      />
    </Link>
  )
}
