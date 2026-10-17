import { ArrowRight } from 'lucide-react'
import { site } from '@/config/site'
import { img } from '@/data/content'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { PaceSection } from '@/components/sections/PaceSection'
import { CtaBand } from '@/components/sections/CtaBand'

const dailyLife = [
  { text: 'Emotionally attuned key working sessions' },
  { text: 'Predictable routines that foster a sense of safety and control' },
  { text: 'Staff modelling regulation, reflective listening and respectful boundaries' },
  { text: 'Positive behaviour support rooted in connection, not control' },
  { text: 'A homely, low-stress environment that promotes relational repair' },
]

const journey = [
  {
    title: 'From survival',
    text: 'We recognise trauma responses and the unmet needs behind behaviour, and respond with calm, consistent care.',
  },
  {
    title: 'To emotional safety',
    text: 'Through attuned relationships and predictable routines, young people begin to trust the adults around them.',
  },
  {
    title: 'To healing & growth',
    text: 'With safety established, young people can process past experiences and develop healthy coping strategies.',
  },
]

const specialists = [
  { title: 'CAMHS & LAC psychology', text: 'CAMHS and Looked After Children psychology services.' },
  {
    title: 'Independent therapists',
    text: 'Therapists commissioned via the placing authority where additional input is required.',
  },
  {
    title: 'Specialist professionals',
    text: 'Trauma, attachment or neurodevelopmental specialists, including assessments where appropriate.',
  },
  {
    title: 'Counselling & play therapy',
    text: 'Counselling or play therapy providers, where this is right for the young person.',
  },
]

export default function OurApproach() {
  return (
    <>
      <Seo
        title="Our approach"
        description="Bridgeway Home's model of care: the PACE model, trauma-informed practice, non-punitive behaviour support and therapeutic caregiving embedded in everyday life."
      />
      <PageHero
        breadcrumb="Our approach"
        eyebrow="Therapeutic support & model of care"
        title="Therapeutic, trauma-informed care, woven into everyday life"
        description={`${site.homeName} is a therapeutically informed children’s home where every aspect of care is grounded in a deep understanding of trauma, attachment and child development.`}
        image={img('boy-reading')}
        imageAlt="A young boy laughing joyfully while reading outdoors"
        actions={
          <>
            <ButtonLink to="/referrals" arrow>
              Make a referral
            </ButtonLink>
            <ButtonLink to="/care-and-support" variant="outline">
              Care & support
            </ButtonLink>
          </>
        }
      />

      <PaceSection showLink={false} />

      {/* Behaviour support */}
      <Section id="behaviour">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Behaviour support"
                title="We understand that all behaviour is a form of communication"
                description={
                  <div className="prose-care">
                    <p>
                      Many of the young people we care for have experienced trauma, rejection or instability, which may
                      be expressed through challenging, withdrawn or risk-related behaviours.
                    </p>
                    <p>
                      Our approach is not to punish or control, but to understand, respond and guide, through a
                      non-punitive, relationship-based model grounded in consistency, connection and emotional
                      attunement.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <Reveal>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold">Our staff are trained to</h3>
                  <CheckList
                    className="mt-5"
                    items={[
                      'Use de-escalation techniques and emotional coaching',
                      'Recognise trauma responses and unmet needs behind behaviour',
                      'Provide restorative and reparative responses after incidents',
                      'Model calm, respectful communication at all times',
                    ]}
                  />
                </Card>
              </Reveal>
              <Reveal delay={0.08}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold">Each young person has</h3>
                  <CheckList
                    className="mt-5"
                    items={[
                      'An individual Behaviour Support Plan (BSP)',
                      'An individual Personal Evacuation Plan (PEP)',
                      'A Positive Handling Plan (if relevant)',
                      'Behaviour & Risk Management assessments',
                    ]}
                  />
                </Card>
              </Reveal>
              <Reveal delay={0.12} className="sm:col-span-2">
                <div className="rounded-3xl border border-gold-200 bg-gold-50 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Physical intervention: only ever a last resort</h3>
                      <p className="mt-2 text-[0.95rem] leading-7 text-muted">
                        Physical intervention is used only when a young person or others are at immediate risk of harm.
                        We use CPI Safety Intervention, in line with Regulation 20 and Ofsted guidance. Every
                        intervention is recorded, reviewed and shared with the placing authority.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-14 max-w-3xl rounded-3xl bg-plum-50 p-6 text-center text-[1.02rem] leading-8 text-plum-900 sm:p-8">
              Young people are involved in setting their own goals, routines and boundaries wherever possible, with
              regular review in key work sessions and team meetings.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Daily life */}
      <Section tone="tint">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Therapeutic caregiving in daily life"
              title="Therapy isn’t a session. It’s how every day feels."
              description={`While we are not a clinical therapeutic placement, ${site.homeName} embeds therapeutic caregiving throughout every aspect of day-to-day life.`}
            />
            <Stagger as="ul" className="mt-10 space-y-3">
              {dailyLife.map(({ text }) => (
                <StaggerItem
                  as="li"
                  key={text}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4"
                >
                  <span className="text-[0.96rem] font-medium text-ink-soft">{text}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <div className="rounded-[2rem] border border-line bg-white p-7 sm:p-10">
                <Eyebrow>Our goal</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold">A journey from survival to safety and growth</h3>
                <ol className="mt-9 space-y-4">
                  {journey.map((j, i) => (
                    <li key={j.title}>
                      <div className="flex gap-5 rounded-2xl bg-plum-50 p-5">
                        <div>
                          <p className="font-semibold text-ink">{j.title}</p>
                          <p className="mt-1 text-[0.93rem] leading-6 text-muted">{j.text}</p>
                        </div>
                      </div>
                      {i < journey.length - 1 && (
                        <div aria-hidden className="flex justify-center py-1 text-plum-700">
                          <ArrowRight className="size-5 rotate-90" />
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Specialist services */}
      <Section id="specialist">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Access to specialist services"
            title="Working in partnership when more support is needed"
            description="Therapeutic plans are developed in collaboration with professionals and integrated into placement planning and day-to-day care."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialists.map((s) => (
              <StaggerItem key={s.title} className="rounded-3xl border border-line bg-white p-7 text-center">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-7 text-muted">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-2xl font-semibold">A reflective and skilled team</h3>
                <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                  Our team receives ongoing training in therapeutic caregiving, trauma-informed practice and child
                  development. Reflective practice is embedded in supervision, team meetings and incident debriefs, so
                  staff continually learn, adapt and grow in their therapeutic approach.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-plum-900 p-6 text-white sm:p-8">
                <h3 className="text-2xl font-semibold text-white">Future therapeutic development</h3>
                <p className="mt-4 text-[0.98rem] leading-8 text-white">
                  As {site.homeName} grows under {site.legalName}, we are committed to strengthening our therapeutic
                  model through in-house or partnered clinical professionals, such as a therapist or psychiatrist. This
                  will support the team through reflective consultation, contribute to staff development and offer
                  therapeutic sessions to young people where appropriate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
