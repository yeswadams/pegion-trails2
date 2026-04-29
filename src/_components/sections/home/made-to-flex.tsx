"use client";

import React from "react";

const MadeToFlex = () => {
  const steps = [
    {
      title: "Top Talent",
      desc: "We are a team of creatives, designers, strategists, and developers who are ready to help you build the best solutions for your business.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    },
    {
      title: "Fast execution",
      desc: "Receive high-quality deliverables in days, not weeks, with streamlined workflows and rapid turnaround times.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80",
    },
    {
      title: "Real responsiveness",
      desc: "Download all your source files and assets, ready to launch across all your channels.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="bg-[#09083B] py-30 px-4 md:px-12">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16">
          <p className="text-[16px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-6xl font-light text-[#FAF8F9]">
            We are a team of <em>Creatives</em> <br /> Aiming to grow with you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div
                className="relative aspect-3/4 rounded-xl overflow-hidden mb-6 shadow-sm bg-cover bg-center"
                style={{ backgroundImage: `url(${step.img})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-2 bg-[#D1E5FF] p-6">
                  <h3 className="text-3xl font-semibold text-[#09083B]">
                    {step.title}
                  </h3>
                  <p className="text-[18px] text-[#09083B]/70 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeToFlex;
