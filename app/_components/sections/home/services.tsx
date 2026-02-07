"use client";

import React from "react";
import Image from "next/image";

const CreativeWorkSection = () => {
  const categories = [
    { title: "Brand Identity", img: "/images/brand.jpg" },
    { title: "AI Strategy Consulting", img: "/images/ai.jpg" },
    { title: "eBook & Digital Reports", img: "/images/reports.jpg" },
    { title: "Concept Creation", img: "/images/concept.jpg" },
    { title: "Packaging & Merch", img: "/images/merch.jpg" },
  ];

  return (
    <section className="bg-[#F9F9F7] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-16 text-center md:text-left">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#09083B]/60 mb-6">
          Easy & Hassle-Free
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#09083B] leading-tight">
          Every type of creative work you'll <br />
          ever need, <span className="italic font-normal serif-font">and more</span>
        </h2>
      </div>

      {/* HORIZONTAL MARQUEE */}
      <div className="relative w-full overflow-hidden hover-pause py-4">
        <div className="flex animate-marquee-horizontal whitespace-nowrap gap-6 w-fit">
          {/* Mapping twice for the infinite loop effect */}
          {[...categories, ...categories].map((item, idx) => (
            <div 
              key={idx} 
              className="relative w-[200px] md:w-[350px] aspect-[3/4] flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-start">
                <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                  {/* Matching the specific font styling in the image */}
                  <span className="serif-font italic block">{item.title.split(' ')[0]}</span>
                  {item.title.split(' ').slice(1).join(' ')}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWorkSection;