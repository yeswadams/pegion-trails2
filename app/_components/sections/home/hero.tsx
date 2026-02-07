"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImageGrid from "./heroImageGrid";

const Hero = () => {
  return (
    <section className="bg-[#09083B] text-[#D1E5FF] overflow-hidden h-screen w-full px-4 md:px-10">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT AREA */}
        <div className="w-full lg:w-[45%] px-6 py-16 md:px-10 lg:py-0 self-center">
          <div className="max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8">
              We{" "}
              <em>
                Overthink
              </em>{" "}
              so that you don't have to.™
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-full">
              Behind every simple idea is a lot of thinking. We do that thinking early, thoroughly, and on purpose so your brand can move faster with confidence
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="px-8 py-4 text-lg font-bold bg-[#D1E5FF] text-[#09083B] rounded-full hover:scale-105 transition-transform"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL GRID AREA */}
        <HeroImageGrid />
      </div>
    </section>
  );
};

export default Hero;
