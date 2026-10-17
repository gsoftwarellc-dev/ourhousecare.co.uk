/**
 * Central business details. Update these values in one place and they
 * flow through the header, footer, contact page, forms and legal pages.
 */
export const site = {
  name: 'Our House Care Group',
  legalName: 'Our House Care Group Limited',
  tagline: 'Supporting children today for brighter tomorrows',
  homeName: 'Bridgeway Home',

  /** Public website address, used for canonical and social sharing links. */
  url: 'https://ourhousecare.co.uk',

  /** Main inbox: receives website forms (except referrals) when no VITE_FORM_ENDPOINT is set. */
  email: 'info@ourhousecare.co.uk',
  /** Referrals inbox: shown to placing professionals and receives the referral form. */
  referralsEmail: 'referrals@ourhousecare.co.uk',
  /** Leave empty to hide the phone number everywhere on the site. */
  phone: '',

  registeredOffice: {
    lines: ['71–75 Shelton Street', 'Covent Garden', 'London', 'WC2H 9JQ'],
  },

  /**
   * The home's street address is intentionally not published on the website,
   * in line with the Statement of Purpose commitment to a discreet setting.
   */
  homeLocation: 'Dartford, with easy access to London',

  ages: '8 to 18',
  capacity: 1,

  statementOfPurpose: {
    responsibleOfficer: 'Registered Manager',
    status: 'Approved',
    reviewedOn: 'October 2026',
    nextReview: 'September 2027',
  },
} as const

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
