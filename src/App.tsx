import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MotionConfig } from 'motion/react'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'

const About = lazy(() => import('@/pages/About'))
const BridgewayHome = lazy(() => import('@/pages/BridgewayHome'))
const OurApproach = lazy(() => import('@/pages/OurApproach'))
const CareSupport = lazy(() => import('@/pages/CareSupport'))
const Safeguarding = lazy(() => import('@/pages/Safeguarding'))
const YoungPeople = lazy(() => import('@/pages/YoungPeople'))
const OurTeam = lazy(() => import('@/pages/OurTeam'))
const Careers = lazy(() => import('@/pages/Careers'))
const Referrals = lazy(() => import('@/pages/Referrals'))
const StatementOfPurpose = lazy(() => import('@/pages/StatementOfPurpose'))
const Contact = lazy(() => import('@/pages/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="bridgeway-home" element={<BridgewayHome />} />
            <Route path="our-approach" element={<OurApproach />} />
            <Route path="care-and-support" element={<CareSupport />} />
            <Route path="safeguarding" element={<Safeguarding />} />
            <Route path="young-people" element={<YoungPeople />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="careers" element={<Careers />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="statement-of-purpose" element={<StatementOfPurpose />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
