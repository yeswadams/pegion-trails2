"use client";

import Image from "next/image";
import { useState } from "react";
import { Linkedin, Twitter, Globe } from "lucide-react";

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
    bio: "Juliana is well versed and specialized on marketing with a unique approach toward brand credibility.",
    experience: 8,
    rating: 4.9,
    skills: ["Brand Strategy", "Public Relations", "Content Marketing"],
    socials: { linkedin: "https://www.linkedin.com/in/juliana-omari-666a742a4/", twitter: "#", website: "#" },
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
      <main className="min-h-screen bg-white text-[#0d0b2e] pt-20 pb-24 px-8 md:px-16">
        <button
          onClick={() => setSelectedMember(null)}
          className="mt-10 mb-12 text-sm font-medium hover:underline flex items-center gap-2"
        >
          ← Back to Team
        </button>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image src={m.image} alt={m.name} fill className="object-cover" />
            </div>
            
            {/* Socials - Added Optional Chaining as a safety fallback */}
            <div className="flex gap-4 mt-6">
              <a href={m.socials?.linkedin || "#"} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href={m.socials?.twitter || "#"} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href={m.socials?.website || "#"} target= "_blank"  rel="noopener noreferrer" className="p-3 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors"><Globe size={18} /></a>
            </div>
          </div>

          {/* Info Column */}
          <div className="md:col-span-7 flex flex-col pt-4">
            <div className="flex flex-wrap gap-2 mb-6">
              {m.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold text-black/50 border border-black/10 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              {m.name}
            </h1>
            
            <p className="text-xl text-black/60 font-light mb-8">
              {m.role} <span className="mx-2 text-black/20">|</span> {m.credentials}
            </p>

            <p className="text-lg leading-relaxed text-black/80 max-w-2xl mb-10">
              {m.bio}
            </p>

            {/* Skills Section */}
            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {m.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#F5F5F5] rounded-full text-sm font-medium text-[#0d0b2e]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-12 pt-8 border-t border-black/5">
              <div>
                <div className="text-2xl font-medium">{m.experience}+</div>
                <p className="text-xs uppercase tracking-wider text-black/40 mt-1">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl font-medium">{m.rating}</div>
                <p className="text-xs uppercase tracking-wider text-black/40 mt-1">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ================= CAROUSEL + CULTURE VIEW ================= */
  return (
    <main className="bg-white">
      <section className="relative min-h-[100dvh] text-[#0d0b2e] overflow-hidden pt-32 pb-24">
        <div className="flex w-full h-full">
          <div className="w-1/2 pl-12 flex flex-col justify-center">
            <h1 className="font-serif text-[clamp(4rem,8vw,7rem)] leading-[0.9] tracking-tighter">
              MEET <br />
              <span className="italic text-[#C6DFFF]">OUR</span> TEAM
            </h1>
            <div className="mt-12 space-y-2">
              <h4 className="font-serif text-2xl md:text-4xl leading-tight text-[#09083B]">
                Different Minds. Moving Together.
              </h4>
            </div>
            <div className="mt-10 max-w-[600px]">
              <div className="w-12 h-[2px] bg-[#C6DFFF] mb-6" />
              <p className="text-base leading-relaxed text-black/70 font-light">
                We build world-class digital experiences for ambitious brands.
                Pegion Trails brings together diverse perspectives to shape
                thoughtful, collaborative design. Every project is guided by
                open dialogue, shared purpose and a commitment to meaningful outcomes.
              </p>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center gap-12">
            <div className="relative w-[550px] aspect-[3/4]">
              {team.map((member, i) => {
                const offset = i - index;
                if (Math.abs(offset) > 3) return null;
                return (
                  <div
                    key={member.id}
                    onClick={() => offset === 0 && setSelectedMember(member)}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out ${
                      offset === 0 ? "cursor-pointer group" : ""
                    }`}
                    style={{
                      zIndex: 10 - Math.abs(offset),
                      transform: `
                        translateX(${offset * -50}px)
                        translateY(${Math.abs(offset) * 30}px)
                        scale(${1 - Math.abs(offset) * 0.12})
                      `,
                      opacity: 1 - Math.abs(offset) * 0.3,
                      filter: `blur(${Math.abs(offset) * 2}px)`,
                    }}
                  >
                    {offset === 0 && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md backdrop-blur-[2px]">
                        <span className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-xl tracking-wide uppercase text-sm">
                          View Profile
                        </span>
                      </div>
                    )}
                    <Image src={member.image} alt={member.name} fill className="object-cover rounded-md shadow-2xl" />
                  </div>
                );
              })}
            </div>

            <div className="text-left max-w-[300px]">
              <h2 className="font-serif text-4xl">{current.name}</h2>
              <p className="text-xl text-black/60 mb-6">{current.credentials}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {current.tags.map((tag) => (
                  <span key={tag} className="text-[10px] border border-black/20 px-4 py-1 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={prev} className="w-12 h-12 border rounded-full hover:bg-black hover:text-white transition">←</button>
                <button onClick={next} className="w-12 h-12 border rounded-full hover:bg-black hover:text-white transition">→</button>
              </div>
              <div className="mt-8 text-sm text-black/50">{index + 1} / {team.length}</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Culture Section */}
      <section className="bg-[#C6DFFF] px-12 py-32 text-[#0d0b2e]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight font-medium">
              HOW WE THINK.<br />
              HOW WE WORK.
            </h2>
            <p className="mt-10 text-lg opacity-80 leading-relaxed max-w-md">
              We value ideas over hierarchy, progress over perfection, and
              collaboration over competition. Our studio culture encourages
              experimentation, honest feedback, and continuous learning.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {["CURIOSITY", "COLLABORATION", "CRAFT", "CLARITY", "GROWTH"].map((tag) => (
              <div key={tag} className="border-2 border-[#0d0b2e] bg-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0d0b2e] hover:text-white transition-all duration-300 cursor-default">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}