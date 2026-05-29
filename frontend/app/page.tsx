import React from 'react'
import Hero from '@/components/home/HeroSection'
import DonationServices from '@/components/home/DonationServices'
import DonationPlans from '@/components/home/DonationPlans'
import About from '@/components/home/About'
import CtaSection from '@/components/home/CtaSection'
import Gallery from '@/components/home/Gallery'
import Blogs from '@/components/home/Blogs'
import Testimonial from '@/components/home/Testimonial'

const page = () => {
  return (
    <div>
      <div className="h-2 w-full bg-gradient-to-r from-[#D4A017] via-[#A63D00] to-[#D4A017]" />

      <Hero />
      <DonationServices />
      <DonationPlans />
      <About />
      <Gallery />
      <Testimonial />
      <Blogs />
      <CtaSection />
    </div>
  );
}

export default page
