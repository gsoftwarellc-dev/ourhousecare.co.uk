import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { AnimatePresence, motion } from 'motion/react'
import { site } from '@/config/site'
import { img } from '@/data/content'
import {
  absenceCategories,
  monitoring,
  policies,
  safeguardingConcerns,
  safeguardingMeasures,
} from '@/data/safeguarding'
import { cn } from '@/lib/cn'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'

const toneStyles = {
  gold: { dot: 'bg-gold-500', chip: 'bg-gold-50 text-gold-800 ring-gold-200', active: 'border-gold-400' },
  orange: { dot: 'bg-orange-500', chip: 'bg-orange-50 text-orange-800 ring-orange-200', active: 'border-orange-400' },
  red: { dot: 'bg-red-500', chip: 'bg-red-50 text-red-800 ring-red-200', active: 'border-red-400' },
}

function AbsenceTabs() {
  const [value, setValue] = useState(absenceCategories[0].id)
  return (
    <Tabs.Root value={value} onValueChange={setValue}>
      <Tabs.List aria-label="Categories of absence" className="grid gap-3 sm:grid-cols-3">
        {absenceCategories.map((c) => {
          const t = toneStyles[c.tone]
          const active = value === c.id
          return (
            <Tabs.Trigger
              key={c.id}
              value={c.id}
              className={cn(
                'rounded-2xl border-2 bg-white p-5 text-left transition-all duration-300',
                active ? cn(t.active, 'shadow-lift') : 'border-line hover:border-plum-200',
              )}
            >
              <span className={cn('inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ring-1 ring-inset', t.chip)}>
                <span aria-hidden className={cn('size-1.5 rounded-full', t.dot)} />
                {c.level}
              </span>
              <span className="mt-3 block text-lg font-semibold text-ink">{c.name}</span>
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
      <div className="mt-4 rounded-3xl border border-line bg-white p-6 sm:p-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {absenceCategories.map((c) => (
              <Tabs.Content key={c.id} value={c.id}>
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-plum-600">Definition</p>
                    <p className="mt-3 text-lg font-medium leading-8 text-ink">{c.description}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-plum-600">Usual action</p>
                    <ol className="mt-4 space-y-3">
                      {c.actions.map((a, i) => (
                        <li key={a} className="flex gap-3.5">
                          <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-plum-100 text-[0.75rem] font-bold text-plum-800">
                            {i + 1}
                          </span>
                          <span className="text-[0.95rem] leading-6 text-ink-soft">{a}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Tabs.Root>
  )
}

export default function Safeguarding() {
  return (
    <>
      <Seo
        title="Safeguarding"
        description="Safeguarding at Bridgeway Home: a zero-tolerance approach to harm, robust child protection policies, our missing-from-care protocol, fire safety, health and safety and independent monitoring."
      />
      <PageHero
        breadcrumb="Safeguarding"
        eyebrow="Safeguarding children & young people"
        title="Safety, protection and wellbeing: our highest priority"
        description="We operate a zero-tolerance approach to abuse, harm, neglect, exploitation and discrimination. Safeguarding is embedded in every aspect of the home, from recruitment and training to daily routines and partnership working."
        image={img('hands-reach')}
        imageAlt="Two hands reaching towards each other in support"
        actions={
          <>
            <ButtonLink to="#worried" arrow>
              Worried about a child?
            </ButtonLink>
            <ButtonLink to="#missing" variant="outline">
              Missing-from-care protocol
            </ButtonLink>
          </>
        }
      />

      {/* Concerns & measures */}
      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Trained to recognise and respond"
                title="Every member of staff is trained to identify a wide range of concerns"
                description={`${site.homeName} follows the safeguarding procedures of the Local Safeguarding Children Partnership. All concerns are escalated in line with local and national statutory guidance, including Working Together to Safeguard Children and Keeping Children Safe in Education.`}
              />
            </div>
            <Stagger as="ul" className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {safeguardingConcerns.map((c) => (
                <StaggerItem
                  as="li"
                  key={c}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4"
                >
                  <span className="text-[0.94rem] font-medium leading-6 text-ink-soft">{c}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Key safeguarding measures"
            title="Safeguarding built into every part of the home"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {safeguardingMeasures.map((m, i) => (
              <StaggerItem key={m.title} className="rounded-3xl border border-line bg-white p-7">
                <span className="text-sm font-bold tabular-nums text-plum-700">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-7 text-muted">{m.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-xl font-semibold">Empowering young people to stay safe</h3>
                <p className="mt-3 text-[0.97rem] leading-7 text-muted">
                  We aim not only to protect young people from harm, but to help them identify unsafe situations,
                  develop protective strategies and build trust in safe adults. Young people are supported to understand
                  their rights and to feel safe raising concerns.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold">Independent voices, always available</h3>
                <p className="mt-3 text-[0.97rem] leading-7 text-muted">
                  Access to independent advocacy is offered, and young people are given information about how to report
                  concerns both inside and outside the home, including to Ofsted, the Children’s Commissioner and
                  Childline.
                </p>
                <div className="mt-5">
                  <ButtonLink to="/young-people#helplines" variant="outline" size="sm" arrow>
                    Helplines for young people
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Missing from care */}
      <Section id="missing">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Missing-from-care protocol"
                title="A clear, practised response if a young person goes missing"
                description="Young people may go missing from care due to complex trauma, anxiety or external pressures such as CSE or CCE. We follow national and local protocols, in line with the Runaway and Missing from Home and Care Protocol (RMFHC) and the Local Police Joint Protocols."
              />
              <Reveal delay={0.1} className="mt-8">
                <div className="flex gap-4 rounded-2xl border border-plum-100 bg-plum-50 p-5">
                  <p className="text-[0.93rem] leading-6 text-plum-900">
                    Every young person has a completed <strong>Philomena Protocol</strong>, ready to be shared with the
                    police if they go missing or are absent without authorisation.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <Reveal>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">Preventative measures</h3>
                  </div>
                  <CheckList
                    className="mt-5"
                    items={[
                      'Strong, trusting relationships with staff',
                      'Individualised Missing from Care Plans',
                      'Key working on risk, peer pressure, exploitation and personal safety',
                      'Access to advocacy and emotional support',
                      'Regular liaison with the Safer Neighbourhood Team and Police Missing Coordinators',
                    ]}
                  />
                </Card>
              </Reveal>
              <Reveal delay={0.08}>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">If a young person goes missing</h3>
                  </div>
                  <ol className="mt-5 space-y-4">
                    {[
                      'Immediate action is taken in line with their care plan',
                      'The police, social worker and parents (if applicable) are informed',
                      'Staff conduct active welfare checks in the area, if safe to do so',
                      'On return, a Return Home Interview is offered via the placing authority, and the incident is debriefed',
                    ].map((text, i) => (
                      <li key={text} className="flex gap-3">
                        <span className="w-5 shrink-0 text-[0.95rem] font-bold leading-6 text-plum-700">{i + 1}.</span>
                        <span className="text-[0.95rem] leading-6 text-ink">{text}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <h3 className="text-2xl font-semibold">Categories of absence</h3>
              <p className="mt-2 max-w-3xl text-[0.98rem] leading-7 text-muted">
                Each category has a clear, agreed response. All incidents are documented, analysed for patterns and used
                to inform dynamic risk assessments and safety planning.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <AbsenceTabs />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Health & safety */}
      <Section tone="tint" id="health-and-safety">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fire precautions & health and safety"
            title="A safe, secure and legally compliant home"
            description="Robust, documented systems manage fire safety, health and safety and environmental risks. Staff receive training in these policies at induction, and young people learn the fire and emergency procedures when they move in."
          />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            <StaggerItem>
              <Card className="h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold">Fire safety</h3>
                <CheckList
                  className="mt-5"
                  items={[
                    'Mains-wired smoke and heat detectors throughout',
                    'Clearly signed emergency exits and escape routes',
                    'Emergency lighting and fire extinguishers in key areas',
                    'A centrally monitored fire alarm system',
                    'A Fire Evacuation Plan, reviewed regularly',
                    'Yearly Fire Risk Assessments by a competent person',
                    'Fire drills at least once a term and after every new admission',
                  ]}
                />
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold">Risk assessments</h3>
                <CheckList
                  className="mt-5"
                  items={[
                    'The premises and equipment',
                    'The young person and their behaviours',
                    'Activities, both on-site and off-site',
                    'Lone working and night-time supervision',
                    'Food hygiene and infection control',
                    'Electrical appliances, vehicles and substances',
                  ]}
                />
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold">First aid & emergencies</h3>
                <CheckList
                  className="mt-5"
                  items={[
                    'A trained first aider on every shift',
                    'Paediatric and adult first aid',
                    'Managing allergies, asthma, diabetes and seizures',
                    'Responding to self-harm or mental health crises',
                    'Incidents recorded and reported under RIDDOR where applicable',
                  ]}
                />
              </Card>
            </StaggerItem>
          </Stagger>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">COSHH</h3>
                </div>
                <p className="mt-4 text-[0.95rem] leading-7 text-muted">
                  We maintain a COSHH-approved list of cleaning products, each with a Material Safety Data Sheet covering
                  safe handling, storage and disposal. Hazardous substances are stored securely and out of reach, and
                  staff are trained in COSHH awareness and PPE.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">Emergency policies</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    'Fire prevention',
                    'Fire drills & outbreaks',
                    'Power failure',
                    'Security measures',
                    'Moving & handling',
                    'Infection outbreaks',
                    'Medicine hazard warnings',
                    'Evacuation of the home',
                  ].map((p) => (
                    <li key={p} className="rounded-full bg-plum-50 px-3 py-1.5 text-[0.84rem] font-medium text-plum-800">
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Policies & monitoring */}
      <Section id="policies">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Policies, monitoring & review"
              title="A comprehensive policy framework, reviewed at least annually"
              description="Our policies align with the Children’s Homes (England) Regulations 2015, the Quality Standards and all relevant legislation. They are reviewed by the Registered Manager and Responsible Individual and updated after changes in legislation, guidance or learning from incidents."
            />
            <Reveal delay={0.1} className="mt-9">
              <ul className="flex flex-wrap gap-2">
                {policies.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-plum-100 bg-white px-3.5 py-2 text-[0.86rem] font-medium text-plum-900"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-[2rem] border border-line bg-white p-7 sm:p-10">
              <Eyebrow>Monitoring systems</Eyebrow>
              <h3 className="mt-3 text-2xl font-semibold">Continuous quality assurance</h3>
              <CheckList className="mt-7" items={monitoring} />
              <p className="mt-7 rounded-2xl bg-plum-50 p-4 text-[0.92rem] leading-6 text-plum-900">
                Concerns, trends or shortfalls are promptly addressed through supervision, training and team
                reflection.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Worried */}
      <section id="worried" className="scroll-mt-28 pb-20 pt-4 sm:pb-24">
        <div className="container-page">
          <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-plum-950 p-8 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Eyebrow light>Worried about a child?</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  If a child is in immediate danger, call 999
                </h2>
                <p className="mt-5 text-[1.02rem] leading-8 text-white">
                  If you have a concern about a young person at {site.homeName}, please contact the Registered Manager
                  straight away. You can also contact any of the organisations listed here.
                </p>
                <div className="mt-8">
                  <ButtonLink to="/contact" variant="gold" arrow>
                    Contact the Registered Manager
                  </ButtonLink>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {[
                  { name: 'Emergency services', note: 'Police, fire, ambulance', phone: '999' },
                  { name: 'NSPCC Helpline', note: 'Adults worried about a child', phone: '0808 800 5000' },
                  { name: 'Childline', note: 'Free support for under-19s', phone: '0800 1111' },
                  { name: 'Ofsted whistleblowing', note: 'Concerns about a children’s home', phone: '0300 123 3155' },
                ].map((h) => (
                  <li key={h.name}>
                    <a
                      href={`tel:${h.phone.replace(/\s/g, '')}`}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-gold-300/40 hover:bg-white/[0.09]"
                    >
                      <span className="text-[0.8rem] text-white">{h.note}</span>
                      <span className="mt-1 font-semibold text-white">{h.name}</span>
                      <span className="mt-3 inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                        {h.phone}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
