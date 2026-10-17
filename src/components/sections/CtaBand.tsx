import type { ReactNode } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow } from '@/components/ui/Section'

export function CtaBand({
  eyebrow = 'Referrals & enquiries',
  title = 'Looking for the right home for a young person?',
  description = 'Our Registered Manager and Responsible Individual review every referral carefully, so each young person is matched to a home where their needs can be safely and positively met.',
  primary = { label: 'Make a referral', to: '/referrals' },
  secondary = { label: 'Contact our team', to: '/contact' },
  children,
}: {
  eyebrow?: string
  title?: string
  description?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
  children?: ReactNode
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="rounded-[2rem] bg-plum-900 px-6 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-7 text-white sm:text-lg sm:leading-8">{description}</p>
            {children}
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to={primary.to} variant="gold" size="lg" arrow>
                {primary.label}
              </ButtonLink>
              <ButtonLink to={secondary.to} variant="outline-light" size="lg">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
