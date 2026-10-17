import { Link, useSearchParams } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { phoneHref, site } from '@/config/site'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Eyebrow, Section } from '@/components/ui/Section'
import { ContactForm, enquiryTypes } from '@/components/forms/ContactForm'

const enquiryFromParam: Record<string, (typeof enquiryTypes)[number]> = {
  general: 'General enquiry',
  referral: 'Placement or referral enquiry',
  sop: 'Request a copy of the Statement of Purpose',
  careers: 'Careers and recruitment',
  complaint: 'Feedback, concern or complaint',
}

export default function Contact() {
  const [params] = useSearchParams()
  const enquiry = enquiryFromParam[params.get('enquiry') ?? ''] ?? ''

  return (
    <>
      <Seo
        title="Contact us"
        description="Contact Our House Care Group about Bridgeway Home, referrals, careers, our Statement of Purpose, or to share feedback or a concern."
      />
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="We’d love to hear from you"
        description="Whether you’re a placing authority, a professional, a family member or someone interested in joining our team, we’re here to help."
      />

      <Section className="pt-14 sm:pt-16 lg:pt-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 space-y-4 lg:col-span-5">
            <Reveal>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-[box-shadow,border-color] hover:border-plum-200"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Email</p>
                  <p className="mt-1 text-lg font-semibold text-ink [overflow-wrap:anywhere]">{site.email}</p>
                  <p className="mt-1 text-[0.9rem] text-muted">General enquiries, careers and feedback</p>
                </div>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 text-plum-700 transition-colors group-hover:text-plum-700" />
              </a>
            </Reveal>

            <Reveal delay={0.02}>
              <a
                href={`mailto:${site.referralsEmail}`}
                className="group flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-[box-shadow,border-color] hover:border-plum-200"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Referrals</p>
                  <p className="mt-1 text-lg font-semibold text-ink [overflow-wrap:anywhere]">{site.referralsEmail}</p>
                  <p className="mt-1 text-[0.9rem] text-muted">Placement and referral enquiries</p>
                </div>
                <ArrowUpRight aria-hidden className="size-5 shrink-0 text-plum-700 transition-colors group-hover:text-plum-700" />
              </a>
            </Reveal>

            {site.phone && (
              <Reveal delay={0.04}>
                <a
                  href={phoneHref(site.phone)}
                  className="group flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-[box-shadow,border-color] hover:border-plum-200"
                >
                  <div className="flex-1">
                    <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-plum-600">Phone</p>
                    <p className="mt-1 text-lg font-semibold text-ink">{site.phone}</p>
                  </div>
                  <ArrowUpRight aria-hidden className="size-5 shrink-0 text-plum-700 transition-colors group-hover:text-plum-700" />
                </a>
              </Reveal>
            )}

            <Reveal delay={0.08}>
              <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6">
                <div>
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-plum-600">
                    Registered office
                  </p>
                  <address className="mt-1 not-italic leading-7 text-ink">
                    <span className="font-semibold">{site.legalName}</span>
                    <br />
                    {site.registeredOffice.lines.map((l) => (
                      <span key={l} className="block text-ink-soft">
                        {l}
                      </span>
                    ))}
                  </address>
                  <p className="mt-3 text-[0.85rem] leading-6 text-muted">
                    To protect the young person’s privacy, we don’t publish the home’s address.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { title: 'Referrals', text: 'Admission criteria & form', to: '/referrals' },
                { title: 'Careers', text: 'Roles & expressions of interest', to: '/careers' },
              ].map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className="group flex items-center gap-4 rounded-3xl border border-line bg-white p-5 transition-[box-shadow,border-color] hover:border-plum-200"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="text-[0.85rem] text-muted">{c.text}</p>
                  </div>
                  <ArrowUpRight aria-hidden className="size-4 text-plum-700 group-hover:text-plum-700" />
                </Link>
              ))}
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-3xl bg-plum-950 p-6 text-white">
                <div className="flex items-center gap-3">
                  <p className="font-semibold">Is a child at risk right now?</p>
                </div>
                <p className="mt-3 text-[0.92rem] leading-6 text-white">
                  Please don’t use this form for urgent concerns. If a child is in immediate danger, call{' '}
                  <a href="tel:999" className="font-semibold text-white underline">
                    999
                  </a>
                  . To raise a concern about any children’s home, you can contact Ofsted on{' '}
                  <a href="tel:03001231231" className="font-semibold text-white underline">
                    0300 123 1231
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
            <div className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
              <Eyebrow>Send us a message</Eyebrow>
              <h2 className="mb-8 mt-3 text-2xl font-semibold sm:text-3xl">How can we help?</h2>
              <ContactForm key={enquiry} defaultEnquiry={enquiry} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
