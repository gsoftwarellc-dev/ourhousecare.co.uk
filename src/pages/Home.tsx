import { motion } from 'motion/react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router'
import { site } from '@/config/site'
import { governance, img, pillars, supportNeeds } from '@/data/content'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { CheckList, Eyebrow, Pill, Section, SectionHeading } from '@/components/ui/Section'
import { Seo } from '@/components/ui/PageHero'
import { PaceSection } from '@/components/sections/PaceSection'
import { ValuesGrid } from '@/components/sections/ValuesGrid'
import { ReferralSteps } from '@/components/sections/ReferralSteps'
import { CtaBand } from '@/components/sections/CtaBand'

const ease = [0.22, 1, 0.36, 1] as const

function Hero() {
  return (
    <section>
      <div className="container-page grid items-center gap-16 pb-24 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16">
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Pill>
            <span>
              Ofsted-registered children's home<span className="hidden sm:inline"> · {site.homeName}</span>
            </span>
          </Pill>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
            Supporting children today for brighter tomorrows
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-ink-soft sm:text-[1.2rem] sm:leading-9">
            {site.homeName} is a nurturing, trauma-informed children's home providing 24-hour solo-placement care for
            one young person aged {site.ages}. It is a safe place to heal, grow and dream.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/referrals" size="lg" arrow>
              Make a referral
            </ButtonLink>
            <ButtonLink to="/bridgeway-home" size="lg" variant="outline">
              Explore {site.homeName}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.92rem] font-medium text-ink">
            {['Ofsted registered', 'PACE-informed care', '24/7 consistent support'].map((label) => (
              <li key={label} className="flex items-center gap-2">
                <Check aria-hidden className="size-4 text-plum-700" strokeWidth={2.5} />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
        >
          <div className="mx-auto aspect-[4/3.4] max-w-[36rem] overflow-hidden rounded-[2rem] bg-plum-100 lg:ml-auto lg:mr-0">
            <img
              src={img('home-exterior')}
              alt="A warm, family-style detached house surrounded by trees at sunrise"
              className="size-full object-cover"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function KeyFacts() {
  const facts = [
    { value: '1', label: 'Solo placement', text: 'Dedicated care for one young person' },
    { value: '8–18', label: 'Ages supported', text: 'Any gender, with SEMH needs' },
    { value: '24/7', label: 'Residential care', text: 'Consistent, familiar adults' },
    { value: '100%', label: 'Staff PACE-trained', text: 'Trauma-informed from day one' },
  ]
  return (
    <div className="container-page">
      <Stagger className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-4">
        {facts.map((f, i) => (
          <StaggerItem
            key={f.label}
            className={[
              'p-6 sm:p-8',
              i % 2 === 0 ? 'border-r border-line' : '',
              i < 2 ? 'border-b border-line lg:border-b-0' : '',
              i === 1 ? 'lg:border-r' : '',
            ].join(' ')}
          >
            <p className="text-4xl font-bold tracking-[-0.04em] text-plum-800 sm:text-5xl">{f.value}</p>
            <p className="mt-3 text-[0.95rem] font-semibold text-ink">{f.label}</p>
            <p className="mt-1 text-[0.86rem] leading-5 text-muted">{f.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}

function Welcome() {
  return (
    <Section>
      <div className="container-page grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="mx-auto aspect-[4/4.4] max-w-xl overflow-hidden rounded-[2rem] bg-plum-50">
            <img
              src={img('living-room')}
              alt="A bright, homely living room with comfortable furniture and plants"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-6">
          <SectionHeading
            eyebrow="Welcome to Our House"
            title="More than a place to live: a home where healing comes first"
            description={
              <div className="prose-care">
                <p>
                  {site.homeName} has been carefully established by {site.legalName} to provide a safe, warm and
                  therapeutically rich environment for children who have experienced early trauma, neglect, abuse or
                  multiple placement breakdowns.
                </p>
                <p>
                  Our approach is grounded in high standards of safeguarding, professional practice and regulatory
                  compliance. Beyond meeting minimum standards, we exist to rebuild trust, restore dignity and nurture
                  the innate potential in every child who comes through our doors.
                </p>
              </div>
            }
          />
          <Reveal delay={0.1}>
            <figure className="mt-9 border-l-4 border-plum-700 py-1 pl-6">
              <blockquote className="text-lg font-medium leading-8 text-ink">
                The home is not simply a place of residence. It is a relationally driven, child-centred space where
                healing and growth take priority.
              </blockquote>
            </figure>
            <div className="mt-8">
              <TextLink to="/about">Discover our ethos and values</TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <Section>
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our values"
            title="Everything we do is guided by six simple values"
            description="Our values guide everything from daily routines to strategic decisions, so every young person receives care that is ethical, personalised and grounded in hope."
          />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink to="/about" variant="outline" arrow>
              About Our House
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14">
          <ValuesGrid />
        </div>
      </div>
    </Section>
  )
}

function HomeShowcase() {
  const features = [
    'Personalised, lockable bedroom',
    'Staff sleep-in room',
    'Family-style bathroom',
    'Welcoming living room',
    'Open-plan kitchen & dining',
    'Private office for records',
    'Private rear garden',
    'Driveway & on-street parking',
  ]
  return (
    <Section tone="tint">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={site.homeName}
            title="A warm, detached family home in a quiet residential street"
            description={`Decorated in a child-friendly, age-appropriate way and personalised to the young person living there, ${site.homeName} reflects the standard of living of a nurturing, supportive family home.`}
          />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink to="/bridgeway-home" arrow>
              Tour the home
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          <StaggerItem className="group relative overflow-hidden rounded-[2rem] sm:col-span-2 lg:col-span-7 lg:row-span-2">
            <img
              src={img('living-room-bright')}
              alt="A light-filled living room with a sofa and cushions"
              loading="lazy"
              className="aspect-[4/3] size-full object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04] lg:aspect-auto"
            />
            <p className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[0.95rem] font-semibold text-black">
              A welcoming living room
            </p>
          </StaggerItem>
          {[
            { src: 'bedroom', alt: 'A cosy bedroom with warm cushions and plants', label: 'Personalised bedroom' },
            { src: 'dining-room', alt: 'A bright dining room ready for shared meals', label: 'Shared family meals' },
          ].map((p) => (
            <StaggerItem key={p.src} className="group relative overflow-hidden rounded-[2rem] lg:col-span-5">
              <img
                src={img(p.src)}
                alt={p.alt}
                loading="lazy"
                className="aspect-[16/10] size-full object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
              />
              <p className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[0.95rem] font-semibold text-black">
                {p.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {features.map((label) => (
            <StaggerItem
              key={label}
              className="rounded-2xl border border-line bg-white px-4 py-3.5"
            >
              <span className="text-[0.88rem] font-medium leading-5 text-ink sm:text-[0.95rem]">{label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}

function Pillars() {
  return (
    <Section>
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Holistic care & support"
          title="Every part of a young person's life, thoughtfully supported"
          description="From school and health to identity, family and independence, we work in partnership with placing authorities, schools, health professionals and advocates to wrap support around each young person."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title} as="article">
              <Link
                to={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-plum-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-plum-50">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.96rem] leading-7 text-muted">{p.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-plum-700">
                    Learn more
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}

function WhoWeSupport() {
  return (
    <Section tone="tint">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Who we support"
            title="Care for one young person aged 8 to 18, of any gender"
            description={`${site.homeName} is designed for children and young people with social, emotional and mental health needs (SEMH). Every referral is assessed individually, so we only offer a home where needs can be safely met.`}
          />
          <Reveal delay={0.1} className="mt-9">
            <CheckList items={supportNeeds} />
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/referrals" arrow>
                Referral criteria
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Ask a question
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="rounded-[2rem] border border-line bg-white p-7 sm:p-10">
            <Eyebrow>The referral journey</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold">A careful, structured matching process</h3>
            <p className="mt-2 text-[0.96rem] leading-7 text-muted">
              Planned referrals are welcomed from local authorities, independent fostering agencies, commissioning
              bodies and social care professionals.
            </p>
            <div className="mt-9">
              <ReferralSteps />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function UbuntuBand() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
          <img
            src={img('group-sunset')}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-plum-950/85" />
          <div className="max-w-2xl px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-28">
            <Eyebrow light>The Ubuntu philosophy</Eyebrow>
            <p className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              “I am because we are.”
            </p>
            <p className="mt-7 text-lg leading-8 text-white">
              We foster community, dignity and shared responsibility, so every young person feels a true sense of
              belonging. Children in care are not defined by their past; they are shaped by the support and
              relationships around them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Governance() {
  return (
    <Section>
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Leadership & governance"
            title="Independent oversight and continuous improvement"
            description="Strong leadership and transparent governance keep our home safe, high-quality and accountable, in full compliance with the Children's Homes (England) Regulations 2015."
          />
          <Reveal delay={0.1} className="mt-9">
            <Link
              to="/statement-of-purpose"
              className="group flex items-center justify-between gap-4 rounded-3xl border border-line bg-plum-50 p-6 transition-colors hover:border-plum-300"
            >
              <div>
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-700">
                  Statement of Purpose
                </p>
                <p className="mt-1.5 font-semibold text-ink">
                  Reviewed {site.statementOfPurpose.reviewedOn} · Status: {site.statementOfPurpose.status}
                </p>
              </div>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-plum-700 text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight aria-hidden className="size-5" />
              </span>
            </Link>
          </Reveal>
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {governance.map((g, i) => (
            <StaggerItem key={g.title} className="rounded-3xl border border-line bg-white p-7">
              <span className="text-sm font-bold tabular-nums text-plum-700">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-7 text-muted">{g.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Seo description="Our House Care Group Limited runs Bridgeway Home, an Ofsted-registered, trauma-informed children's home in Dartford providing 24-hour solo-placement care for a young person aged 8 to 18." />
      <Hero />
      <KeyFacts />
      <Welcome />
      <PaceSection />
      <Values />
      <HomeShowcase />
      <Pillars />
      <WhoWeSupport />
      <UbuntuBand />
      <Governance />
      <CtaBand />
    </>
  )
}
