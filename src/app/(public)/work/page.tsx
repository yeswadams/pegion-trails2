"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import { projects, Project } from "@/lib/projects";

const projectCategories = [
  "All",
  "Website Design",
  "UX/UI Design",
  "Graphics Design",
  "Digital Marketing",
] as const;

type ProjectCategory = (typeof projectCategories)[number];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#F8FAFF] text-[#09083B] pb-12 md:pb-20">
      <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
               <div className="w-8 md:w-12 h-[1px] bg-[#09083B]/20"></div>
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#09083B]/60">
                 Our Projects
               </span>
               <div className="w-8 md:w-12 h-[1px] bg-[#09083B]/20"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#09083B] leading-[1.15] md:leading-[1.1]">
              Our Recent <br className="hidden sm:block" /> 
              <em className="text-[#99C5FF] italic font-serif">Work Portfolio</em>
            </h2>
          </div>

          {/* 2. Responsive Filter Tabs */}
          <div className="flex justify-start md:justify-center mb-12 md:mb-20 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 p-1.5 md:p-2 bg-white rounded-full border border-[#09083B]/5 shadow-sm min-w-max md:min-w-0">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#09083B] text-white shadow-md scale-100 md:scale-105"
                      : "text-[#09083B]/50 hover:text-[#09083B] hover:bg-[#99C5FF]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 3. The Responsive Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* 4. Load More Button */}
          <div className="mt-16 md:mt-24 text-center">
            <button 
              className="inline-flex items-center gap-4 px-8 py-4 bg-white text-[#09083B] border border-[#09083B]/10 rounded-full text-xs font-bold uppercase tracking-widest hover:border-[#99C5FF] shadow-sm transition-all active:scale-95"
            >
              Load More Projects
              <MoveRight className="h-4 w-4 text-[#99C5FF]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col w-full">
      {/* Container Card */}
      <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-3 sm:p-5 md:p-7 border border-[#09083B]/5 group-hover:border-[#99C5FF]/50 transition-all duration-500 shadow-sm hover:shadow-xl">
        
        {/* Project Image Container */}
        <div className="relative w-full aspect-[1.2/1] sm:aspect-[1.4/1] rounded-[1.2rem] sm:rounded-[1.6rem] md:rounded-[2rem] overflow-hidden bg-[#F8FAFF]">
          <Image
            src={project.imageUrl}
            alt={project.projectName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Floating Tags (Hidden on very small screens to avoid clutter) */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 hidden xs:flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-3 sm:px-5 py-1.5 sm:py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] sm:text-[10px] font-bold text-[#09083B] uppercase tracking-widest shadow-sm border border-white">
                   {tag}
                </span>
            ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-6 md:mt-8 flex flex-row items-center justify-between px-2 sm:px-4">
        <div className="flex flex-col gap-1 md:gap-2 pr-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#09083B] tracking-tight leading-tight">
            {project.projectName} <span className="hidden xs:inline">—</span> <br className="xs:hidden" />
            <span className="font-light opacity-60 italic text-lg sm:text-xl md:text-2xl">{project.service}</span>
          </h3>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-[1px] w-4 md:w-6 bg-[#99C5FF]"></div>
            <span className="text-[10px] md:text-xs font-bold text-[#99C5FF] uppercase tracking-[0.15em] md:tracking-[0.2em]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Circular Action Button */}
        <Link
          href={`/work/${project.id}`}
          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#99C5FF]/10 text-[#09083B] rounded-full border border-[#99C5FF]/20 transition-all duration-500 group-hover:bg-[#09083B] group-hover:text-[#99C5FF] group-hover:rotate-[-45deg] active:scale-90"
        >
          <MoveRight className="h-5 w-5 md:h-6 md:w-6" />
        </Link>
      </div>
    </div>
  );
}