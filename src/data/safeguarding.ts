export const absenceCategories = [
  {
    id: 'unauthorised',
    name: 'Unauthorised absence',
    level: 'Lower risk',
    tone: 'gold' as const,
    description:
      'Absence for a short period of time. Sometimes it may be known or suspected where the young person might be.',
    actions: [
      'Carry out a risk assessment, or refer to the risk assessment already in place',
      'Make enquiries to locate the young person and search the premises',
      'Police are not informed at this stage',
      'Inform and contact family and those with Parental Responsibility',
      'Where action is already agreed in the risk assessment, inform and discuss with the on-call manager and/or social worker or Emergency Duty Team',
      'Review the decision not to call the police at hourly intervals, reassessing the category of absence',
      'Once a young person has been absent for longer than one hour, their status is escalated',
    ],
  },
  {
    id: 'absconded',
    name: 'Absconded',
    level: 'Elevated risk',
    tone: 'orange' as const,
    description:
      'For example, where the young person is considered missing and is also looked after as a result of a court order.',
    actions: [
      'Carry out a risk assessment',
      'Make enquiries to locate the young person and search the premises',
      'Inform the on-call manager or senior',
      'Report the young person missing to the police, providing full details',
      'Inform and contact family and those with Parental Responsibility',
      'Inform and discuss with the social worker or Emergency Duty Team',
      'Inform the Youth Offending Service, Probation or Legal as appropriate',
    ],
  },
  {
    id: 'missing',
    name: 'Missing',
    level: 'Highest concern',
    tone: 'red' as const,
    description:
      'Where the young person’s location and/or reason for absence is unknown, and there is cause for concern because of their vulnerability or a potential danger to the public.',
    actions: [
      'Carry out a risk assessment',
      'Make enquiries to locate the young person and search the premises',
      'Inform the on-call manager or senior on duty',
      'Report the young person missing to the police, providing full details',
      'Inform and contact family and those with Parental Responsibility',
      'Inform and discuss with the social worker or Emergency Duty Team',
    ],
  },
]

export const safeguardingConcerns = [
  'Physical, emotional and sexual abuse',
  'Child Sexual Exploitation (CSE)',
  'Child Criminal Exploitation (CCE), including County Lines',
  'Peer-on-peer abuse and harmful sexual behaviour',
  'Radicalisation and extremism',
  'Online safety risks and cyberbullying',
  'Neglect or abandonment',
  'Self-harm, mental health crisis and missing-from-care incidents',
]

export const safeguardingMeasures = [
  { title: 'Robust policy', text: 'A comprehensive Safeguarding and Child Protection Policy.' },
  { title: 'Clear reporting', text: 'Internal reporting procedures, including whistleblowing and escalation.' },
  {
    title: 'Strong partnerships',
    text: 'Close working with the Local Authority Designated Officer (LADO), police and placing authorities.',
  },
  {
    title: 'Specialist training',
    text: 'All staff trained in the Prevent Duty, contextual safeguarding and managing disclosures.',
  },
  { title: 'Safer recruitment', text: 'Procedures aligned with Schedule 2 and Regulation 32.' },
  {
    title: 'Vetting & monitoring',
    text: 'Up-to-date Enhanced DBS checks, professional references and ongoing performance monitoring.',
  },
  {
    title: 'Online safety',
    text: 'Online safety policies and Acceptable Use Agreements for young people and staff.',
  },
  {
    title: 'Individual safety plans',
    text: 'Regular key working and risk assessments exploring each young person’s vulnerabilities.',
  },
]

export const policies = [
  'Safeguarding and Child Protection',
  'Behaviour Support and Physical Intervention',
  'Health and Safety (incl. Fire Safety and First Aid)',
  'Missing-from-Care Protocol',
  'Complaints',
  'Whistleblowing',
  'Equality, Diversity and Inclusion',
  'GDPR and Confidentiality',
  'Staff Conduct and Professional Boundaries',
  'Medication',
  'Food Hygiene',
  'Infection Control',
  'Lone Working and Night Care',
]

export const monitoring = [
  'Daily management oversight of logs, routines and incident records',
  'Monthly Regulation 44 visits by an independent person, with written reports and action plans',
  'Six-monthly Regulation 45 reports by the Registered Manager, signed off by the Responsible Individual and/or Director of Operations',
  'Audits of safeguarding, complaints, health and safety and staff supervision',
  'Feedback from young people, families, professionals and staff',
  'Routine checks of records, risk assessments and care plans',
]
