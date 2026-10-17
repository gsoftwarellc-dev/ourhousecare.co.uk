export type NavLinkItem = {
  label: string
  href: string
}

export type NavItem =
  | (NavLinkItem & { children?: undefined })
  | { label: string; href?: undefined; children: NavLinkItem[] }

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'About us', href: '/about' },
      { label: 'Our team', href: '/our-team' },
      { label: 'Statement of Purpose', href: '/statement-of-purpose' },
      { label: 'Work with us', href: '/careers' },
    ],
  },
  { label: 'Bridgeway Home', href: '/bridgeway-home' },
  {
    label: 'Our Care',
    children: [
      { label: 'Our approach', href: '/our-approach' },
      { label: 'Care & support', href: '/care-and-support' },
      { label: 'Safeguarding', href: '/safeguarding' },
    ],
  },
  { label: 'Young People', href: '/young-people' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { title: string; links: NavLinkItem[] }[] = [
  {
    title: 'About',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our team', href: '/our-team' },
      { label: 'Statement of Purpose', href: '/statement-of-purpose' },
      { label: 'Work with us', href: '/careers' },
    ],
  },
  {
    title: 'Our care',
    links: [
      { label: 'Bridgeway Home', href: '/bridgeway-home' },
      { label: 'Our approach', href: '/our-approach' },
      { label: 'Care & support', href: '/care-and-support' },
      { label: 'Safeguarding', href: '/safeguarding' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'Make a referral', href: '/referrals' },
      { label: 'Young people', href: '/young-people' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Privacy notice', href: '/privacy' },
    ],
  },
]
