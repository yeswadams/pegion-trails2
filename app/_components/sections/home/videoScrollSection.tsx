"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Play } from "lucide-react";

const VideoScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 to 1) to width percentage (e.g., 60% to 100%)
  const width = useTransform(scrollYProgress, [0.3, 0.6], ["70%", "100%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["24px", "0px"],
  );

  return (
    <section ref={containerRef} className="bg-[#F9F9F7] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        {/* HEADER AREA */}
        <div className="text-center mb-16">
          <p className="text-[18px] uppercase tracking-[0.1px] font-bold text-[#09083B]/60 mb-6">
            Our Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#09083B] leading-tight max-w-3xl mx-auto">
            From high tech to high <br />
            <em className="relative inline-block">fashion and beyond</em>
          </h2>
        </div>

        {/* EXPANDING VIDEO CONTAINER */}
        <div className="flex justify-center rounded-2xl">
          <motion.div
            style={{ width, borderRadius }}
            className="relative aspect-video bg-[#09083B] overflow-hidden shadow-2xl cursor-pointer rounded-full"
            onClick={() => setIsOpen(true)}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="https://www.youtube.com/watch?v=U5f3iufE-bI&pp=ygUSY3JlYXRpdmUgc2hvd3JlZWxz" type="video/mp4" />
            </video>

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md aspect-4/3 rounded-2xl px-4 py-2 md:px-8 md:py-4 flex items-center justify-center border border-white/30">
                <Play className="text-white" size={40} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FULL SCREEN VIDEO MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white text-4xl hover:rotate-90 transition-transform"
            >
              ×
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Full Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoScrollSection;
