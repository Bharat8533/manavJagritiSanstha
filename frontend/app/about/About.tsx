import React from "react";
import AboutMaharajJi from "@/components/home/About";
import Hero from "@/components/about/Hero";
import Timeline from "@/components/about/Timeline";
import CtaSection from "@/components/home/CtaSection";

const About = () => {
  return (
    <>
      <Hero />
      <AboutMaharajJi />
      <Timeline />
      <CtaSection />
    </>
  );
};

export default About;
