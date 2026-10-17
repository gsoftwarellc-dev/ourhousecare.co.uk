import { site } from '@/config/site'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'
import { CtaBand } from '@/components/sections/CtaBand'
import { PhotoSlot } from '@/components/ui/PhotoSlot'

const accommodation = [
  {
    title: 'A bedroom of their own',
    text: 'Lockable from the inside, personalised to the young person’s taste, with access to secure storage.',
  },
  { title: 'Staff sleep-in room', text: 'Equipped for overnight support, so a trusted adult is always close by.' },
  { title: 'Family-style bathroom', text: 'A main family bathroom plus a separate staff and guest WC.' },
  {
    title: 'Welcoming living room',
    text: 'Comfortable furniture and space for games, activities and time together.',
  },
  {
    title: 'Open-plan kitchen & dining',
    text: 'Designed for shared meals, cooking sessions and informal conversations.',
  },
  {
    title: 'Office space',
    text: 'For administrative tasks, staff meetings and confidential storage of records.',
  },
  {
    title: 'Private rear garden',
    text: 'Space for play, gardening and outdoor activities, in a safe, private setting.',
  },
  {
    title: 'Driveway & parking',
    text: 'Driveway and on-street parking for visitors, staff and emergency services if required.',
  },
]

const safety = [
  {
    title: 'Discreet security',
    text: 'Thumb-turn locks, window restrictors and a domestic-style alarm system promote safety without feeling institutional.',
  },
  {
    title: 'External CCTV only',
    text: 'CCTV covers the external perimeter only, with no internal cameras, used solely for security and safeguarding in line with data protection law.',
  },
  {
    title: 'Safe Wi-Fi',
    text: 'Wi-Fi with parental controls and an Acceptable Use Policy to safeguard online activity.',
  },
  {
    title: 'Fire safety',
    text: 'Extinguishers, smoke and heat detectors, emergency lighting and a maintained alarm system, supported by a Fire Evacuation Plan.',
  },
]

const amenities = [
  { text: 'Primary and secondary schools, including mainstream and specialist provisions' },
  { text: 'GP surgeries, dentists, opticians and mental health services' },
  { text: 'Public transport links, including bus routes towards London' },
  { text: 'Parks, green spaces and outdoor recreational areas' },
  { text: 'Shops, supermarkets and libraries' },
  { text: 'Youth clubs, sports facilities and leisure centres' },
]

export default function BridgewayHome() {
  return (
    <>
      <Seo
        title={site.homeName}
        description={`${site.homeName} is a warm, homely detached property in a quiet residential street in Dartford, registered to care for one young person aged 8 to 18.`}
      />
      <PageHero
        breadcrumb={site.homeName}
        eyebrow="Our children’s home"
        title={
          <>
            Welcome to {site.homeName}
          </>
        }
        description={`A warm, homely and well-maintained detached property in a quiet residential street in ${site.homeLocation.split(',')[0]}, registered to accommodate one young person aged ${site.ages}.`}
        aside={
          <PhotoSlot
            label="Photo of the house"
            alt="The front of Bridgeway Home"
            className="aspect-[4/3.2] w-full rounded-[2rem]"
            priority
          />
        }
        actions={
          <>
            <ButtonLink to="/referrals" arrow>
              Make a referral
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Arrange a conversation
            </ButtonLink>
          </>
        }
      />

      {/* Intro + gallery */}
      <Section>
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="A real family home"
                title="Comfort and structure, in equal measure"
                description={
                  <div className="prose-care">
                    <p>
                      The home is designed to create a safe, nurturing, therapeutic and family-style environment. It
                      reflects a standard of living comparable to a supportive family home, and is decorated in a
                      child-friendly, age-appropriate way that respects the young person’s individual preferences.
                    </p>
                    <p>
                      As a solo placement, the whole home and team are focused on one young person, so routines,
                      relationships and support can be shaped entirely around their needs.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="lg:col-span-7">
              <Stagger className="grid grid-cols-6 gap-4">
                <StaggerItem className="col-span-6 overflow-hidden rounded-[1.75rem] sm:col-span-4 sm:row-span-2">
                  <PhotoSlot
                    label="Living room photo"
                    alt="The living room at Bridgeway Home"
                    className="aspect-[4/3] size-full sm:aspect-auto"
                  />
                </StaggerItem>
                <StaggerItem className="col-span-3 overflow-hidden rounded-[1.75rem] sm:col-span-2">
                  <PhotoSlot
                    label="Bedroom photo"
                    alt="The young person’s bedroom"
                    className="aspect-square size-full"
                  />
                </StaggerItem>
                <StaggerItem className="col-span-3 overflow-hidden rounded-[1.75rem] sm:col-span-2">
                  <PhotoSlot
                    label="Garden photo"
                    alt="The private rear garden"
                    className="aspect-square size-full"
                  />
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </div>
      </Section>

      {/* Accommodation */}
      <Section tone="tint" id="accommodation">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Accommodation overview"
            title="Everything a young person needs to feel at home"
            description="Every space has been considered to promote comfort, privacy, connection and safety."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {accommodation.map((a) => (
              <StaggerItem
                key={a.title}
                className="group rounded-3xl border border-line bg-white p-7 transition-colors hover:border-plum-200"
              >
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-7 text-muted">{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Safety */}
      <Section>
        <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem]">
              <PhotoSlot
                label="Inside the home photo"
                alt="A homely room inside Bridgeway Home"
                className="aspect-[4/5] size-full"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Safety in the home"
              title="Thoughtful safety measures that still feel like home"
              description="The home is fitted with discreet, proportionate safety features that protect without drawing attention, so the young person can relax and simply live."
            />
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
              {safety.map((s) => (
                <StaggerItem key={s.title} className="flex gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-[0.93rem] leading-7 text-muted">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section tone="tint" id="location">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Location of the premises"
                title="A quiet, community-oriented neighbourhood"
                description={
                  <p>
                    {site.homeName} is located in {site.homeLocation.split(',')[0]}, in a quiet residential area chosen
                    to balance easy access to local amenities with a sense of calm, security and privacy. Education,
                    health, family contact and leisure can all be supported with ease and consistency.
                  </p>
                }
              />
              <Reveal delay={0.1}>
                <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                  {amenities.map(({ text }) => (
                    <li key={text} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                      <span className="text-[0.92rem] leading-6 text-ink-soft">{text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="space-y-6 lg:col-span-6">
              <Reveal delay={0.1}>
                <Card>
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold">Community safety & risk assessment</h3>
                  </div>
                  <p className="mt-5 text-[0.97rem] leading-7 text-muted">
                    The home is not located in a known crime hotspot, and the surrounding area is regarded as safe,
                    quiet and family-oriented. A comprehensive Location Risk Assessment has been completed, including
                    consultation with:
                  </p>
                  <CheckList
                    className="mt-6"
                    items={[
                      'Local Police & Safer Neighbourhood Team (SNT)',
                      'Local crime data and community safety reports',
                      'Assessment of risks such as anti-social behaviour, exploitation or gang influence',
                      'Access to emergency services and support networks',
                    ]}
                  />
                  <p className="mt-6 rounded-2xl bg-plum-50 p-4 text-[0.9rem] leading-6 text-plum-900">
                    The Location Risk Assessment is reviewed annually and updated whenever there is a significant
                    change in the local area or in the young person’s needs. It is available on request.
                  </p>
                </Card>
              </Reveal>
              <Reveal delay={0.15}>
                <Card className="bg-plum-900 text-white">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold text-white">A discreet and homely setting</h3>
                  </div>
                  <p className="mt-5 text-[0.97rem] leading-7 text-white">
                    The house blends naturally into its surroundings, helping to reduce stigma and avoid drawing
                    attention as a children’s home. It has the appearance and layout of a typical family home, with
                    private garden space, off-street parking and no external signage identifying it as a care setting.
                  </p>
                  <p className="mt-4 text-[0.9rem] leading-6 text-white">
                    To protect the young person’s privacy, we do not publish the home’s address online. Professionals
                    can request location details as part of the referral process.
                  </p>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Belonging */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="grid overflow-hidden rounded-[2rem] border border-line bg-white sm:rounded-[2.5rem] lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mt-8">
                <Eyebrow>A sense of belonging</Eyebrow>
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Part of a community, not apart from it
              </h2>
              <p className="mt-5 text-[1.02rem] leading-8 text-muted">
                We believe the location of {site.homeName} plays a vital role in helping young people feel part of a
                community, access ordinary life experiences and enjoy a positive sense of belonging in their local area.
              </p>
              <div className="mt-9">
                <ButtonLink to="/care-and-support" arrow>
                  How we support daily life
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-72">
              <PhotoSlot
                label="Local area photo"
                alt="The local area around Bridgeway Home"
                className="absolute inset-0 size-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
