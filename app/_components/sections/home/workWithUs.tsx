import { div } from "framer-motion/m";
import React from "react";
import Link from "next/link";

const WorkWithUs = () => {
  return (
    <div className="flex flex-col md:flex-row sm:gap-4 md:gap-0 lg:gap-0 h-auto">
      <div className="flex flex-col w-full md:w-1/2 bg-[#d1e5ff] text-[#09083B] p-8 md:p-16 lg:p-24 justify-between items-stretch">
        <div className="flex flex-col gap-4">
            <span className="text-[16px] md:text-[18px] font-normal mb-4 border-b-2 border-[#09083B] w-full pb-4 uppercase tracking-[0.2em]">
          Work with the Best
        </span>
        <h2 className="text-xl md:text-4xl lg:text-6xl mt-4">
          Quality Services for <em>Quality Brands</em>
        </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-base lg:text-3xl mt-4">
            Work with top global creative talent – elite designers, project
            managers, animators, copywriters, AI technologists and more,
            recruited from the best brands and agencies.
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-4">
            Plus, a dedicated project manager to ensure your briefs stay on
            track from start to finish.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="px-8 py-4 text-lg font-bold bg-[#09083B] text-[#D1E5FF] rounded-full hover:scale-105 transition-transform"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#e9eee2] p-8 md:p-16 lg:p-24 bg-[url('/images/bg-cta.jpg')] bg-cover bg-center focus:outline-offset-2 h-[600px] md:h-auto"></div>
    </div>
  );
};

export default WorkWithUs;
