"use client";

import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    "Speed",
    "Flexibility",
    "Quality",
    "Scalability",
    "Cost-effectiveness",
  ];

  const alternatives = [
    {
      name: "In-house team",
      desc: "In-house teams don't always have the skill mix or bandwidth to handle every request that the business needs.",
      status: [false, false, true, true, false],
    },
    {
      name: "Creative agencies",
      desc: "Working with full scale creative agencies can be slow, costly, and inflexible.",
      status: [false, false, true, true, false],
    },
    {
      name: "Freelancers",
      desc: "Freelancers can be unreliable and hard to scale, leading to inconsistent work and questionable quality.",
      status: [false, false, true, true, true],
    },
    {
      name: "Self-service tools",
      desc: "These solutions make incremental improvements to capacity, and work mostly for simpler, repetitive tasks.",
      status: [false, false, true, true, false],
    },
  ];

  return (
    <section className="bg-[#09083B] text-white py-24 md:py-32 px-6 md:px-10 lg:px-18">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-20">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-6">
            PEGION TRAILS VS. TRADITIONAL ALTERNATIVES
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-4xl mx-auto">
            Hiring or traditional <br />
            outsourcing? <em>Neither.</em>
          </h2>
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Header Row */}
            <div className="grid grid-cols-[1.5fr_repeat(5,1fr)] gap-4 mb-10 px-12 text-center text-sm font-bold uppercase tracking-widest text-white/40">
              <div /> {/* Spacer for labels */}
              {features.map((f) => (
                <div key={f}>{f}</div>
              ))}
            </div>

            {/* Pegion Trails (The Highlighted Row) */}
            <div className="bg-[#D1E5FF] text-[#09083B] rounded-full grid grid-cols-[1.5fr_repeat(5,1fr)] gap-4 items-center p-8 px-14 mb-10 shadow-[0_20px_50px_rgba(203,243,130,0.15)] transform hover:scale-[1.01] transition-transform duration-500">
              <div>
                <h3 className="text-3xl font-bold">Pegion Trails</h3>
                <p className="text-xs font-semibold opacity-70">
                  The world's fastest-growing creative subscription.
                </p>
              </div>
              {features.map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="bg-[#09083B] rounded-full p-1.5">
                    <Check className="w-5 h-5 text-[#D1E5FF]" strokeWidth={3} />
                  </div>
                </div>
              ))}
            </div>

            {/* Traditional Alternatives */}
            <div className="space-y-2">
              {alternatives.map((alt, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1.5fr_repeat(5,1fr)] gap-4 items-center p-10 px-14 border-b border-white/10 opacity-60 hover:opacity-100 transition-all duration-300 hover:bg-white/5 rounded-2xl"
                >
                  <div>
                    <h4 className="text-xl font-bold mb-2">{alt.name}</h4>
                    <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
                      {alt.desc}
                    </p>
                  </div>
                  {alt.status.map((check, i) => (
                    <div key={i} className="flex justify-center">
                      {check ? (
                        <Check className="w-6 h-6 text-white/80" />
                      ) : (
                        <X className="w-6 h-6 text-white/70" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE RESPONSIVE VIEW */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Pegion Trails Card */}
          <div className="bg-[#D1E5FF] text-[#09083B] p-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-2">Pegion Trails</h3>
            <p className="text-sm font-medium opacity-70 mb-8">
              The top 1% of global creative talent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 text-base font-bold"
                >
                  <div className="bg-[#09083B] rounded-full p-1">
                    <Check className="w-4 h-4 text-[#D1E5FF]" strokeWidth={3} />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Alternative Cards */}
          <div className="space-y-4">
            {alternatives.map((alt, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-8 rounded-3xl border border-white/10"
              >
                <h4 className="text-2xl font-bold mb-3">{alt.name}</h4>
                <p className="text-sm text-white/50 mb-8 leading-relaxed">
                  {alt.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {features.map((f, i) => (
                    <div
                      key={f}
                      className={`flex items-center gap-3 text-sm ${alt.status[i] ? "text-white/80" : "text-white/20 line-through"}`}
                    >
                      {alt.status[i] ? (
                        <Check className="w-4 h-4 text-[#D1E5FF]/60" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
