"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImageGrid from "./heroImageGrid";
import { ArrowRight, ArrowUpRight, CirclePlay } from "lucide-react";
import ShinyText from "@/_components/shared/shinyText";

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat text-[#D1E5FF] overflow-hidden  h-screen w-full px-4 py-12 md:px-20 relative">
      <div className="flex flex-row p-2 items-center justify-center gap-2 text-sm bg-white/10 rounded-full">
        <span className="flex bg-white text-[#09083B] text-xs font-bold rounded-full h-2 w-2">
          .
        </span>
        <ShinyText
          text="Creative Design Agency"
          speed={2}
          delay={0}
          color="#b5b5b5"
          className="text-white font-bold"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
      <h1 className="text-white font-instrument text-6xl font-normal md:text-7xl text-left">
        Imagine a space between <br />
        vision & impact
      </h1>
      <p className="text-white text-xl font-light mt-4">
        That&apos;s where we thrive.
      </p>
      <div className="flex flex-row gap-4">
        <button className="bg-[#D1E5FF] rounded-full text-[#09083B] px-8 py-4 mt-8 flex items-center gap-2">
          Get Started <ArrowUpRight />
        </button>
        <button className="bg-[#D1E5FF]/20 rounded-full text-[#D1E5FF] px-8 py-4 mt-8 flex items-center gap-2">
          <CirclePlay /> Watch Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
