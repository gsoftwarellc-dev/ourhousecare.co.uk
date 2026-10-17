import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { AnimatePresence, motion } from 'motion/react'
import { pace } from '@/data/content'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/Section'
import { TextLink } from '@/components/ui/Button'

export function PaceSection({ showLink = true }: { showLink?: boolean }) {
  const [active, setActive] = useState<string>(pace[0].letter)
  const current = pace.find((p) => p.letter === active) ?? pace[0]

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="rounded-[2rem] bg-plum-950 px-6 py-14 sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                light
                eyebrow="Our model of care"
                title={
                  <>
                    The PACE model, at the heart of everyday care
                  </>
                }
                description={
                  <p>
                    Developed by Dr Dan Hughes as part of Dyadic Developmental Psychotherapy (DDP), PACE helps adults
                    connect meaningfully with children who have experienced trauma. Every member of our team is trained
                    in it, and it shapes how we respond to behaviour, structure routines and build relationships.
                  </p>
                }
              />
              {showLink && (
                <Reveal delay={0.1} className="mt-8">
                  <TextLink to="/our-approach" className="text-white underline underline-offset-4 hover:text-white">
                    Explore our therapeutic approach
                  </TextLink>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.1} className="lg:col-span-7">
              <Tabs.Root value={active} onValueChange={setActive}>
                <Tabs.List aria-label="The four elements of PACE" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {pace.map((p) => (
                    <Tabs.Trigger
                      key={p.letter}
                      value={p.letter}
                      className={cn(
                        'rounded-3xl border p-5 text-left transition-colors focus-visible:outline-gold-300',
                        active === p.letter
                          ? 'border-white bg-white text-black'
                          : 'border-white/30 text-white hover:border-white/70',
                      )}
                    >
                      <span
                        className={cn(
                          'block text-5xl font-bold leading-none tracking-tight sm:text-6xl',
                          active === p.letter ? 'text-plum-800' : 'text-white',
                        )}
                      >
                        {p.letter}
                      </span>
                      <span className="mt-4 block text-[0.95rem] font-semibold">{p.word}</span>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                <div className="mt-4 min-h-[13rem] rounded-3xl border border-white/30 p-6 sm:min-h-[11rem] sm:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.letter}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {pace.map((p) => (
                        <Tabs.Content key={p.letter} value={p.letter} className="focus-visible:outline-gold-300">
                          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white">
                            {p.word}
                          </p>
                          <p className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">{p.short}</p>
                          <p className="mt-3 text-[0.98rem] leading-7 text-white">{p.detail}</p>
                        </Tabs.Content>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Tabs.Root>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
