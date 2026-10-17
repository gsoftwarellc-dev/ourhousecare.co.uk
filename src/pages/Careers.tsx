import { site } from '@/config/site'
import { img } from '@/data/content'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { CareersForm } from '@/components/forms/CareersForm'

const reasons = [
  {
    title: 'Comprehensive training',
    text: 'A robust induction, mandatory training reviewed annually, and PACE and trauma-informed practice from day one.',
  },
  {
    title: 'Regular supervision',
    text: 'Formal supervision every 4–6 weeks, annual appraisals, and ad-hoc support whenever you need it.',
  },
  {
    title: 'Continuous development',
    text: 'CPD in therapeutic parenting, neurodiversity, restorative practice and leadership development.',
  },
  {
    title: 'A reflective culture',
    text: 'A safe, non-judgemental space to share observations, learn from each other and grow together.',
  },
  {
    title: 'Values-led care',
    text: 'Work in a home guided by compassion, connection, the PACE model and the Ubuntu philosophy.',
  },
  {
    title: 'Room to grow',
    text: 'Clear pathways from Residential Support Worker to Senior, Deputy Manager and beyond as we open new homes.',
  },
]

const openings = [
  {
    title: 'Residential Support Worker',
    text: 'Provide safe, nurturing and therapeutic care, supporting daily routines, safeguarding welfare and contributing to care planning.',
  },
  {
    title: 'Senior Residential Support Worker',
    text: 'Lead shifts, guide and mentor colleagues, and help ensure compliance with regulations and internal procedures.',
  },
  {
    title: 'Deputy Manager',
    text: 'Support the Registered Manager, leading on safeguarding, shift management, staff development and quality assurance.',
  },
  {
    title: 'Bank Residential Support Worker',
    text: 'Join our trusted bank team, providing consistent, familiar cover with the same training and support as permanent staff.',
  },
]

const process = [
  { title: 'Register your interest', text: 'Tell us about yourself using the form below.' },
  { title: 'Conversation & interview', text: 'Get to know us, our ethos and the role.' },
  { title: 'Safer recruitment checks', text: 'Enhanced DBS and verified professional references.' },
  { title: 'Induction & shadowing', text: 'Core training, shadowing and reflective discussions.' },
  { title: 'Sign-off & probation', text: 'Sign-off to work independently, with reviews at 3 and 6 months.' },
]

export default function Careers() {
  return (
    <>
      <Seo
        title="Work with us"
        description="Careers at Our House Care Group: Residential Support Worker, Senior, Deputy Manager and bank roles at Bridgeway Home, with comprehensive training, supervision and CPD."
      />
      <PageHero
        breadcrumb="Work with us"
        eyebrow="Careers"
        title="Build a career that changes a young person’s life"
        description={`At ${site.homeName}, every adult matters. We’re looking for warm, resilient and reflective people who want to help a young person feel safe enough to grow and confident enough to dream.`}
        image={img('team-celebrate')}
        imageAlt="Two colleagues celebrating a success with a high five"
        actions={
          <>
            <ButtonLink to="#apply" arrow>
              Register your interest
            </ButtonLink>
            <ButtonLink to="/our-team#training" variant="outline">
              Our training
            </ButtonLink>
          </>
        }
      />

      <Section>
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Why join Our House"
            title="Supported, so you can support others"
            description="We view training and supervision not simply as compliance, but as the core of delivering consistent, relational and effective care."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <StaggerItem
                key={r.title}
                className="rounded-3xl border border-line bg-white p-7 transition-colors hover:border-plum-200"
              >
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-7 text-muted">{r.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="tint">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Roles we recruit for"
              title="Find the role that’s right for you"
              description="Whether you’re new to residential childcare or an experienced leader, there’s a place for you in our team."
            />
            <Reveal delay={0.1} className="mt-9 rounded-3xl border border-line bg-white p-6">
              <h3 className="text-base font-semibold">Who we’re looking for</h3>
              <CheckList
                className="mt-5"
                items={[
                  'Warm, patient and emotionally resilient',
                  'Committed to safeguarding and high standards',
                  'Open to reflection, feedback and learning',
                  'Respectful of every young person’s identity and culture',
                  'Able to work a flexible rota, including sleep-ins',
                ]}
              />
            </Reveal>
          </div>
          <Stagger className="grid gap-4 lg:col-span-7">
            {openings.map((o) => (
              <StaggerItem
                key={o.title}
                className="group flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 transition-[box-shadow,border-color] duration-500 hover:border-plum-200 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div>
                  <h3 className="text-lg font-semibold">{o.title}</h3>
                  <p className="mt-1.5 max-w-xl text-[0.93rem] leading-7 text-muted">{o.text}</p>
                </div>
                <ButtonLink to="#apply" variant="outline" size="sm" arrow className="shrink-0 self-start sm:self-center">
                  Express interest
                </ButtonLink>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section>
        <div className="container-page">
          <SectionHeading
            eyebrow="Our recruitment process"
            title="Safe, thorough and supportive"
            description="Every member of our team is recruited in line with Safer Recruitment procedures, Schedule 2 and Regulation 32."
          />
          <Stagger as="ol" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <StaggerItem as="li" key={p.title} className="relative rounded-3xl border border-line bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tabular-nums text-plum-700">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-6 text-muted">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="tint" id="apply" className="scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-4">
            <SectionHeading
              eyebrow="Register your interest"
              title="Let’s start a conversation"
              description="Share a few details and our recruitment team will be in touch about current and upcoming opportunities."
            />
            <Reveal delay={0.1} className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <p className="text-[0.92rem] leading-6 text-ink-soft">
                  All offers are subject to an Enhanced DBS check and satisfactory references.
                </p>
              </div>
              <a
                href={`mailto:${site.email}?subject=Careers enquiry`}
                className="flex gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-plum-200"
              >
                <span className="text-[0.92rem] leading-6 text-ink-soft">
                  Prefer email? Send your CV to{' '}
                  <strong className="font-semibold text-plum-700 [overflow-wrap:anywhere]">{site.email}</strong>
                </span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="min-w-0 lg:col-span-8">
            <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
              <Eyebrow>Expression of interest</Eyebrow>
              <h3 className="mb-8 mt-3 text-2xl font-semibold">Tell us about you</h3>
              <CareersForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
