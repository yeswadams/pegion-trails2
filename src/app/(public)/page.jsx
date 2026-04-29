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
import ScrollRevealSection from "@/_components/shared/scrollRevealText";
import Link from "next/link";
import Image from "next/image";

const TEXT =
  "We craft brand identities, narratives, and digital experiences that keep up with your ambition. So you can focus on building what matters, while we shape how the world sees it.";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans overflow-x-hidden">
      <Hero />
      <AboutUs />
      {/* <ScrollRevealSection text={TEXT} /> */}
      {/* <LogoCloud /> */}
      {/* <IntroVideo /> */}
      <Process />
      <Stats />
      <VideoScrollSection />
      <Services />
      <Comparison />
      {/* <Showcase /> */}
      <Testimonials />
      <OurDifference />
      <WorkWithUs />
    </div>
  );
}

function AboutUs() {
  return (
    <section className="bg-white py-12 md:py-30 px-4 md:px-18 flex flex-col items-start justify-center h-auto">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch justify-start gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full">
          <span className="text-lg text-[#09083B]/70 uppercase font-medium tracking-wider leading-relaxed mb-8 max-w-full border-b border-[#09083B]/70 pb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#09083B] leading-[1.1] mb-8">
            We help <em>brands grow</em>  by telling exceptional stories.
          </h1>
          <p className="text-2xl text-[#09083B]/70 leading-relaxed mb-8 max-w-[600px]">
            Pegion Trails is your dedicated, on-call creative team to expand
            your production capacity and extend your team’s creative
            capabilities.{" "}
          </p>
          <p className="text-lg text-[#09083B]/70 leading-relaxed mb-8 max-w-full">
            See us as an extension of your team, freeing you to focus on your
            most impactful and creative work.
          </p>
          <Link
            href="/demo"
            className="px-8 py-4 text-lg font-bold bg-[#09083B] w-fit text-[#D1E5FF] rounded-full hover:scale-105 transition-transform shrink-2"
          >
            Book a call
          </Link>
        </div>

        {/* Right Video Player */}
          <Image
            src="/images/about_us.jpg"
            width={400}
            height={400}
            alt="Video Preview"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        
      </div>
    </section>
  );
}
