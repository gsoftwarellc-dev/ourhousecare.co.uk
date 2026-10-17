import type { ReactNode } from 'react'
import { site } from '@/config/site'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <p>
        {site.legalName} (“we”, “us”, “our”) owns and runs {site.homeName}. We are the data controller for personal
        information collected through this website. Our registered office is {site.registeredOffice.lines.join(', ')}.
      </p>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What information we collect',
    body: (
      <>
        <p>We only collect the information you choose to give us through the forms on this website, such as:</p>
        <ul>
          <li>Your name, email address, phone number and organisation</li>
          <li>Your role or job title, if you are a professional making a referral enquiry</li>
          <li>The content of your message or enquiry</li>
          <li>For careers enquiries: the role you’re interested in, your experience, qualifications and availability</li>
        </ul>
        <p>
          Please do not include a child’s name, date of birth, address or other identifying details in any website form.
          Full referral documents are transferred separately, through secure channels agreed with the placing authority.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    body: (
      <ul>
        <li>To respond to your enquiry and provide the information you have asked for</li>
        <li>To consider a referral enquiry and contact you about a potential placement</li>
        <li>To contact you about vacancies if you have registered an interest in working with us</li>
        <li>To meet our legal, regulatory and safeguarding obligations</li>
      </ul>
    ),
  },
  {
    id: 'lawful-basis',
    title: 'Our lawful basis',
    body: (
      <p>
        Under UK GDPR we rely on your consent when you submit a form, our legitimate interests in responding to
        enquiries and operating our service, steps taken at your request before entering into a contract (for job
        applicants), and compliance with legal obligations, including those under the Children’s Homes (England)
        Regulations 2015. You can withdraw your consent at any time.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Sharing your information',
    body: (
      <p>
        We never sell your personal information. We may share it with trusted service providers who help us run this
        website and our email systems, under appropriate data protection agreements. Where there is a safeguarding
        concern, or where the law requires it, we may share information with relevant agencies such as the police,
        the local authority, the Local Authority Designated Officer (LADO) or Ofsted.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <p>
        We keep personal information only for as long as it is needed for the purpose it was collected for, in line
        with our data retention policy and our legal and regulatory obligations. It is then securely deleted.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Keeping it secure',
    body: (
      <p>
        We use appropriate technical and organisational measures to protect your information against loss, misuse and
        unauthorised access. Access is limited to people who need it to do their job, and all staff are trained in GDPR
        and confidentiality.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Ask for a copy of the personal information we hold about you</li>
          <li>Ask us to correct information that is inaccurate or incomplete</li>
          <li>Ask us to delete your information, or restrict how we use it</li>
          <li>Object to how we use your information, and withdraw consent at any time</li>
          <li>Ask for your information to be transferred to another organisation</li>
        </ul>
        <p>
          To make a request, email{' '}
          <a href={`mailto:${site.email}`} className="font-semibold text-plum-700 underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies',
    body: (
      <p>
        This website does not use advertising or analytics cookies. Our fonts and images are served from our own
        website rather than third-party services. Your browser may store small technical files needed for the site to
        work properly.
      </p>
    ),
  },
  {
    id: 'complaints',
    title: 'Complaints',
    body: (
      <p>
        If you are unhappy with how we have handled your information, please contact us first so we can put things
        right. You also have the right to complain to the Information Commissioner’s Office (ICO) at{' '}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="font-semibold text-plum-700 underline underline-offset-2">
          ico.org.uk
        </a>{' '}
        or on{' '}
        <a href="tel:03031231113" className="font-semibold text-plum-700 underline underline-offset-2">
          0303 123 1113
        </a>
        .
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy notice"
        description="How Our House Care Group Limited collects, uses and protects personal information submitted through this website."
      />
      <PageHero
        breadcrumb="Privacy notice"
        eyebrow="Legal"
        title="Privacy notice"
        description="How we collect, use and protect the personal information you share with us through this website. Last updated October 2026."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Privacy notice sections" className="sticky top-32">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-plum-600">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-line">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.9rem] text-muted transition-colors hover:border-plum-600 hover:text-plum-700"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="space-y-12 lg:col-span-8 lg:col-start-5">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={Math.min(i, 3) * 0.03}>
                <article
                  id={s.id}
                  className="scroll-mt-32 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_li]:before:bg-plum-700 [&_p+p]:mt-4 [&_p+ul]:mt-4 [&_ul+p]:mt-4 [&_ul]:space-y-2"
                >
                  <h2 className="text-2xl font-semibold">{s.title}</h2>
                  <div className="mt-4 text-[1.02rem] leading-8 text-muted">{s.body}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
