import { referralSteps } from '@/data/content'
import { cn } from '@/lib/cn'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'

export function ReferralSteps({ variant = 'vertical' }: { variant?: 'vertical' | 'horizontal' }) {
  if (variant === 'horizontal') {
    return (
      <Stagger as="ol" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {referralSteps.map((step, i) => (
          <StaggerItem
            key={step.title}
            as="li"
            className="rounded-3xl border border-line bg-white p-7"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-plum-700 text-base font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2.5 text-[0.95rem] leading-7 text-ink-soft">{step.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    )
  }

  return (
    <Stagger as="ol" className="relative">
      {referralSteps.map((step, i) => {
        const last = i === referralSteps.length - 1
        return (
          <StaggerItem key={step.title} as="li" className={cn('relative flex gap-5', !last && 'pb-9')}>
            {!last && (
              <span
                aria-hidden
                className="absolute left-[1.25rem] top-12 h-[calc(100%-3rem)] w-px bg-plum-200"
              />
            )}
            <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-plum-700 text-[0.95rem] font-bold text-white">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-7 text-ink-soft">{step.text}</p>
            </div>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
