"use client";

import React from "react";

const LogoCloud = () => {
  const logos = [
    "Amazon",
    "Salesforce",
    "Booking.com",
    "Vimeo",
    "Reddit",
    "Puma",
    "Cisco",
    "L'Oreal",
    "Fortune 500",
  ];

  return (
    <section className="bg-[#FAF8F9] py-12 border-b border-gray-100 h-[400px] flex flex-col items-center justify-center">
      <div className="max-w-full mx-auto px-6 md:px-10">
        <p className="text-center text-[24px] tracking-[0.1px] font-semibold text-gray-600 mb-8">
          Trusted by 500+ global brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale w-full">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-xl md:text-2xl font-bold tracking-tight text-[#09083B]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
