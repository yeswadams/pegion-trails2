"use client";

import Image from "next/image";
import { useState } from "react";
import { Linkedin, Twitter, Globe, ArrowLeft } from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  credentials: string;
  tags: string[];
  image: string;
  bio: string;
  experience: number;
  rating: number;
  skills: string[];
  socials: {
    linkedin: string;
    twitter: string;
    website: string;
  };
};

const team: TeamMember[] = [
  {
    id: 1,
    name: "Adams Yeswa",
    firstName: "Adams",
    lastName: "Yeswa",
    role: "Chief Executive Officer",
    credentials: "CEO",
    tags: ["LE", "LEAD ENGINEER & CREATIVE"],
    image: "/team/adams.jpg",
    bio: "Adams leads Pegion Trails with a focus on building high-impact digital experiences and scalable systems.",
    experience: 12,
    rating: 4.8,
    skills: ["Strategic Planning", "System Architecture", "Creative Direction"],
    socials: { linkedin: "https://www.linkedin.com/in/adams-yeswa/", twitter: "#", website: "#" },
  },
  {
    id: 2,
    name: "Keith Koki",
    firstName: "Keith",
    lastName: "Koki",
    role: "Chief Of Operations",
    credentials: "COO",
    tags: ["PM", "SENIOR PRODUCT ENGINEER"],
    image: "/team/keith.jpg",
    bio: "Keith focuses on operational excellence, product systems, and scaling digital products from idea to execution.",
    experience: 8,
    rating: 4.9,
    skills: ["Product Management", "Operations Scaling", "Data Analysis"],
    socials: { linkedin: "https://www.linkedin.com/in/keith-koki-669782240/", twitter: "#", website: "#" },
  },
  {
    id: 3,
    name: "Juliana Omari",
    firstName: "Juliana",
    lastName: "Omari",
    role: "Chief Of Marketing",
    credentials: "CMO",
    tags: ["PR", "MARKETING LEAD & PUBLIC RELATIONS"],
    image: "/team/juliana.jpg",
    bio: "Juliana Omari is a corporate journalist recognized for her unique ability to lead brands through their entire digital evolution. Rooted in academic excellence with a degree in Journalism and Mass Communication from Tharaka University, she brings editorial precision and a researcher's depth to uncovering a brand’s authentic voice. Beyond narrative strategy and expert blog writing, Juliana seamlessly transitions into the visual and technical realms—crafting distinct graphic identities and anchoring them in the digital world through high-performance, SEO-optimized WordPress websites designed for maximum visibility and impact.",
    experience: 8,
    rating: 4.9,
    skills: [
      "Corporate Journalism", 
      "Brand Evolution", 
      "Public Relations", 
      "Editorial Strategy", 
      "Visual Identity Design", 
      "WordPress Development", 
      "Strategic SEO"
    ],
    socials: { 
      linkedin: "https://www.linkedin.com/in/juliana-omari-666a742a4/", 
      twitter: "#", 
      website: "#" 
    },
  },
];

export default function TeamPage() {
  const [index, setIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const current = team[index];

  const prev = () =>
    setIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));

  /* ================= DETAIL VIEW ================= */
  if (selectedMember) {
    const m = selectedMember;

    return (
      <main className="min-h-screen bg-white text-[#0d0b2e] pt-12 pb-16 md:pt-20 md:pb-24 px-5 md:px-16">
        <button
          onClick={() => setSelectedMember(null)}
          className="mt-6 md:mt-10 mb-8 md:mb-12 text-sm font-medium hover:underline flex items-center gap-2 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Back to Team
        </button>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image src={m.image} alt={m.name} fill className="object-cover" priority />
            </div>
            
            {/* Socials */}
            <div className="flex gap-4 mt-6 md:mt-8">
              {m.socials?.linkedin && <a href={m.socials.linkedin} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors" title="LinkedIn"><Linkedin size={18} /></a>}
              {m.socials?.twitter && <a href={m.socials.twitter} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors" title="Twitter"><Twitter size={18} /></a>}
              {m.socials?.website && <a href={m.socials.website} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors" title="Website"><Globe size={18} /></a>}
            </div>
          </div>

          {/* Info Column */}
          <div className="md:col-span-7 flex flex-col pt-2 md:pt-4">
            <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
              {m.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold text-black/50 border border-black/10 px-3 py-1.5 rounded uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
              {m.name}
            </h1>
            
            <p className="text-lg md:text-xl text-black/60 font-light mb-6 md:mb-8">
              {m.role} <span className="mx-2 text-black/20">|</span> {m.credentials}
            </p>

            <p className="text-base md:text-lg leading-relaxed text-black/80 max-w-2xl mb-8 md:mb-10">
              {m.bio}
            </p>

            {/* Skills Section */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {m.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#F5F5F5] rounded-full text-sm font-medium text-[#0d0b2e]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-12 gap-8 pt-8 border-t border-black/5">
              <div className="flex items-baseline gap-2">
                <div className="text-4xl md:text-2xl font-medium">{m.experience}+</div>
                <p className="text-xs uppercase tracking-wider text-black/40">Years Experience</p>
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl md:text-2xl font-medium">{m.rating}</div>
                <p className="text-xs uppercase tracking-wider text-black/40">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ================= CAROUSEL + CULTURE VIEW (Optimized for Mobile) ================= */
  return (
    <main className="bg-white">
      {/* Hero Carousel Section */}
      <section className="relative min-h-screen text-[#0d0b2e] overflow-hidden pt-16 pb-12 md:pt-32 md:pb-24 px-5 md:px-0">
        {/* Layout: Reverse column on mobile to put images first, standard flex on desktop */}
        <div className="flex flex-col-reverse md:flex-row w-full h-full gap-12 md:gap-0">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-16 text-center md:text-left">
            <h1 className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.9] tracking-tighter">
              MEET <br className="hidden md:block" />
              <span className="italic text-[#C6DFFF]">OUR</span> TEAM
            </h1>
            
            <div className="mt-8 md:mt-12 space-y-2">
              <h4 className="font-serif text-xl md:text-4xl leading-tight text-[#09083B]">
                Different Minds. <br className="md:hidden" /> Moving Together.
              </h4>
            </div>
            
            <div className="mt-8 md:mt-10 max-w-[600px]">
              <div className="w-12 h-[2px] bg-[#C6DFFF] mb-6 mx-auto md:mx-0" />
              <p className="text-sm md:text-base leading-relaxed text-black/70 font-light">
                We build world-class digital experiences for ambitious brands.
                Pegion Trails brings together diverse perspectives to shape
                thoughtful, collaborative design. Every project is guided by
                open dialogue, shared purpose and a commitment to meaningful outcomes.
              </p>
            </div>
          </div>

          {/* Right Side: Portrait Stack & Controls */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 md:gap-12">
            {/* The Stacked Carousel Container */}
            {/* Aspect ratio is now responsive width w-[90vw] md:w-[500px] */}
            <div className="relative w-[85vw] sm:w-[60vw] md:w-[500px] aspect-[3/4] flex items-center justify-center">
              {team.map((member, i) => {
                const offset = i - index;
                // Limit display to current and 3 next/prev
                if (Math.abs(offset) > 3) return null;
                
                return (
                  <div
                    key={member.id}
                    onClick={() => offset === 0 && setSelectedMember(member)}
                    className={`absolute top-0 w-full h-full transition-all duration-500 ease-out origin-bottom ${
                      offset === 0 ? "cursor-pointer group" : "pointer-events-none"
                    }`}
                    style={{
                      // Scale down and shift based on stack order
                      zIndex: 10 - Math.abs(offset),
                      transform: `
                        translateX(${offset * -40}px)
                        translateY(${Math.abs(offset) * 20}px)
                        scale(${1 - Math.abs(offset) * 0.1})
                      `,
                      opacity: 1 - Math.abs(offset) * 0.3,
                      filter: `blur(${Math.abs(offset) * 1.5}px)`,
                    }}
                  >
                    {/* Hover state overlay */}
                    {offset === 0 && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md backdrop-blur-[2px]">
                        <span className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-bold shadow-xl tracking-wide uppercase text-xs md:sm">
                          View Profile
                        </span>
                      </div>
                    )}
                    <Image src={member.image} alt={member.name} fill className="object-cover rounded-md shadow-2xl" priority={i === 0}/>
                  </div>
                );
              })}
            </div>

            {/* Selected Member Info & Controls */}
            <div className="text-center md:text-left max-w-[300px] w-full px-5 md:px-0">
              <h2 className="font-serif text-3xl md:text-4xl">{current.name}</h2>
              <p className="text-lg md:text-xl text-black/60 mb-5 md:mb-6">{current.credentials}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 md:mb-8">
                {current.tags.map((tag) => (
                  <span key={tag} className="text-[10px] border border-black/20 px-3 py-1.5 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
                <div className="flex gap-4">
                  <button onClick={prev} className="w-12 h-12 border border-black/10 rounded-full hover:bg-black hover:text-white transition flex items-center justify-center">←</button>
                  <button onClick={next} className="w-12 h-12 border border-black/10 rounded-full hover:bg-black hover:text-white transition flex items-center justify-center">→</button>
                </div>
                <div className="text-sm text-black/50 font-light">
                  <span className="font-medium text-black">{index + 1}</span> / {team.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Culture Section (Optimized for Mobile) */}
      <section className="bg-[#C6DFFF] pt-24 pb-20 md:pt-32 md:pb-32 px-5 md:px-16 text-[#0d0b2e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight font-medium">
              HOW WE THINK.<br />
              HOW WE WORK.
            </h2>
            <p className="mt-8 md:mt-10 text-base md:text-lg opacity-80 leading-relaxed max-w-md mx-auto md:mx-0 font-light">
              We value ideas over hierarchy, progress over perfection, and
              collaboration over competition. Our studio culture encourages
              experimentation, honest feedback, and continuous learning.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start pt-2">
            {["CURIOSITY", "COLLABORATION", "CRAFT", "CLARITY", "GROWTH"].map((tag) => (
              <div key={tag} className="border-2 border-[#0d0b2e] bg-white/30 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-[#0d0b2e] hover:text-white transition-all duration-300 cursor-default tracking-wide">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}