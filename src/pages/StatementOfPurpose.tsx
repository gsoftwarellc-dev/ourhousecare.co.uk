import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/config/site'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'

const contents: { title: string; to: string }[] = [
  { title: 'Introduction', to: '/about' },
  { title: 'Ethos, vision & values', to: '/about#values' },
  { title: 'Aims and objectives', to: '/about#aims' },
  { title: 'Details of the home', to: '/bridgeway-home' },
  { title: 'Admission criteria & statement of needs', to: '/referrals' },
  { title: 'Cultural, religious & identity support', to: '/care-and-support#identity' },
  { title: 'Safeguarding children & young people', to: '/safeguarding' },
  { title: 'Behaviour support & risk management', to: '/our-approach#behaviour' },
  { title: 'Missing-from-care protocol', to: '/safeguarding#missing' },
  { title: 'Contact arrangements', to: '/care-and-support#family' },
  { title: 'Education provision', to: '/care-and-support#education' },
  { title: 'Health and wellbeing support', to: '/care-and-support#health' },
  { title: 'Staff team: skills, experience & qualifications', to: '/our-team' },
  { title: 'Staff training & supervision', to: '/our-team#training' },
  { title: 'Therapeutic support & model of care', to: '/our-approach' },
  { title: 'Children’s rights, voice & participation', to: '/young-people' },
  { title: 'Complaints & advocacy', to: '/young-people#complaints' },
  { title: 'Leadership, governance & oversight', to: '/about#leadership' },
  { title: 'Fire precautions & health and safety', to: '/safeguarding#health-and-safety' },
  { title: 'Location of the premises', to: '/bridgeway-home#location' },
  { title: 'Policies, monitoring & review', to: '/safeguarding#policies' },
  { title: 'Appendices', to: '#appendices' },
]

const appendices = [
  { title: 'Home floor plan', text: 'Layout of bedrooms, staff facilities and communal areas' },
  { title: 'Staffing list & qualifications', text: 'Current roles, qualifications and training status' },
  { title: 'Insurance certificates', text: 'Employer’s liability and public liability insurance' },
  { title: 'Ofsted registration details', text: 'Certificate of registration, URN and contact information' },
  { title: 'Location Risk Assessment', text: 'Crime data, police consultation and local area analysis' },
  { title: 'Fire Risk Assessment & Evacuation Plan', text: 'With fire drill logs and safety system checklist' },
  { title: 'Key policies', text: 'Including safeguarding, behaviour support and complaints' },
  { title: 'Sample risk assessments & plans', text: 'Blank or anonymised placement plan templates' },
  { title: 'Rota template & staffing ratios', text: 'Demonstrating safe staffing levels' },
  { title: 'Training matrix', text: 'Current training, refreshers and CPD planning' },
  { title: 'Building & contents insurance', text: 'Where separate from liability insurance' },
  { title: 'Regulation 44 visitor agreement', text: 'Agreement or schedule, where applicable' },
]

export default function StatementOfPurpose() {
  const sop = site.statementOfPurpose
  return (
    <>
      <Seo
        title="Statement of Purpose"
        description="Bridgeway Home's Statement of Purpose, written to meet Schedule 1 of the Children's Homes (England) Regulations 2015. Read it online or request a full copy and appendices."
      />
      <PageHero
        breadcrumb="Statement of Purpose"
        eyebrow="Regulatory information"
        title="Statement of Purpose"
        description={`Written to meet the requirements of Schedule 1 of the Children’s Homes (England) Regulations 2015, our Statement of Purpose describes ${site.homeName}’s ethos, care model and day-to-day functioning.`}
        actions={
          <>
            <ButtonLink to="#request" arrow>
              Request a copy
            </ButtonLink>
            <ButtonLink to="#contents" variant="outline">
              Read it online
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <p className="font-semibold text-ink">Document details</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[0.78rem] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                {sop.status}
              </span>
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: 'Responsible officer', value: sop.responsibleOfficer },
                { label: 'Regulation', value: 'Schedule 1, CH(E)R 2015' },
                { label: 'Reviewed on', value: sop.reviewedOn },
                { label: 'Next review', value: sop.nextReview },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl bg-plum-50 p-4">
                  <dt className="flex items-center gap-1.5 text-[0.78rem] font-medium text-muted">
                    {label}
                  </dt>
                  <dd className="mt-1.5 font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />

      {/* Purpose & availability */}
      <Section>
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <Eyebrow>The purpose of this statement</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold">What it sets out</h2>
              <CheckList
                className="mt-6"
                items={[
                  'The home’s ethos, care model and day-to-day functioning',
                  'The services provided to children and young people',
                  'The roles and responsibilities of the registered provider, responsible individual and staff team',
                  'How the home meets Schedule 1 of the Children’s Homes (England) Regulations 2015',
                ]}
              />
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full">
              <Eyebrow>Freely available on request to</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold">Who can see it</h2>
              <CheckList
                className="mt-6"
                items={[
                  `Anyone who works at ${site.homeName}`,
                  `Any young person accommodated at ${site.homeName}`,
                  'The parent or carer of any young person accommodated',
                  'The placing authority of any young person accommodated',
                  'Any child being considered for accommodation',
                  'Any other organisation or person involved in a placement',
                ]}
              />
            </Card>
          </Reveal>
        </div>
        <div className="container-page mt-6">
          <Reveal>
            <div className="flex gap-4 rounded-3xl border border-gold-200 bg-gold-50/70 p-6">
              <p className="text-[0.95rem] leading-7 text-ink-soft">
                <strong className="font-semibold text-ink">The Statement of Purpose is a legal document.</strong> It is
                accurate in its content and properly reflects the facilities and services provided by the placement.{' '}
                {site.homeName} is a children’s service provision owned and run by {site.legalName}.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contents */}
      <Section tone="tint" id="contents" className="scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contents"
            title="Read our Statement of Purpose online"
            description="Each section of the Statement of Purpose is covered across this website. Select a section to read it."
          />
          <Stagger as="ol" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((c, i) => (
              <StaggerItem as="li" key={c.title}>
                <Link
                  to={c.to}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-[box-shadow,border-color] hover:border-plum-200"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-plum-50 text-[0.82rem] font-bold tabular-nums text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[0.94rem] font-medium leading-6 text-ink">{c.title}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-plum-700 transition-all group-hover:translate-x-0.5 group-hover:text-plum-700"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Appendices */}
      <Section id="appendices" className="scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Appendices"
            title="Supporting documents, available on request"
            description={`The following documents are available on request, or as part of the full ${site.homeName} Statement of Purpose pack.`}
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {appendices.map((a) => (
              <StaggerItem key={a.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-semibold leading-6">{a.title}</h3>
                <p className="mt-1.5 text-[0.88rem] leading-6 text-muted">{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8">
            <div className="grid gap-4 rounded-3xl border border-line bg-plum-50 p-6 sm:grid-cols-3 sm:p-8">
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Ofsted standard</p>
                <p className="mt-1.5 font-semibold text-ink">Statement of Purpose Standard</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Regulations</p>
                <p className="mt-1.5 font-semibold text-ink">Children’s Homes (England) Regulations 2015</p>
              </div>
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Reviewed by</p>
                <p className="mt-1.5 font-semibold text-ink">Responsible Individual &amp; Registered Manager</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Request */}
      <Section tone="tint" id="request" className="scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Request a copy"
              title="Request the full Statement of Purpose"
              description="Let us know who you are and which documents you need, and we’ll send the full Statement of Purpose and any appendices requested."
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
              <ContactForm defaultEnquiry="Request a copy of the Statement of Purpose" />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
