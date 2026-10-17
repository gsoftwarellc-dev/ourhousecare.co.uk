import { site } from '@/config/site'
import { governance, img, objectives } from '@/data/content'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink, TextLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { ValuesGrid } from '@/components/sections/ValuesGrid'
import { CtaBand } from '@/components/sections/CtaBand'

const leadership = [
  {
    role: 'Director(s)',
    text: 'Set the strategic direction of Our House Care Group Limited and hold overall accountability as the registered provider.',
  },
  {
    role: 'Director of Operations',
    text: 'Oversees the provision and staff team, providing strategic oversight, quality assurance, compliance monitoring and direction.',
  },
  {
    role: 'Responsible Individual (RI)',
    text: 'Supervises the service, ensuring its effective operation and continuous adherence to all legal and regulatory requirements.',
  },
  {
    role: 'Registered Manager (RM)',
    text: 'Full-time and legally responsible for the day-to-day running of the home, leading a skilled team to achieve positive outcomes.',
  },
  {
    role: 'Deputy Manager (DM)',
    text: 'Supports the delivery of care and supervision of staff, leading on safeguarding, shift management and quality assurance.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="Our House Care Group Limited owns and runs Bridgeway Home, a nurturing, trauma-informed, Ofsted-registered children's home. Discover our ethos, vision, values and aims."
      />
      <PageHero
        breadcrumb="About us"
        eyebrow="About Our House Care Group"
        title="A relational sanctuary for children who have experienced adversity"
        description="Our ethos is rooted in compassion, connection and the belief that every child and young person deserves to feel safe, valued and capable of thriving."
        image={img('arms-raised')}
        imageAlt="Young people raising their arms joyfully towards a sunset sky"
        actions={
          <>
            <ButtonLink to="/bridgeway-home" arrow>
              Visit {site.homeName}
            </ButtonLink>
            <ButtonLink to="/our-team" variant="outline">
              Meet the team
            </ButtonLink>
          </>
        }
      />

      {/* Who we are */}
      <Section>
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="A children’s service provider committed to safe, ethical, child-centred care"
              description={
                <div className="prose-care">
                  <p>
                    {site.homeName} Children’s Home is a children’s service provision owned and run by {site.legalName}.
                    The home is registered with Ofsted under the Care Standards Act 2000 and the Children’s Homes
                    (England) Regulations 2015, and provides 24-hour residential care in a solo placement for a young
                    person aged {site.ages} years.
                  </p>
                  <p>
                    The home specialises in individualised, PACE-model-informed care, with a strong emphasis on
                    emotional safety, relationship building and developmental recovery. We believe effective leadership
                    and strong governance are essential to maintaining a high-quality home where children are
                    protected, supported and empowered to thrive.
                  </p>
                </div>
              }
            />
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-[2rem] bg-plum-800 p-8 text-white sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                The registered provider
              </h3>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-[0.8rem] text-white">Name of registered provider</dt>
                  <dd className="mt-1 text-lg font-semibold">{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] text-white">Registered address</dt>
                  <dd className="mt-1 flex gap-2 font-medium leading-7">
                    {site.registeredOffice.lines.join(', ')}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] text-white">Children’s home</dt>
                  <dd className="mt-1 font-medium">
                    {site.homeName}, {site.homeLocation.split(',')[0]}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] text-white">Regulated by</dt>
                  <dd className="mt-1 font-medium">Ofsted · Children’s Homes (England) Regulations 2015</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ethos & vision */}
      <Section tone="tint">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Ethos & vision"
            title="Safe enough to grow, confident enough to dream"
            description="Children and young people in care are not defined by their past, but shaped by the support and relationships around them. We are committed to being a consistent, empowering part of their journey."
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-2">
            <StaggerItem>
              <Card className="h-full">
                <h3 className="text-2xl font-semibold">Our ethos</h3>
                <p className="mt-4 text-[1.02rem] leading-8 text-muted">
                  At {site.homeName}, our ethos is rooted in compassion, connection and the belief that every child
                  and young person deserves to feel safe, valued and capable of thriving. The home is more than a
                  residential setting: it is a relational sanctuary that offers safety, healing and opportunity to
                  children who have experienced adversity.
                </p>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full">
                <h3 className="text-2xl font-semibold">Our vision</h3>
                <p className="mt-4 text-[1.02rem] leading-8 text-muted">
                  Our vision is to create a nurturing, family-style home that supports long-term emotional recovery,
                  promotes developmental growth and builds resilience for the future. We rebuild trust, restore dignity
                  and nurture the innate potential in every child who comes through our doors.
                </p>
              </Card>
            </StaggerItem>
          </Stagger>
          <Reveal delay={0.1}>
            <figure className="mx-auto mt-14 max-w-3xl text-center">
              <blockquote className="text-2xl font-medium leading-[1.45] tracking-[-0.015em] text-plum-900 sm:text-[1.75rem]">
                “{site.homeName} is a home where children can feel safe enough to grow and confident enough to dream.”
              </blockquote>
              <figcaption className="mt-5 text-[0.9rem] font-medium text-muted">From our Statement of Purpose</figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section id="values">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="The values that underpin everything we do"
            description="Our values guide everything from daily routines to strategic decisions, ensuring every young person receives care that is ethical, personalised and grounded in hope."
          />
          <div className="mt-14">
            <ValuesGrid />
          </div>
        </div>
      </Section>

      {/* Aims & objectives */}
      <Section tone="tint" id="aims">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Aims & objectives"
                title="Our ten core objectives"
                description={
                  <p>
                    {site.homeName} exists to provide a safe, structured and nurturing home for children who have
                    experienced trauma, adversity and disrupted attachments. Our primary aim is an environment where
                    emotional recovery, resilience and personal growth are supported through consistent, high-quality
                    care.
                  </p>
                }
              />
            </div>
          </div>
          <Stagger as="ol" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {objectives.map((o, i) => (
              <StaggerItem
                as="li"
                key={o.title}
                className="group rounded-3xl border border-line bg-white p-6 transition-colors hover:border-plum-200 sm:p-7"
              >
                <span className="text-sm font-bold tabular-nums text-plum-700">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-[1.08rem] font-semibold">{o.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-7 text-muted">{o.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Leadership, governance & oversight"
              title="Clear lines of accountability and responsive leadership"
              description="Our management structure supports both the young person and the staff team effectively, with independent scrutiny built in at every level."
            />
            <Reveal delay={0.1} className="shrink-0">
              <ButtonLink to="/our-team" variant="outline" arrow>
                Our team structure
              </ButtonLink>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {leadership.map((l) => (
              <StaggerItem key={l.role} className="rounded-3xl border border-line bg-white p-6">
                <h3 className="text-base font-semibold">{l.role}</h3>
                <p className="mt-2 text-[0.9rem] leading-6 text-muted">{l.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>Quality assurance & regulation</Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold">Robust governance measures</h3>
                <ul className="mt-7 space-y-5">
                  {governance.map((g) => (
                    <li key={g.title} className="flex gap-4">
                      <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-plum-700" />
                      <div>
                        <p className="font-semibold text-ink">{g.title}</p>
                        <p className="mt-1 text-[0.94rem] leading-7 text-muted">{g.text}</p>
                      </div>
                    </li>
                  ))}
                  <li className="flex gap-4">
                    <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-plum-700" />
                    <div>
                      <p className="font-semibold text-ink">Ongoing monitoring</p>
                      <p className="mt-1 text-[0.94rem] leading-7 text-muted">
                        Complaints, allegations, physical interventions and serious incidents are monitored so lessons
                        are learned and practice improves.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full bg-plum-50">
                <Eyebrow>Reflective & transparent practice</Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold">A culture of openness, learning and reflection</h3>
                <p className="mt-5 text-[0.98rem] leading-8 text-muted">
                  Leadership actively encourages staff to raise concerns, share ideas and contribute to improving the
                  service. Supervision and team meetings provide regular opportunities for reflection, and feedback
                  from children and professionals is sought to guide improvements.
                </p>
                <CheckList
                  className="mt-7"
                  items={[
                    'Findings from audits inform staff meetings, supervision and service development',
                    'Policies, training and service delivery are regularly reviewed',
                    'Aligned with best practice and the evolving needs of young people',
                  ]}
                />
                <div className="mt-8">
                  <TextLink to="/statement-of-purpose">Read our Statement of Purpose</TextLink>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
