import React from "react";
import Hero from "@/app/_components/sections/home/hero";
import LogoCloud from "@/app/_components/sections/home/logo-cloud";
import IntroVideo from "@/app/_components/sections/home/intro-video";
import Process from "@/app/_components/sections/home/made-to-flex";
import Stats from "@/app/_components/sections/home/stats";
import Showcase from "@/app/_components/sections/home/showcase";
import Comparison from "@/app/_components/sections/home/comparison";
import Testimonials from "@/app/_components/sections/home/testimonials";
import VideoScrollSection from "@/app/_components/sections/home/videoScrollSection";
import Services from "@/app/_components/sections/home/services";

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
    </div>
  );
}
