"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollRevealSection({ text }: { text: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const words = text.split(" ");

  return (
    /*
       Total height: 800vh
       - Reveal completes at ~50% (400vh)
       - Text stays visible for remaining 400vh while user scrolls to next section
    */
    <div ref={targetRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        <p className="flex flex-wrap justify-center max-w-7xl text-center text-4xl md:text-6xl font-medium leading-tight">
          {words.map((word, i) => {
            // Reveal completes at 50% of scroll (so text stays visible for 2nd half)
            const wordProgress = i / words.length;
            const start = wordProgress * 0.5;
            const end = start + (0.5 / words.length);
            return (
              <Word 
                key={i} 
                word={word} 
                progress={smoothProgress} 
                range={[start, end]} 
              />
            );
          })}
        </p>
      </div>
    </div>
  );
}

function Word({ word, progress, range }: { word: string, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const scale = useTransform(progress, range, [0.9, 1]);
  
  return (
    <span className="relative mx-1.5 lg:mx-2.5">
      <motion.span 
        style={{ opacity, scale }} 
        className="text-white inline-block"
      >
        {word}
      </motion.span>
    </span>
  );
}