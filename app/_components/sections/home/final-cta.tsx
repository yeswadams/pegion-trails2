"use client";

import React from "react";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="bg-[#09083B] text-white py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none">
        <span className="text-[30vw] font-bold whitespace-nowrap">
          CREATIVE
        </span>
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12">
          Ready to scale your{" "}
          <span className="italic font-normal serif-font text-[#CBF382]">
            creative
          </span>
          ?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            href="/demo"
            className="px-10 py-5 text-xl font-bold bg-[#CBF382] text-[#09083B] rounded-full hover:scale-105 transition-transform"
          >
            Book a demo
          </Link>
          <Link
            href="/pricing"
            className="px-10 py-5 text-xl font-bold border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            View pricing
          </Link>
        </div>
        <p className="mt-12 text-white/50 text-sm">
          Join 500+ companies already using Pegion Trails.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
