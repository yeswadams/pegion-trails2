"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Search } from "lucide-react";

export default function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasBeenClosed) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 65) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    console.log(isVisible);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
  };

  useEffect(() => {
  if (isVisible) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-7xl bg-[#09083b] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            >
              <X size={20} />
            </button>

            {/* Content Side */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#b8d7ff] mb-6 block">
                Add Pegion Trails to Preferred Sources
              </span>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                Get the news that <br /> matters.
              </h2>
              <p className="text-sm md:text-lg text-white/70 mb-10 leading-relaxed font-light">
                Take control of your search today by adding Pegion Trails to
                your Google's preferred sources. You'll get:
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Top articles around AI & creative at scale for enterprises",
                  "Know first about our upcoming events and reports",
                  "Much more!",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between group border-b border-white/10 pb-4"
                  >
                    <span className="text-white text-sm md:text-base font-medium">
                      {item}
                    </span>
                    <Check size={16} className="text-[#b8d7ff]" />
                  </li>
                ))}
              </ul>

              <a
                href="https://www.google.com/preferences/source?q=pegiontrails.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d1e5ff] text-[#0a1e1b] font-bold px-10 py-5 rounded-full transition-all text-sm md:text-lg shadow-lg inline-block w-fit"
              >
                Add us here
              </a>
            </div>

            {/* Image Side */}
            <div className="hidden md:block w-1/2 relative bg-[#0a1e1b]">
              <div className="absolute inset-x-0 bottom-0 top-0 h-full w-full">
                <Image
                  src="/images/scroll-popup-img.png"
                  alt="Get the news that matters"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay for that specific UI look from the screenshot */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0a1e1b] via-transparent to-transparent pointer-events-none" />

              {/* Floating UI Element (mimicking the screenshot) */}
              <div className="absolute inset-0 flex items-end justify-end p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-[280px] scale-90 md:scale-100">
                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <span className="text-[10px] font-bold text-gray-400">
                      Choose your preferred sources
                    </span>
                    <X size={10} className="text-gray-400" />
                  </div>
                  <p className="text-[10px] text-gray-500 mb-4 leading-tight">
                    Admins change your preference at any time. You'll also see
                    some other news for your searches.
                  </p>
                  <div className="space-y-3 ">
                    <div className="bg-gray-50 rounded-lg p-2 border flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">
                        pegiontrails.com
                      </span>
                      <Search size={10} className="text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-blue-500/20 bg-blue-50/50">
                      <div className="w-5 h-5 rounded-full bg-[#09083b] flex items-center justify-center text-[8px] text-white">
                        P
                      </div>
                      <div>
                        <p className="text-[10px] text-[#09083b] font-bold">Pegion Trails</p>
                        <p className="text-[8px] text-gray-600">
                          pegiontrails.com
                        </p>
                      </div>
                      <Check size={10} className="ml-auto text-blue-500" />
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] text-[#09083b] font-bold">
                        Your sources (1)
                      </span>
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px]">
                        +
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                      <div className="w-5 h-5 rounded-full bg-[#0a1e1b] flex items-center justify-center text-[8px] text-white">
                        P
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[10px] text-[#09083b] font-bold">Pegion Trails</p>
                        <p className="text-[8px] text-gray-600">
                          pegiontrails.com
                        </p>
                      </div>
                      <Check size={10} className="ml-auto text-blue-500" />
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white text-[10px] font-bold py-2 rounded-lg">
                    Select results
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
