"use client";

import React from "react";
import Image from "next/image";

const CreativeWorkSection = () => {
  const categories = [
    { img: "/images/marketing-strategy.png" },
    { img: "/images/brand-design.png" },
    { img: "/images/product-design.png" },
    { img: "/images/ai-consulting.png" },
    { img: "/images/seo.png" },
  ];

  return (
    <section className="bg-[#F9F9F7] py-24 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-18 mb-16 text-center md:text-left">
        <p className="text-[16px] uppercase tracking-[0.3em] font-bold text-[#09083B]/60 mb-6">
          Our Top Services
        </p>
        <h2 className="text-4xl md:text-6xl font-normal text-[#09083B] leading-tight">
          We offer creative services you&apos;ll <br />
          ever need, <em>and more</em>
        </h2>
      </div>

      {/* HORIZONTAL MARQUEE */}
      <div className="relative w-full overflow-hidden hover-pause py-4">
        <div className="flex animate-marquee-horizontal whitespace-nowrap gap-6 w-fit">
          {/* Mapping twice for the infinite loop effect */}
          {[...categories, ...categories].map((item, idx) => (
            <div 
              key={idx} 
              className="relative w-[360px] h-[500px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.img}
                alt="Our Service"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient for Text Readability */}              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWorkSection;