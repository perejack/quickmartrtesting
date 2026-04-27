import Hero from '@/components/Hero'
import JobListings from '@/components/JobListings'
import WhyJoinUs from '@/components/WhyJoinUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'

const Home = () => {
  return (
    <>
      <Hero />
      <JobListings limit={6} />
      <WhyJoinUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  )
}

export default Home
