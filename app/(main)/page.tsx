import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import Stats from '@/components/sections/Stats'
import LeadMagnet from '@/components/sections/LeadMagnet'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'محمد العربي | خبير التجارة الإلكترونية والتسويق الرقمي في السعودية',
  description:
    'نحول متجرك الإلكتروني من مجرد منصة عرض إلى ماكينة مبيعات مستدامة. خبرة +5 سنوات في السوق السعودي.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudies />
      <Stats />
      <LeadMagnet />
      <Testimonials />
      <CTA />
    </>
  )
}
