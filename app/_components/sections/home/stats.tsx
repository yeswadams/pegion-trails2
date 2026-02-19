"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      value: "500+",
      label:
        "Startup, enterprises and mid-market companies trust Pegion Trails to deliver pixel-perfect creative, at scale.",
    },
    {
      value: "70k+",
      label: "Projects delivered to this day and counting.",
    },
    {
      value: "94%",
      label:
        "Brands see a three-year ROI of 94% on their Pegion Trails subscription.",
      link: { text: "Read more in the Forrester TEI report", href: "#" },
    },
    {
      value: "6 months",
      label:
        "Brands see a 6-month payback period on their Pegion Trails subscription.",
      link: { text: "Read more in the Forrester TEI report", href: "#" },
    },
  ];

  return (
    <section className="bg-[#09083B] text-white py-24 md:py-32 px-6 md:px-10 lg:px-18">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold text-white/50 mb-6">
            Success in numbers
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mx-auto">
            The best return on <em>your investment</em>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row-reverse justify-between items-start gap-8 py-10 md:py-16 border-b border-white/50 ${
                idx % 2 === 0 ? "" : ""
              } min-h-[260px]`}
            >
              <em className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter shrink-0 leading-none">
                {stat.value}
              </em>
              <div className="flex flex-col gap-6 max-w-sm">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  {stat.label}
                </p>
                {stat.link && (
                  <Link
                    href={stat.link.href}
                    className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#D1E5FF] transition-colors border-b border-white w-fit pb-1 group"
                  >
                    {stat.link.text}
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
