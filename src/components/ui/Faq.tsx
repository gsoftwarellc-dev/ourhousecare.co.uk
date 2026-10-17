import type { ReactNode } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((item, i) => (
        <Accordion.Item key={item.q} value={`item-${i}`} className="group">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[1.02rem] font-semibold text-ink transition-colors hover:text-plum-700 sm:px-8 sm:py-6">
              {item.q}
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum-700 transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-plum-700 group-data-[state=open]:text-white">
                <Plus aria-hidden className="size-4" />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-6 text-[0.97rem] leading-7 text-muted sm:px-8 sm:pb-7">{item.a}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
