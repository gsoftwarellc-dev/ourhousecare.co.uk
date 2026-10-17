
/** Images live in /public/images and are served as-is. */
export const img = (name: string) => `/images/${name}.webp`

export const pace = [
  {
    letter: 'P',
    word: 'Playfulness',
    short: 'Building trust and joy through light, spontaneous interactions.',
    detail:
      'A light, warm tone helps young people relax, connect and experience the safety of shared fun, without fear of getting it wrong.',
  },
  {
    letter: 'A',
    word: 'Acceptance',
    short: 'Valuing the child’s internal world without judgement.',
    detail:
      'We accept the feelings, thoughts and wishes behind behaviour, so young people know they are valued for who they are, always.',
  },
  {
    letter: 'C',
    word: 'Curiosity',
    short: 'Seeking to understand the reasons behind behaviours, not just react to them.',
    detail:
      'We wonder aloud, gently and without assumptions, helping young people make sense of their experiences and feel understood.',
  },
  {
    letter: 'E',
    word: 'Empathy',
    short: 'Responding with emotional attunement and compassion.',
    detail:
      'We stay alongside young people in difficult moments, showing that their feelings matter and that they never face them alone.',
  },
] as const

export const values: { title: string; text: string }[] = [
  {
    title: 'Trauma-informed practice',
    text: 'We understand the impact of trauma on brain development, behaviour and relationships. Our care is built on empathy, patience and trust.',
  },
  {
    title: 'The PACE model',
    text: 'Playfulness, Acceptance, Curiosity and Empathy inform our daily interactions, helping young people feel emotionally held, understood and safe.',
  },
  {
    title: 'Ubuntu philosophy',
    text: 'Inspired by the principle “I am because we are,” we foster community, dignity and shared responsibility, affirming each child’s sense of belonging.',
  },
  {
    title: 'Individuality & inclusion',
    text: 'We celebrate every young person’s identity, including culture, ethnicity, gender identity, language and faith. Every child is seen, heard and respected.',
  },
  {
    title: 'Growth through relationships',
    text: 'We believe healing happens in relationships. Our staff are trained to provide consistent, attuned and reflective care.',
  },
  {
    title: 'Aspirational care',
    text: 'We encourage young people to explore their talents, pursue their goals and imagine a future beyond their circumstances.',
  },
]

export const objectives = [
  {
    title: 'Provide safety & stability',
    text: 'Ensure every young person experiences physical and emotional safety through clear boundaries, responsive care and a predictable home environment.',
  },
  {
    title: 'Deliver therapeutic & trauma-informed care',
    text: 'Embed the PACE model throughout daily life, with all staff trained in trauma-informed practice and child development.',
  },
  {
    title: 'Promote positive identity & inclusion',
    text: 'Support each young person’s cultural, religious, gender and personal identity, and celebrate difference in an inclusive home.',
  },
  {
    title: 'Support educational progress',
    text: 'Encourage a love of learning through personalised education plans, school support and access to academic enrichment.',
  },
  {
    title: 'Encourage emotional & social development',
    text: 'Foster secure relationships that build emotional regulation, communication skills and confidence in social settings.',
  },
  {
    title: 'Develop life skills & independence',
    text: 'Provide practical support with self-care, budgeting, cooking and community engagement, especially when preparing for independence.',
  },
  {
    title: 'Work in partnership',
    text: 'Collaborate closely with families (where appropriate), placing authorities, schools, health professionals and advocacy services.',
  },
  {
    title: 'Uphold safeguarding standards',
    text: 'Maintain robust safeguarding policies, clear reporting procedures and a culture where concerns are addressed promptly.',
  },
  {
    title: 'Promote children’s rights & participation',
    text: 'Empower young people to share their views and influence their care through key working, house meetings and advocacy.',
  },
  {
    title: 'Deliver high professional standards',
    text: 'Operate in full compliance with the Children’s Homes (England) Regulations 2015 and Quality Standards, with strong leadership and reflective practice.',
  },
]

export const pillars: { title: string; text: string; href: string; image: string }[] = [
  {
    title: 'Education',
    text: 'Restoring confidence and reigniting ambition, with an education champion, homework support and dedicated school transport.',
    href: '/care-and-support#education',
    image: img('kids-writing'),
  },
  {
    title: 'Health & wellbeing',
    text: 'Registered with a GP, dentist and optician within 7 days, with attuned emotional support and access to CAMHS where needed.',
    href: '/care-and-support#health',
    image: img('healthy-food'),
  },
  {
    title: 'Identity & culture',
    text: 'Faith, language, culture, gender and sexual identity affirmed in daily routines, key working and life story work.',
    href: '/care-and-support#identity',
    image: img('hands-circle'),
  },
  {
    title: 'Family & contact',
    text: 'Safe, child-centred contact with the people who matter, planned in line with each young person’s care plan.',
    href: '/care-and-support#family',
    image: img('family-beach'),
  },
  {
    title: 'Life skills & independence',
    text: 'Cooking, budgeting, self-care, careers advice, CV writing and college visits, preparing for a confident future.',
    href: '/care-and-support#life-skills',
    image: img('cooking-together'),
  },
  {
    title: 'Safeguarding',
    text: 'A zero-tolerance approach to harm, with robust policies, trained staff and strong partnerships with local agencies.',
    href: '/safeguarding',
    image: img('hands-holding'),
  },
]

export const supportNeeds = [
  'Have experienced trauma, abuse, neglect or multiple placement moves',
  'Display emotional or behavioural needs requiring 24/7 therapeutic care',
  'May present with attachment difficulties, low self-esteem or anxiety',
  'May have a history of school non-attendance, exclusions or SEN',
  'May be vulnerable to exploitation (CSE, CCE) or at risk of going missing',
  'Will benefit from a structured, nurturing, PACE-informed care environment',
]

export const referralSteps: { title: string; text: string }[] = [
  {
    title: 'Referral received',
    text: 'Referral information is received and reviewed by our Registered Manager and Responsible Individual.',
  },
  {
    title: 'Matching & impact assessment',
    text: 'We complete a matching and impact risk assessment, considering staff skills and capacity, environmental risks and the young person’s needs.',
  },
  {
    title: 'Visits & introductions',
    text: 'If a match is identified, we offer a virtual or physical visit, transition visits or introductory meetings where possible.',
  },
  {
    title: 'Placement planning',
    text: 'A placement planning meeting is held, and care plans, risk assessments and routines are established from day one with the placing authority.',
  },
]

export const governance = [
  {
    title: 'Monthly Regulation 44 visits',
    text: 'An independent visitor meets with young people and staff, reviews records and provides written reports with recommendations.',
  },
  {
    title: 'Six-monthly Regulation 45 reviews',
    text: 'The Registered Manager reviews patterns, trends, outcomes and effectiveness, signed off by the Responsible Individual.',
  },
  {
    title: 'Quarterly internal audits',
    text: 'Covering safeguarding, incident management, staff supervision and placement outcomes.',
  },
  {
    title: 'Transparent Regulation 40 notifications',
    text: 'Notifications to Ofsted are made in a timely manner, with a clear focus on openness and learning.',
  },
]

export const helplines = [
  {
    name: 'Childline',
    text: 'Free, confidential support for anyone under 19, about anything, any time.',
    phone: '0800 1111',
    url: 'https://www.childline.org.uk',
  },
  {
    name: 'Children’s Commissioner: Help at Hand',
    text: 'Advice and support for children in care, children with a social worker and care leavers.',
    phone: '0800 528 0731',
    url: 'https://www.childrenscommissioner.gov.uk/help-at-hand/',
  },
  {
    name: 'NYAS (National Youth Advocacy Service)',
    text: 'Free, independent advocacy so your wishes and feelings are heard.',
    phone: '0808 808 1001',
    url: 'https://www.nyas.net',
  },
  {
    name: 'Ofsted',
    text: 'The regulator for children’s homes. You can raise a concern about any children’s home.',
    phone: '0300 123 1231',
    url: 'https://www.gov.uk/government/organisations/ofsted',
  },
]
