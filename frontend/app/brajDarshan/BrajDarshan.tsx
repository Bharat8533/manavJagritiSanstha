import React from 'react'
import BrajDarshanHero from '../../components/brajDarshan/Hero'
import DarshanMilestones from '../../components/brajDarshan/DarshanMilestones'
import YatraMotive from '../../components/brajDarshan/YatraMotive'
import YatraFacilities from '../../components/brajDarshan/YatraFacilities'
import BookingDesk from '../../components/brajDarshan/BookingDesk'
import BrajGallery from '../../components/brajDarshan/BrajGallery'

const BrajDarshan = () => {
  return (
    <section className="w-full min-h-screen bg-[#FAF6EE] text-[#3D2511] font-sans antialiased selection:bg-[#D4A017]/30"    >
      <BrajDarshanHero />
      <DarshanMilestones />
      <YatraMotive />
      <YatraFacilities />
      <BrajGallery />
      <BookingDesk />
    </section>
  );
}

export default BrajDarshan
