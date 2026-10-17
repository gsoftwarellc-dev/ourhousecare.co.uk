import { ExternalLink } from 'lucide-react'
import { site } from '@/config/site'
import { helplines, img } from '@/data/content'
import { PageHero, Seo } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal'
import { Card, CheckList, Eyebrow, Section, SectionHeading } from '@/components/ui/Section'

const rights = [
  { title: 'To be treated with dignity', text: 'You will always be treated with dignity, respect and fairness.' },
  { title: 'To say what you think', text: 'You can share your views freely, and they will be taken seriously.' },
  { title: 'To know your rights', text: 'You’ll get clear information about your rights and how to raise concerns.' },
  { title: 'To shape your home', text: 'You can influence how the home is run through regular chats and feedback.' },
  { title: 'To make choices', text: 'You’ll be supported to make choices and grow your independence.' },
]

const sayItems = [
  'Regular house meetings where your ideas count',
  'Key working sessions about your goals, worries and plans',
  'A placement plan that reflects your voice and preferences',
  'Choosing meals, activities, furnishings and house rules',
  'Encouragement to take part in your care planning meetings',
  'Your own Children’s Guide, with useful contacts inside',
]

export default function YoungPeople() {
  return (
    <>
      <Seo
        title="Young people: your rights & voice"
        description="Information for children and young people at Bridgeway Home: your rights, how to have your say, how to make a complaint, advocacy and free helplines."
      />
      <PageHero
        breadcrumb="Young people"
        eyebrow="For children & young people"
        title={
          <>
            Your voice matters. Your rights matter.
          </>
        }
        description={`Whether you live at ${site.homeName} or you’re thinking about moving in, you have the right to be safe, to be heard, and to help make decisions about your life.`}
        image={img('future-leader')}
        imageAlt="A young person wearing a ‘Future Leader’ t-shirt"
        actions={
          <>
            <ButtonLink to="#helplines" arrow>
              People you can talk to
            </ButtonLink>
            <ButtonLink to="#complaints" variant="outline">
              Making a complaint
            </ButtonLink>
          </>
        }
      />

      {/* Rights */}
      <Section>
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Your rights"
            title="What you can always expect from us"
            description="We follow the United Nations Convention on the Rights of the Child (UNCRC). That means every young person in our care has these rights, every single day."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {rights.map((r) => (
              <StaggerItem
                key={r.title}
                className="rounded-3xl border border-line bg-white p-6 text-center transition-[translate,box-shadow] duration-500"
              >
                <h3 className="text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-6 text-muted">{r.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Have your say */}
      <Section tone="tint">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={img('friends-together')}
                alt="A group of young people sitting together with arms around each other"
                loading="lazy"
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Having your say"
              title="You help shape your home, your routines and your plans"
              description="We make sure your views are part of every planning and review meeting, and that your voice is written down accurately in your records and reports."
            />
            <Reveal delay={0.1} className="mt-9">
              <CheckList items={sayItems} columns={2} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Advocacy */}
      <Section>
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <div className="mt-7">
                <Eyebrow>Advocacy</Eyebrow>
              </div>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">You can have an independent advocate</h2>
              <p className="mt-4 text-[0.98rem] leading-8 text-muted">
                An advocate is someone who doesn’t work for the home and is there just for you. They can help you share
                your views, especially at reviews, if you disagree with a decision, or if you want to make a complaint.
                We’ll help you get in touch with one whenever you want.
              </p>
              <CheckList
                className="mt-6"
                items={[
                  'We give you contact details for local advocacy services',
                  'We help you make contact and attend meetings',
                  'We work with your advocate as part of your planning and reviews',
                ]}
              />
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-plum-900 p-6 text-white sm:p-8">
              <Eyebrow light>Building trust</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                It’s safe to speak up here
              </h2>
              <p className="mt-4 text-[0.98rem] leading-8 text-white">
                Real participation needs trusting relationships. Our team is here to listen, so you can feel safe to
                express yourself, challenge decisions and grow in confidence. We celebrate who you are and support you
                to build a strong sense of identity.
              </p>
              <CheckList
                light
                className="mt-6"
                items={[
                  'Your rights as a looked-after child',
                  'How to contact Ofsted, the Children’s Commissioner and Childline',
                  'How to complain, and what happens next',
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Complaints */}
      <Section tone="tint" id="complaints" className="scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Complaints"
            title="If you’re unhappy about something, we want to know"
            description="Concerns, feedback and complaints are welcomed, listened to and responded to with respect and openness. Making a complaint will never get you into trouble."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">For young people</h3>
                </div>
                <CheckList
                  className="mt-6"
                  items={[
                    'Child-friendly complaint forms',
                    'Clear information about who to speak to if you’re unhappy',
                    'Visual guides in your Children’s Guide and Welcome Pack',
                    'Chances to raise things informally in key work or house meetings',
                    'Every complaint taken seriously, logged and followed up with you, so you understand the outcome',
                  ]}
                />
                <p className="mt-6 flex gap-3 rounded-2xl bg-gold-50 p-4 text-[0.92rem] leading-6 text-ink-soft ring-1 ring-inset ring-gold-200">
                  You will never be punished or treated differently for making a complaint.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">For families, professionals & the public</h3>
                </div>
                <p className="mt-6 text-[0.97rem] leading-7 text-muted">
                  We welcome complaints or concerns from family members, social workers, professionals and members of
                  the public. All complaints are handled in line with our Complaints Policy, which sets out clear
                  timescales, escalation routes and a fair, impartial approach to investigation and resolution.
                </p>
                <p className="mt-4 text-[0.97rem] leading-7 text-muted">
                  Details of how to make a complaint are available on request, in the home and in the Children’s Guide.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink to="/contact?enquiry=complaint" arrow>
                    Raise a concern
                  </ButtonLink>
                  <ButtonLink to={`mailto:${site.email}?subject=Complaint`} variant="outline">
                    Email us
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Helplines */}
      <Section id="helplines" className="scroll-mt-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="People you can talk to"
              title="Free, confidential helplines, outside the home"
              description="You can contact any of these organisations at any time, about anything. You don’t need to ask anyone’s permission."
            />
            <Reveal delay={0.1} className="shrink-0">
              <div className="rounded-2xl border-2 border-red-200 bg-red-50 px-5 py-4">
                <p className="text-[0.85rem] font-medium text-red-800">In danger right now?</p>
                <a href="tel:999" className="text-2xl font-bold tracking-tight text-red-700">
                  Call 999
                </a>
              </div>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helplines.map((h) => (
              <StaggerItem key={h.name} className="flex flex-col rounded-3xl border border-line bg-white p-7">
                <h3 className="text-lg font-semibold leading-snug">{h.name}</h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-6 text-muted">{h.text}</p>
                <a
                  href={`tel:${h.phone.replace(/\s/g, '')}`}
                  className="mt-6 inline-flex items-center gap-2 text-xl font-bold tracking-tight text-plum-700 hover:text-plum-900"
                >
                  {h.phone}
                </a>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-muted hover:text-plum-700"
                >
                  Visit website
                  <ExternalLink aria-hidden className="size-3.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>
    </>
  )
}
