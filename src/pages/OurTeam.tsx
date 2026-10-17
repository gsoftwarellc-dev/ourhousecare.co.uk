import { site } from '@/config/site'
import { img } from '@/data/content'
import { cn } from '@/lib/cn'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { CtaBand } from '@/components/sections/CtaBand'

const roles = [
  {
    abbr: 'RI',
    title: 'Responsible Individual',
    text: `Designated to oversee the management of ${site.legalName}, specifically ${site.homeName} and our future homes. The RI supervises the service, ensuring its effective operation and continuous adherence to all legal and regulatory requirements.`,
  },
  {
    abbr: 'RM',
    title: 'Registered Manager',
    text: `Leads the home to the highest standards of care, safeguarding and compliance. The RM is legally responsible for the day-to-day running of the home, in line with the Children’s Homes (England) Regulations 2015, the Quality Standards and the vision and values of ${site.name}.`,
  },
  {
    abbr: 'DM',
    title: 'Deputy Manager',
    text: `Supports the Registered Manager in running the home and delivering high-quality, child-centred care. The DM takes a lead role in safeguarding, shift management, staff development, compliance monitoring and quality assurance.`,
  },
  {
    abbr: 'SRSW',
    title: 'Senior Residential Support Worker',
    text: 'Supports the managers in leading day-to-day operations, takes lead responsibility during shifts, guides and mentors other staff, and ensures compliance with regulations, Quality Standards and internal procedures.',
  },
  {
    abbr: 'RSW',
    title: 'Residential Support Worker',
    text: 'Provides a safe, nurturing and therapeutic environment, supporting the young person’s daily routines, safeguarding their welfare and contributing to their development and care planning.',
  },
]

const orgChart = [
  { title: 'Director(s)', note: 'Registered provider' },
  { title: 'Director of Operations', note: 'Strategic oversight & direction' },
  { title: 'Responsible Individual', note: 'Service supervision & compliance' },
  { title: 'Registered Manager', note: 'Person in charge', highlight: true },
  { title: 'Deputy Manager', note: 'Deputy in absence of person in charge' },
  { title: 'Senior Residential Support Workers', note: 'Shift leadership & mentoring' },
]

const supervision = [
  { value: '4–6 weeks', label: 'Formal supervision for all staff' },
  { value: '3 & 6 months', label: 'Probation reviews for new staff' },
  { value: 'Annual', label: 'Appraisals to set goals and review performance' },
  { value: 'Any time', label: 'Ad-hoc supervision when it’s needed' },
]

export default function OurTeam() {
  return (
    <>
      <Seo
        title="Our team"
        description="Meet the Bridgeway Home staff team structure: leadership roles, safer recruitment, training, supervision and reflective practice that underpin consistent, therapeutic care."
      />
      <PageHero
        breadcrumb="Our team"
        eyebrow="Staff team"
        title="A skilled, caring and stable team"
        description="Our team brings together professional qualifications, lived experience, trauma-informed training and child-focused values, forming a nurturing and stable foundation for care."
        image={img('team-laptop')}
        imageAlt="Members of a friendly team working together around a table"
      />

      {/* Safer recruitment */}
      <section className="py-14">
        <div className="container-page">
          <Stagger className="grid gap-4 rounded-[2rem] border border-line bg-white p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {[
              { title: 'Safer Recruitment', text: 'Every appointment follows Safer Recruitment procedures' },
              { title: 'Enhanced DBS', text: 'Enhanced DBS checks kept up to date for all staff' },
              { title: 'Verified references', text: 'Professional references checked and verified' },
              { title: 'Robust induction', text: 'Completed before working directly with young people' },
            ].map((f) => (
              <StaggerItem key={f.title} className="flex gap-4">
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-[0.9rem] leading-6 text-muted">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Roles */}
      <Section className="pt-6 sm:pt-8 lg:pt-10">
        <div className="container-page">
          <SectionHeading
            eyebrow="Roles & responsibilities"
            title="Clear roles, shared values"
            description="Every role is defined so that the young person always knows who is responsible for their care, and the team always knows who to turn to."
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r, i) => (
              <StaggerItem
                key={r.abbr}
                as="article"
                className={cn(
                  'rounded-3xl border border-line bg-white p-7',
                  i === 0 && 'lg:col-span-1',
                )}
              >
                <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl bg-plum-600 px-3 text-sm font-bold tracking-wide text-white">
                  {r.abbr}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-[0.94rem] leading-7 text-muted">{r.text}</p>
              </StaggerItem>
            ))}
            <StaggerItem as="article" className="rounded-3xl border border-dashed border-plum-200 bg-plum-50 p-7">
              <h3 className="text-xl font-semibold">Trusted bank staff</h3>
              <p className="mt-3 text-[0.94rem] leading-7 text-muted">
                A robust pool of trained bank staff ensures continuity during absence or leave. They complete the same
                safer recruitment checks, induction and core training, and know the home’s ethos, routines and young
                person, so care is always given by familiar, trusted adults.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </Section>

      {/* Org chart */}
      <Section tone="tint" id="structure">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Organisational structure"
              title="Reporting relationships and management responsibilities"
              description="This chart shows how our roles are linked. It is purely pictorial: no degrees of seniority across staffing levels are implied or intended."
            />
            <Reveal delay={0.1} className="mt-9 space-y-4">
              <Card className="p-6">
                <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-600">
                  Quality management representatives
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">
                  Registered Manager · Responsible Individual · Director of Operations · Director(s)
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-600">
                  Quality responsibilities in their absence
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">
                  Deputy Manager · Responsible Individual · Director of Operations
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
              <ol className="mx-auto flex max-w-md flex-col items-center">
                {orgChart.map((n) => (
                  <li key={n.title} className="flex w-full flex-col items-center">
                    <div
                      className={cn(
                        'w-full rounded-2xl border px-5 py-4 text-center',
                        n.highlight
                          ? 'border-transparent bg-plum-700 text-white'
                          : 'border-line bg-white',
                      )}
                    >
                      <p className={cn('font-semibold', n.highlight ? 'text-white' : 'text-ink')}>{n.title}</p>
                      <p className={cn('mt-0.5 text-[0.82rem]', n.highlight ? 'text-white' : 'text-muted')}>
                        {n.note}
                      </p>
                    </div>
                    <span aria-hidden className="h-6 w-px bg-plum-200" />
                  </li>
                ))}
                <li className="w-full">
                  <div className="relative grid grid-cols-2 gap-3 pt-5">
                    <span aria-hidden className="absolute left-1/4 right-1/4 top-0 h-px bg-plum-200" />
                    <span aria-hidden className="absolute left-1/4 top-0 h-5 w-px bg-plum-200" />
                    <span aria-hidden className="absolute right-1/4 top-0 h-5 w-px bg-plum-200" />
                    <div className="rounded-2xl border border-gold-200 bg-gold-50 px-3 py-4 text-center">
                      <p className="text-[0.95rem] font-semibold text-ink">Residential Support Workers</p>
                      <p className="mt-0.5 text-[0.8rem] text-muted">Day-to-day care</p>
                    </div>
                    <div className="rounded-2xl border border-dashed border-gold-300 bg-white px-3 py-4 text-center">
                      <p className="text-[0.95rem] font-semibold text-ink">Bank staff</p>
                      <p className="mt-0.5 text-[0.8rem] text-muted">Continuity of care</p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Training */}
      <Section id="training">
        <div className="container-page">
          <SectionHeading
            eyebrow="Staff training & supervision"
            title="Confident, competent and child-focused, at all times"
            description="The quality of care is directly influenced by the knowledge, skill and emotional resilience of the adults providing it. That’s why we invest in a comprehensive programme of training, supervision and continuous professional development."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Induction</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold">Before working unsupervised</h3>
                <CheckList
                  className="mt-6"
                  items={[
                    `${site.homeName}’s ethos, policies and daily routines`,
                    'Trauma-informed practice and the PACE model',
                    'Safeguarding and child protection',
                    'Positive behaviour support and de-escalation',
                    'Fire safety, health & safety and first aid',
                    'Medication administration and record keeping',
                    'Equality, diversity and inclusion',
                    'Disclosures, whistleblowing and professional boundaries',
                  ]}
                />
                <p className="mt-6 text-[0.9rem] leading-6 text-muted">
                  New staff shadow experienced colleagues and take part in reflective discussions before being signed
                  off to work independently.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full p-6 sm:p-7">
                <Eyebrow>Ongoing development</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold">Mandatory training, reviewed annually</h3>
                <CheckList
                  className="mt-6"
                  items={[
                    'Safeguarding and contextual safeguarding',
                    'Missing from Care procedures',
                    'Child Sexual & Criminal Exploitation (CSE/CCE)',
                    'Prevent Duty and radicalisation',
                    'Mental health awareness and self-harm prevention',
                    'Substance misuse and online safety',
                    'Physical intervention (CPI Safety Intervention)',
                    'Paediatric and adult first aid',
                    'GDPR and data protection',
                  ]}
                />
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="h-full bg-plum-50 p-6 sm:p-7">
                <Eyebrow>Leadership</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold">Additional training for our senior team</h3>
                <CheckList
                  className="mt-6"
                  items={[
                    'Supervision and appraisal training',
                    'Safer Recruitment and Designated Safeguarding Lead (DSL)',
                    'Prevent, CSE/CCE awareness and contextual safeguarding',
                    'Regulation 45 report training',
                  ]}
                />
                <div className="mt-7 rounded-2xl bg-white p-5 ring-1 ring-line">
                  <p className="text-[0.85rem] font-semibold text-plum-700">Continuous professional development</p>
                  <p className="mt-1.5 text-[0.9rem] leading-6 text-muted">
                    Therapeutic parenting, neurodiversity, restorative practice and leadership development.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Supervision */}
      <Section tone="tint">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Supervision & appraisal"
            title="Structured support that promotes reflection and wellbeing"
            description="Supervision is delivered by the Registered Manager or Deputy Manager, covering case reflection, role clarity, training needs, wellbeing and safeguarding responsibilities."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supervision.map((s) => (
              <StaggerItem key={s.label} className="rounded-3xl border border-line bg-white p-7">
                <p className="text-plum-800 mt-6 text-3xl font-bold tracking-[-0.03em]">{s.value}</p>
                <p className="mt-2 text-[0.93rem] leading-6 text-muted">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">Team meetings</h3>
                </div>
                <CheckList
                  className="mt-5"
                  items={[
                    'Share updates on progress and risks',
                    'Review placement plans and strategies',
                    'Discuss safeguarding and learning from incidents',
                    'Promote consistency and values-led care',
                    'Encourage staff voice and shared problem-solving',
                  ]}
                />
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-plum-950">
                <img
                  src={img('supervision-meeting')}
                  alt="Two colleagues in a supportive one-to-one conversation"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-white">Reflective practice is central to our model</h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-white">
                    Staff critically evaluate their approach, share observations and learn from each other in a safe,
                    non-judgemental space. We see training and supervision not as compliance, but as the core of
                    consistent, relational and effective care.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        eyebrow="Careers"
        title="Could you help a young person feel safe enough to grow?"
        description="We’re always keen to hear from caring, resilient people who share our values, whether you’re experienced in residential childcare or just starting out."
        primary={{ label: 'Work with us', to: '/careers' }}
        secondary={{ label: 'Contact our team', to: '/contact' }}
      />
    </>
  )
}
