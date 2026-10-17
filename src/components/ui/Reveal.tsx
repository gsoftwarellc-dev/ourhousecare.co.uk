import type { ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'section' | 'article'
}

export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Component>
  )
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export function Stagger({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
}) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
    >
      {children}
    </Component>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Component = motion[as]
  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  )
}
