"use client";

import React from "react";
import { Play } from "lucide-react";
import Link from "next/link";

const IntroVideo = () => {
  return (
    <section className="bg-[#FAF8F9] py-12 px-4 md:px-18">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full">
          <span className="text-lg text-[#09083B]/70 uppercase font-medium tracking-wider leading-relaxed mb-8 max-w-full border-b border-[#09083B]/70 pb-4">
            A New Era of Creative Marketing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#09083B] leading-[1.1] mb-8">
            The kind of creative partner <em>you've been asking for</em>
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
            Book a demo
          </Link>
        </div>

        {/* Right Video Player */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            alt="Video Preview"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#CBF382] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#09083B] fill-current" />
            </div>
          </div>
          {/* Text Overlay mimicking screenshot */}
          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-7xl font-bold opacity-20">
              ur creative
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
