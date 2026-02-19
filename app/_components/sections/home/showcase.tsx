"use client";
import React from "react";

const Showcase = () => {
  const items = [
  {
    title: "Oyster",
    category: "Illustration Design, eBook & Digital Reports",
    img: "/1.jpg",
    span: "md:col-span-2"
  },
  {
    title: "Pernod Ricard",
    category: "eBook & Digital Reports, Video Production",
    img: "/2.jpg",
    span: "md:col-span-2"
  },
  {
    title: "Picsart",
    category: "Ad Creative, Social Media Creative",
    img: "/3.jpg",
    span: "md:col-span-2"
  },
  {
    title: "Roland",
    category: "Ad Creative, Social Media Creative",
    img: "/4.jpg",
    span: "md:col-span-2"
  },
  {
    title: "Reddit",
    category: "Motion Design, Social Media Creative",
    img: "/5.jpg",
    span: "md:col-span-2"
  },
  {
    title: "Antler",
    category: "Brand Identity, Motion Design, Social Media Creative",
    img: "/6.jpg",
    span: "md:col-span-2"
  }
];

  return (
    <section className="bg-white py-24 px-4 md:px-18">
      <div className="max-w-full mx-auto">
        <div className="mb-16 flex flex-col">
          <p className="text-[16px] uppercase tracking-[0.2em] font-bold mb-4 uppercase tracking-[0.3em] font-bold text-[#09083B]">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#09083B] mb-6">
            See how <em>top brands</em> are using Pegion Trails.
          </h2>
          {/* <p className="text-lg text-[#09083B]/60 max-w-[600px]">
            See how the world's fastest-growing companies use our platform to
            launch global campaigns and ship products faster than ever.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 auto-rows-[400px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.span} relative group rounded-2xl overflow-hidden`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-[800px]">
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
        </div> */}
      </div>
    </section>
  );
};

export default Showcase;
