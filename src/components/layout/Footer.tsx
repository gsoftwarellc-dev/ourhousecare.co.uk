import { Link } from 'react-router'
import { footerNav } from '@/config/navigation'
import { phoneHref, site } from '@/config/site'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-plum-950 text-white">
      <div className="container-page">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Logo variant="white" className="h-20" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-7 text-white">
              {site.legalName} runs {site.homeName}, a nurturing, trauma-informed children's home providing safe,
              family-style care where children feel safe enough to grow and confident enough to dream.
            </p>
            <ul className="mt-7 space-y-3 text-[0.93rem]">
              <li>
                <span className="font-semibold">Email: </span>
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">Referrals: </span>
                <a href={`mailto:${site.referralsEmail}`} className="underline-offset-4 hover:underline">
                  {site.referralsEmail}
                </a>
              </li>
              {site.phone && (
                <li>
                  <span className="font-semibold">Phone: </span>
                  <a href={phoneHref(site.phone)} className="underline-offset-4 hover:underline">
                    {site.phone}
                  </a>
                </li>
              )}
              <li>
                <span className="font-semibold">Registered office: </span>
                {site.registeredOffice.lines.join(', ')}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-[0.94rem] text-white underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/30 p-6">
              <h2 className="text-base font-semibold text-white">Worried about a child?</h2>
              <p className="mt-3 text-[0.9rem] leading-6 text-white">
                If a child is in immediate danger, call <strong className="text-white">999</strong>. Children and
                young people can talk to Childline free on{' '}
                <a href="tel:08001111" className="font-semibold text-white underline-offset-4 hover:underline">
                  0800 1111
                </a>
                .
              </p>
              <Link
                to="/safeguarding"
                className="mt-4 inline-flex text-[0.9rem] font-semibold text-white underline underline-offset-4"
              >
                Our safeguarding approach
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/25 py-7 text-[0.83rem] text-white md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved. {site.homeName} is registered with Ofsted under the Care
            Standards Act 2000.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-white">
              Privacy notice
            </Link>
            <Link to="/statement-of-purpose" className="hover:text-white">
              Statement of Purpose
            </Link>
            <Link to="/young-people#complaints" className="hover:text-white">
              Complaints
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
