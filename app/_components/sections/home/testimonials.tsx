"use client";
import React, { useState, useEffect, useCallback } from 'react';

/**
 * Note: In this environment, we use standard <img> and <a> tags 
 * instead of 'next/image' and 'next/link' to ensure compatibility.
 */

const testimonials = [
  {
    id: 1,
    quote: "We have access and responsiveness to meet our business-critical needs.",
    boldQuote: "The combination of quality, speed and 24/7 support allows us to be agile and efficient.",
    author: "Joseph Bradley",
    role: "Global VP of IoT & Digital Services at Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    nps: "100",
    turnaround: "24h-48h",
    caseStudyTitle: "How Satair Uses Pegion Trails to Maintain Brand Consistency at...",
    company: "Cisco",
    caseStudyLink: "#"
  },
  {
    id: 2,
    quote: "The speed of execution is what sets this team apart.",
    boldQuote: "We've scaled our creative output by 3x without increasing our internal headcount.",
    author: "Sarah Chen",
    role: "Director of Marketing at Satair",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Satair_Logo.svg/1200px-Satair_Logo.svg.png",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    nps: "98",
    turnaround: "12h-24h",
    caseStudyTitle: "Scaling Global Brand Assets with Design Subscriptions",
    company: "Satair",
    caseStudyLink: "#"
  },
  {
    id: 3,
    quote: "Pegion Trails' design subscription model has transformed how we approach creative work.",
    boldQuote: "The flexibility and quality have allowed us to launch campaigns faster than ever.",
    author: "Rafael Garcia",
    role: "Creative Director at Satair",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Satair_Logo.svg/1200px-Satair_Logo.svg.png",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    nps: "98",
    turnaround: "12h-24h",
    caseStudyTitle: "Scaling Global Brand Assets with Design Subscriptions",
    company: "Satair",
    caseStudyLink: "#"
  }
];

export default function App() {
  const originalCount = testimonials.length;
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  const [activeIndex, setActiveIndex] = useState(originalCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // State to handle window width safely for SSR/Client consistency
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AVATAR_SIZE_DESKTOP = 128;
  const AVATAR_SIZE_MOBILE = 80;
  const GAP = 24;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (activeIndex >= originalCount * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(originalCount);
      }, 700);
      return () => clearTimeout(timer);
    } else if (activeIndex < originalCount) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(originalCount * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, originalCount]);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const realIndex = activeIndex % originalCount;

  return (
    <main className="min-h-screen bg-[#d1e5ff] flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 font-sans text-[#1a1a1a] overflow-hidden">
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
        
        {/* 1. AVATAR COLUMN/ROW */}
        <div className=" hidden md:block flex-col relative w-full md:w-40 h-24 md:h-[450px] overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r md:bg-gradient-to-b from-[#d1e5ff] via-transparent to-[#d1e5ff]" />
          
          <div 
            className={`flex flex-row md:flex-col items-center h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ 
              transform: `translate3d(
                ${windowWidth < 768 
                  ? `calc(50% - ${activeIndex * (AVATAR_SIZE_MOBILE + GAP) + (AVATAR_SIZE_MOBILE / 2)}px)` 
                  : '0px'}, 
                ${windowWidth >= 768 
                  ? `${160 - activeIndex * (AVATAR_SIZE_DESKTOP + GAP)}px` 
                  : '0px'}, 
                0px)` 
            }}
          >
            {displayTestimonials.map((t, idx) => (
              <button
                key={`${t.id}-${idx}`}
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(idx);
                }}
                className={`relative rounded-full overflow-hidden cursor-pointer shrink-0 transition-all duration-700 ${
                  activeIndex === idx 
                    ? 'w-20 h-20 md:w-32 md:h-32 opacity-100 scale-110 ring-4 ring-white shadow-xl' 
                    : 'w-16 h-16 md:w-24 md:h-24 opacity-30 scale-75 grayscale blur-[0.5px]'
                }`}
                style={{ 
                  marginRight: windowWidth < 768 ? `${GAP}px` : '0px',
                  marginBottom: windowWidth >= 768 ? `${GAP}px` : '0px'
                }}
              >
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* 2. CONTENT AREA */}
        <div className="flex-1 w-full text-center md:text-left relative min-h-[350px] md:min-h-[300px]">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`transition-all duration-1000 ease-in-out absolute inset-0 flex flex-col justify-center ${
                realIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img src={t.logo} alt="logo" className="h-6 md:h-8 mb-6 md:mb-8 object-contain mx-auto md:mx-0" />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-tight">
                "{t.quote} <span className="font-bold">{t.boldQuote}</span>"
              </h2>
              <div className="mt-6 md:mt-8">
                <p className="text-sm font-semibold tracking-wide uppercase">{t.author}</p>
                <p className="text-xs md:text-sm text-gray-600 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. NAVIGATION */}
        <div className="flex md:flex-col gap-4 md:absolute md:right-0 bottom-0 md:bottom-auto">
          <button onClick={handlePrev} className="p-3 md:p-4 border border-black/20 rounded-full hover:bg-white hover:shadow-lg transition-all active:scale-95">
            <svg className="w-5 h-5 -rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
          </button>
          <button onClick={handleNext} className="p-3 md:p-4 border border-black/20 rounded-full hover:bg-white hover:shadow-lg transition-all active:scale-95">
            <svg className="w-5 h-5 -rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>

      {/* 4. STATS BAR */}
      <div className="mt-12 md:mt-24 w-full max-w-7xl pt-8 border-t border-black/10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full lg:w-auto">
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-serif leading-none transition-all duration-500">{testimonials[realIndex].nps}</p>
            <p className="text-[10px] md:text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Average NPS</p>
          </div>
          <div className="hidden md:block h-12 w-[1px] bg-black/10" />
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-serif leading-none transition-all duration-500">{testimonials[realIndex].turnaround}</p>
            <p className="text-[10px] md:text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Turnaround time</p>
          </div>
        </div>

        <div className="w-full max-w-md bg-white/30 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 border border-white/50 shadow-sm">
          <div className="relative h-12 w-12 md:h-16 md:w-16 rounded-xl overflow-hidden shrink-0">
            <img src={testimonials[realIndex].image} alt="case study" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{testimonials[realIndex].company}</p>
            <a href={testimonials[realIndex].caseStudyLink} className="block font-medium text-sm md:text-base text-[#1a1a1a] line-clamp-1 hover:text-blue-600 transition-colors">
              {testimonials[realIndex].caseStudyTitle}
            </a>
          </div>
          <div className="p-2 bg-white rounded-full shadow-sm shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </div>
      </div>
    </main>
  );
}