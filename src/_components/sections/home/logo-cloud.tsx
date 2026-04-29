// "use client";

// import React, { useRef } from "react";
// // import ScrollReveal from "./ScrollReveal"; // Ensure this is the GSAP version provided earlier

// const LogoCloud = () => {
//   // We use a ref to the tall outer section to ensure
//   // GSAP triggers correctly within this block.
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const logos = [
//     "Amazon",
//     "Salesforce",
//     "Booking.com",
//     "Vimeo",
//     "Reddit",
//     "Puma",
//     "Cisco",
//     "L'Oreal",
//     "Fortune 500",
//   ];

//   return (
//     /**
//      * LAYER 1: THE TRACK (Outer Section)
//      * h-[200vh] creates the scroll duration.
//      * Relative positioning ensures it stays in the document flow.
//      */
//     <section
//       ref={sectionRef}
//       className="relative h-[200vh] bg-[#FAF8F9] w-full"
//     >
//       {/* /** * LAYER 2: THE STICKY BOX * This pins the content to the screen. *
//       h-screen keeps it exactly the size of the viewport. */ }
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
//         {/* LAYER 3: THE CONTENT WRAPPER */}
//         <div className="max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-col items-center">
//           <ScrollReveal
//             baseOpacity={0.1}
//             enableBlur={true}
//             baseRotation={0}
//             blurStrength={12}
//             containerClassName="w-full text-center"
//             /* Using clamp for fluid typography that won't break on small screens */
//             textClassName="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-tight text-black"
//             /* End the animation when the bottom of our tall section reaches the bottom of the screen */
//             wordAnimationEnd="bottom bottom"
//           >
//             We craft brand identities, narratives, and digital experiences that
//             keep up with your ambition. So you can focus on building what
//             matters, while we shape how the world sees it.
//           </ScrollReveal>

//           {/* Logo Section - Positioned below the reveal */}
//           <div className="mt-16 md:mt-24 w-full">
//             <p className="text-center text-xs md:text-sm tracking-[0.2em] font-bold text-gray-400 mb-10 uppercase">
//               Trusted by 500+ global brands
//             </p>
//             <div className="grid grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-30 grayscale transition-opacity hover:opacity-60">
//               {logos.map((logo) => (
//                 <span
//                   key={logo}
//                   className="text-lg md:text-xl font-bold text-[#09083B]"
//                 >
//                   {logo}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoCloud;
