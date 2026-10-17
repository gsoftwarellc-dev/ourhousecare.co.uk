import { Link } from 'react-router'
import { CircleX } from 'lucide-react'
import { site } from '@/config/site'
import { supportNeeds } from '@/data/content'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { ReferralSteps } from '@/components/sections/ReferralSteps'
import { ReferralForm } from '@/components/forms/ReferralForm'
import { Faq } from '@/components/ui/Faq'

const quickFacts = [
  { label: 'Capacity', value: 'One young person (solo placement)' },
  { label: 'Ages', value: `${site.ages} years` },
  { label: 'Gender', value: 'Any gender' },
  { label: 'Needs', value: 'Social, emotional & mental health (SEMH / SEBD)' },
  { label: 'Placements', value: 'Planned; emergency in exceptional circumstances' },
  { label: 'Care', value: '24/7, PACE-informed, trauma-informed' },
]

const notSuitable = [
  'Young people whose primary needs relate to physical disabilities',
  'Acute mental health crises requiring inpatient care',
  'Young people requiring secure-level supervision',
  'Needs that cannot be safely managed within a solo-staffed setting',
]

const faqs = [
  {
    q: `How many young people live at ${site.homeName}?`,
    a: `${site.homeName} is registered to accommodate one young person, as a solo placement. The whole home and staff team are focused on their individual needs.`,
  },
  {
    q: 'Who can make a referral?',
    a: 'We accept planned referrals from local authorities, independent fostering agencies, commissioning bodies and social care professionals.',
  },
  {
    q: 'Do you accept emergency placements?',
    a: 'Emergency placements may be considered in exceptional circumstances, and only if the young person’s needs can be safely met, appropriate background information is available, and a matching and impact assessment can be completed immediately.',
  },
  {
    q: 'What happens after I send a referral?',
    a: 'The Registered Manager and Responsible Individual review the referral and complete a matching and impact risk assessment. If a potential match is identified, we may offer a virtual or physical visit, transition visits or introductory meetings, and a placement planning meeting.',
  },
  {
    q: 'Can the young person visit before moving in?',
    a: 'Yes, wherever possible. We may offer a virtual or physical visit and transition visits or introductory meetings, so the move feels as safe and predictable as it can.',
  },
  {
    q: 'How do you support education?',
    a: 'We work with local schools, PRUs, SEN provisions and virtual schools to secure the right setting. A designated education champion monitors progress, and a dedicated company vehicle supports school attendance.',
  },
  {
    q: 'Is there CCTV inside the home?',
    a: 'No. CCTV covers the external perimeter only, used solely for security and safeguarding purposes in line with data protection law.',
  },
  {
    q: 'How is physical intervention used?',
    a: 'Only as a last resort, when a young person or others are at immediate risk of harm. We use CPI Safety Intervention in line with Regulation 20 and Ofsted guidance, and every intervention is recorded, reviewed and shared with the placing authority.',
  },
  {
    q: 'Can I see your Statement of Purpose?',
    a: (
      <>
        Yes. Our Statement of Purpose is freely available on request to placing authorities and anyone involved in a
        young person’s placement.{' '}
        <Link to="/statement-of-purpose" className="font-semibold text-plum-700 underline underline-offset-2">
          Find out more
        </Link>
        .
      </>
    ),
  },
]

export default function Referrals() {
  return (
    <>
      <Seo
        title="Referrals"
        description="Make a referral to Bridgeway Home: admission criteria, who we support, our matching process, emergency placements and a secure referral enquiry form for professionals."
      />
      <PageHero
        breadcrumb="Referrals"
        eyebrow="Admission criteria & referrals"
        title="Finding the right home, through careful matching"
        description="Every referral is assessed individually, from first contact, so we only offer a home where a young person’s needs can be safely and positively met."
        actions={
          <>
            <ButtonLink to="#form" arrow>
              Start a referral
            </ButtonLink>
            <ButtonLink to="#faqs" variant="outline">
              Common questions
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-ink">{site.homeName} at a glance</p>
            </div>
            <dl className="mt-6 divide-y divide-line">
              {quickFacts.map((f) => (
                <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5 text-[0.93rem]">
                  <dt className="font-medium text-muted">{f.label}</dt>
                  <dd className="font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />

      {/* Criteria */}
      <Section>
        <div className="container-page">
          <SectionHeading
            eyebrow="Statement of needs"
            title="Who we can support"
            description={`${site.homeName} is designed for children and young people with social, emotional and behavioural difficulties. We understand many young people present with complex, overlapping needs, so every referral is assessed individually to ascertain whether they can be safely accommodated.`}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">We can meet the needs of young people who</h3>
                </div>
                <CheckList className="mt-6" items={supportNeeds} />
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold">We are not registered to support</h3>
                <ul className="mt-6 space-y-3.5">
                  {notSuitable.map((n) => (
                    <li key={n} className="flex gap-3">
                      <CircleX aria-hidden className="mt-0.5 size-5 shrink-0 text-plum-700" />
                      <span className="text-[0.97rem] leading-6 text-ink-soft">{n}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-2xl bg-plum-50 p-4 text-[0.9rem] leading-6 text-plum-900">
                  We also cannot accept a young person where there is an active risk to others that cannot be mitigated
                  through staffing and planning.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Sources + process */}
      <Section tone="tint">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Referral & matching process"
              title="A structured process, from first enquiry to first day"
              description="If a young person is admitted, their care plan, risk assessments and routines are established from day one, in close collaboration with the placing authority and relevant professionals."
            />
          </div>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Local Authorities' },
              { title: 'Independent Fostering Agencies' },
              { title: 'Commissioning bodies & social care professionals' },
            ].map((s) => (
              <StaggerItem key={s.title} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                <p className="text-[0.95rem] font-semibold leading-6 text-ink">{s.title}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-6">
            <ReferralSteps variant="horizontal" />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>Matching & impact risk assessment</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold">What we consider</h3>
                <CheckList
                  className="mt-6"
                  columns={2}
                  items={[
                    'The young person’s needs, history and risks',
                    'Staff skills and capacity',
                    'Environmental and location risks',
                    'Impact on the home and its dynamics',
                  ]}
                />
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-gold-200 bg-gold-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">Emergency placements</h3>
                </div>
                <p className="mt-4 text-[0.95rem] leading-7 text-muted">
                  May be considered in exceptional circumstances, and only if:
                </p>
                <CheckList
                  className="mt-4"
                  items={[
                    'The young person’s needs can be safely met',
                    'Appropriate background information is available',
                    'A matching and impact assessment can be completed immediately',
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section id="form" className="scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Referral enquiry"
                title="Tell us about the young person"
                description="Share a short, anonymised summary and our Registered Manager will contact you to discuss next steps and arrange secure transfer of referral documents."
              />
              <Reveal delay={0.1} className="mt-8 space-y-3">
                {[
                  { text: 'Every enquiry is reviewed promptly by the Registered Manager' },
                  { text: 'Use initials only. Never include names, DOBs or addresses' },
                ].map(({ text }) => (
                  <div key={text} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                    <p className="text-[0.92rem] leading-6 text-ink-soft">{text}</p>
                  </div>
                ))}
                <a
                  href={`mailto:${site.referralsEmail}`}
                  className="flex gap-3 rounded-2xl border border-plum-100 bg-plum-50 p-4 transition-colors hover:border-plum-200"
                >
                  <p className="min-w-0 text-[0.92rem] leading-6 text-ink-soft">
                    Prefer email? Send referrals to{' '}
                    <span className="font-semibold text-plum-700 [overflow-wrap:anywhere]">{site.referralsEmail}</span>
                  </p>
                </a>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
              <ReferralForm />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="tint" id="faqs" className="scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions from professionals"
              description="Can’t find what you’re looking for? Our team is happy to help."
            />
            <Reveal delay={0.1} className="mt-8">
              <ButtonLink to="/contact" variant="outline" arrow>
                Ask us a question
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </Section>
    </>
  )
}
