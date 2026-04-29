"use client";

import Image from "next/image";

const HeroImageGrid = () => {
  const images = [
    "/images/hero_img1.avif",
    "/images/hero_img1.jpg",
    "/images/hero_img2.jpg",
    "/images/hero_img3.jpg",
    "/images/hero_img4.jpg",
    "/images/hero_img5.jpg",
    "/images/hero_img6.jpg",
    "/images/hero_img7.jpg",
  ];

  const ScrollingRow = ({
    speed,
  }: {
    speed: string;
  }) => (
    <div className="flex-1 h-full overflow-hidden">
      <div
        className="flex flex-row gap-6 w-max animate-marquee-right hover:[animation-play-state:paused]"
        style={{
          animationDuration: speed,
          transform: "perspective(1200px) rotateX(8deg)",
        }}
      >
        {[...images, ...images].map((src, idx) => {
          const rotation = (idx % images.length - images.length / 2) * 3;

          return (
            <div
              key={idx}
              className="relative w-[200px] h-[260px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-xl"
              style={{
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="hidden md:flex w-[45%] px-4">
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <ScrollingRow speed="60s" />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%) perspective(1200px) rotateX(8deg);
          }
          100% {
            transform: translateX(0%) perspective(1200px) rotateX(8deg);
          }
        }

        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroImageGrid;