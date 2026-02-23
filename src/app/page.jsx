import React from "react";
import Hero from "@/_components/sections/home/hero";
import LogoCloud from "@/_components/sections/home/logo-cloud";
import IntroVideo from "@/_components/sections/home/intro-video";
import Process from "@/_components/sections/home/made-to-flex";
import Stats from "@/_components/sections/home/stats";
import Showcase from "@/_components/sections/home/showcase";
import Comparison from "@/_components/sections/home/comparison";
import Testimonials from "@/_components/sections/home/testimonials";
import VideoScrollSection from "@/_components/sections/home/videoScrollSection";
import Services from "@/_components/sections/home/services";
import OurDifference from "@/_components/sections/home/ourDifference";
import WorkWithUs from "@/_components/sections/home/workWithUs";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans overflow-x-hidden">
      <Hero />
      <LogoCloud />
      <IntroVideo />
      <Process />
      <Stats />
      <VideoScrollSection />
      <Services />
      <Comparison />
      <Showcase />
      <Testimonials />
      <OurDifference />
      <WorkWithUs />
    </div>
  );
}