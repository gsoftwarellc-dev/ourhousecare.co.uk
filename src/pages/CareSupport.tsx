import { useEffect, useState } from 'react'
import { site } from '@/config/site'
import { img } from '@/data/content'
import { cn } from '@/lib/cn'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { CtaBand } from '@/components/sections/CtaBand'

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'health', label: 'Health & wellbeing' },
  { id: 'identity', label: 'Identity & culture' },
  { id: 'family', label: 'Family & contact' },
  { id: 'life-skills', label: 'Life skills' },
]

function SubNav() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-[4.75rem] z-30 border-b border-line bg-white lg:top-[5.25rem]">
      <nav aria-label="On this page" className="container-page">
        <ul className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 py-3 sm:mx-0 sm:px-0">
          {sections.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors',
                  active === id ? 'bg-plum-700 text-white' : 'text-ink-soft hover:bg-plum-50 hover:text-plum-800',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

function ListCard({ title, items, className }: { title: string; items: string[]; className?: string }) {
  return (
    <Card className={cn('h-full p-6 sm:p-7', className)}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <CheckList className="mt-5" items={items} />
    </Card>
  )
}

export default function CareSupport() {
  return (
    <>
      <Seo
        title="Care & support"
        description="How Bridgeway Home supports education, health and wellbeing, cultural and religious identity, family contact and life skills for the young person in our care."
      />
      <PageHero
        breadcrumb="Care & support"
        eyebrow="Holistic care"
        title="Support for every part of a young person’s life"
        description="From learning and health to identity, family and independence, we wrap thoughtful, personalised support around the young person in our care, in close partnership with the professionals around them."
        image={img('kids-studying')}
        imageAlt="Children concentrating together on schoolwork at a table"
      />
      <SubNav />

      {/* Education */}
      <Section id="education" className="scroll-mt-40">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Education provision"
                title="Restoring confidence and reigniting ambition"
                description={
                  <div className="prose-care">
                    <p>
                      Education is not only a right but a critical pathway to self-esteem, stability and a positive
                      future. Many young people in care have experienced disrupted education, exclusions or unmet
                      learning needs.
                    </p>
                    <p>
                      We provide personalised support to help each young person engage positively with learning, and
                      take pride in it.
                    </p>
                  </div>
                }
              />
              <Reveal delay={0.1} className="mt-9 overflow-hidden rounded-[2rem]">
                <img
                  src={img('love-to-learn')}
                  alt="A colourful ‘Love to learn’ pencil sign outside a school"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
            </div>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <StaggerItem>
                <ListCard
                  title="Access to education"
                  items={[
                    'We work with local schools, PRUs, SEN provisions and virtual schools to find the right setting',
                    'If a young person is not in education, we act immediately with the placing authority and Virtual School Head',
                    'A dedicated company vehicle supports school attendance and educational activities',
                  ]}
                />
              </StaggerItem>
              <StaggerItem>
                <ListCard
                  title="Support we provide"
                  items={[
                    'Routines that prioritise school attendance and punctuality',
                    'A designated education champion who monitors progress and liaises with school',
                    'Homework support, books, internet access and study space',
                    'Celebration of every achievement, however small',
                    'Online learning, vocational training and tutors where appropriate',
                  ]}
                />
              </StaggerItem>
              <StaggerItem>
                <ListCard
                  title="Planning & monitoring"
                  items={[
                    'An Individual Education Plan (IEP) with the school, virtual school and social worker',
                    'Progress reviewed in care planning meetings, PEPs and key working',
                    'Regular contact with teachers, SENCOs and Virtual School Heads',
                  ]}
                />
              </StaggerItem>
              <StaggerItem>
                <ListCard
                  title="Beyond the classroom"
                  items={[
                    'After-school clubs and enrichment activities',
                    'Careers advice, CV writing, college visits and life skills, especially from age 14',
                  ]}
                />
              </StaggerItem>
            </Stagger>
          </div>
          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center text-xl font-medium leading-9 text-plum-900">
              We don’t simply support education. We aim to reignite curiosity, raise aspirations and remove barriers,
              so every young person can imagine a successful future.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Health */}
      <Section id="health" tone="tint" className="scroll-mt-40">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Health & wellbeing"
              title="Emotional and physical health, cared for together"
              description="Our approach is holistic, proactive and rooted in trauma-informed practice. Health needs are assessed and planned for as part of placement planning and the Looked After Child (LAC) medical, then reviewed regularly with health professionals and placing authorities."
            />
            <Reveal delay={0.1} className="shrink-0">
              <div className="flex items-center gap-4 rounded-3xl border border-line bg-white p-5">
                <span className="text-plum-800 text-5xl font-bold tracking-[-0.04em]">7</span>
                <p className="max-w-[12rem] text-[0.9rem] font-medium leading-6 text-ink-soft">
                  days to register with a local GP, dentist and optician
                </p>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StaggerItem>
              <ListCard
                title="Primary healthcare"
                items={[
                  'Registered with a local GP, dentist and optician within 7 days',
                  'Strong relationships with local community health providers',
                  'Appointments supported by staff who know the young person',
                  'Accurate health records in line with Regulation 23',
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <ListCard
                title="Mental & emotional health"
                items={[
                  'Daily emotional support from staff trained in attachment and trauma',
                  'Access to CAMHS or LAC psychology services',
                  'Specialist trauma-informed therapists (if commissioned)',
                  'Counselling, mental health key work and referrals for assessments',
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <ListCard
                title="Medication & first aid"
                items={[
                  'Medication administered and recorded in line with our Medication Policy',
                  'Staff trained in paediatric and adult first aid',
                  'Emergency procedures for allergies, seizures, asthma and diabetes',
                  'Consent for treatment obtained on admission and updated',
                ]}
              />
            </StaggerItem>
            <StaggerItem>
              <ListCard
                title="Healthy lifestyle"
                items={[
                  'Healthy routines including sleep, hydration and personal care',
                  'Balanced nutrition that respects cultural and dietary preferences',
                  'Physical activity through parks, gyms and active hobbies',
                  'Education on puberty, relationships, hygiene and substance misuse',
                ]}
              />
            </StaggerItem>
          </Stagger>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              { src: 'football', alt: 'A football on bright green grass' },
              { src: 'healthy-food', alt: 'A colourful, healthy meal with fresh vegetables' },
              { src: 'mindfulness', alt: 'A person sitting calmly in a mindful pose at sunset' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 0.06} className="overflow-hidden rounded-3xl">
                <img src={img(p.src)} alt={p.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Identity */}
      <Section id="identity" className="scroll-mt-40">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Cultural, religious & identity support"
              title="Every young person seen, respected and empowered"
              description={
                <div className="prose-care">
                  <p>
                    A strong sense of self and belonging is essential to emotional wellbeing and resilience, especially
                    for young people who have experienced trauma, loss or disrupted attachments.
                  </p>
                  <p>
                    Our approach is child-led, inclusive and respectful of all backgrounds. Staff are trained to support
                    spiritual, religious, linguistic, cultural, gender and sexual identity, and to affirm it in daily
                    routines, placement planning and key working.
                  </p>
                </div>
              }
            />
            <Reveal delay={0.1} className="mt-9">
              <Card className="bg-plum-50">
                <h3 className="text-base font-semibold">Where appropriate, staff liaise with</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {['Cultural mentors or advocates', 'Local inclusion services', 'Faith leaders', 'Community youth groups'].map(
                    (t) => (
                      <li
                        key={t}
                        className="rounded-full border border-plum-200 bg-white px-3.5 py-1.5 text-[0.86rem] font-medium text-plum-800"
                      >
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </Card>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
              {[
                { text: 'Access to places of worship, including churches, mosques, gurdwaras and temples' },
                { text: 'Celebration of cultural and religious festivals, shaped by the young person' },
                { text: 'Culturally appropriate food, toiletries, hair and skin care products' },
                { text: 'Support to maintain first language, with bilingual resources and interpretation' },
                { text: 'Staff training in anti-discrimination, LGBTQ+ inclusion and culturally sensitive care' },
                { text: 'Identity-focused key work and life story work' },
              ].map(({ text }) => (
                <StaggerItem as="li" key={text} className="rounded-3xl border border-line bg-white p-6">
                  <p className="text-[0.95rem] leading-7 text-ink-soft">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* Family */}
      <Section id="family" tone="tint" className="scroll-mt-40">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Contact arrangements"
            title="Safe, meaningful relationships with the people who matter"
            description={`Contact can be a source of comfort and of distress. At ${site.homeName}, it is always child-centred, safe and emotionally supportive, and in line with the young person’s care plan and any legal orders.`}
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Face-to-face', text: 'At the home or a designated venue, such as a contact centre or family home.' },
              { title: 'Supervised', text: 'Where required, supervised by our staff or as arranged by the placing authority.' },
              { title: 'Virtual', text: 'Phone, video call or messaging, where this is agreed and safe.' },
              { title: 'Indirect', text: 'Letters, emails or gifts, where direct contact is not possible or appropriate.' },
            ].map((t) => (
              <StaggerItem key={t.title} className="rounded-3xl border border-line bg-white p-7">
                <h3 className="text-lg font-semibold">{t.title} contact</h3>
                <p className="mt-2 text-[0.93rem] leading-7 text-muted">{t.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Card className="h-full">
                <Eyebrow>Our approach to managing contact</Eyebrow>
                <CheckList
                  className="mt-6"
                  columns={2}
                  items={[
                    'Each young person has a Contact Plan within their placement plan',
                    'Close liaison with the social worker and legal guardian',
                    'Risk assessments completed for all contact arrangements',
                    'Sessions supported, supervised or facilitated by trained staff',
                    'Emotional support before and after every contact',
                    'Contact reviewed regularly in care planning meetings',
                  ]}
                />
              </Card>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <Card className="h-full">
                <Eyebrow>Supporting family relationships</Eyebrow>
                <CheckList
                  className="mt-6"
                  items={[
                    'Reconnection and repair where relationships have broken down',
                    'Therapeutic life story work and identity-focused sessions',
                    'Ongoing contact with siblings where safe and permitted, even if placed apart',
                  ]}
                />
                <p className="mt-6 rounded-2xl bg-plum-50 p-4 text-[0.9rem] leading-6 text-plum-900">
                  Where contact is not permitted, we explain the reasons clearly and sensitively, and continue to
                  support the young person around loss, separation and attachment.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Life skills */}
      <Section id="life-skills" className="scroll-mt-40">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={img('cooking-together')}
                alt="People cooking a meal together in a homely kitchen"
                loading="lazy"
                className="aspect-[4/3.2] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Life skills & independence"
              title="Preparing for a confident, independent future"
              description="We provide practical support for developing everyday life skills, particularly for young people preparing to transition to independence."
            />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Cooking', text: 'Planning, shopping for and preparing healthy meals.' },
                { title: 'Budgeting', text: 'Managing money, saving and making informed choices.' },
                { title: 'Self-care', text: 'Personal care, healthy routines and wellbeing.' },
                { title: 'Community', text: 'Engaging with local clubs, groups and activities.' },
                { title: 'Careers & CVs', text: 'Careers advice, CV writing and college visits.' },
                { title: 'Enrichment', text: 'After-school clubs and activities that build interests.' },
              ].map((s) => (
                <StaggerItem key={s.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-[0.9rem] leading-6 text-muted">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
