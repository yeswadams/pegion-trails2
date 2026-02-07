"use client";

import React from "react";

const Showcase = () => {
  const items = [
    {
      title: "SaaS Platform Design",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9?auto=format&fit=crop&q=80",
      size: "col-span-2 row-span-2",
    },
    {
      title: "Brand Identity",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
      size: "col-span-1 row-span-1",
    },
    {
      title: "Mobile App UX",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
      size: "col-span-1 row-span-1",
    },
    {
      title: "Social Media Campaign",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
      size: "col-span-1 row-span-2",
    },
    {
      title: "Presentation Design",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80",
      size: "col-span-2 row-span-1",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#09083B] mb-6">
            Built to scale your quality.
          </h2>
          <p className="text-lg text-[#09083B]/60 max-w-[600px]">
            See how the world's fastest-growing companies use our platform to
            launch global campaigns and ship products faster than ever.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-[800px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.size} relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-bold text-xl drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
