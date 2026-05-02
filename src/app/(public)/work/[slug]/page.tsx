import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2, ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";

// Required to generate paths at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// Next.js 15 requires params to be a Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  // Await the params to prevent the "Performance" measurement error
  const { slug } = await params;
  
  const project = projects.find((p) => p.id === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#F8FAFF] text-[#09083B]">
      <section className="pt-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link href="/work" className="flex items-center gap-2 text-sm font-medium hover:underline mb-12 text-[#09083B]/70 group">
             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
             Back to All Projects
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight max-w-4xl mb-16">
            {project.projectName} — <span className="font-light opacity-60 italic">{project.service}</span>
          </h1>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 mb-20 md:mb-28">
            <Image
              src={project.imageUrl}
              // Fixed: Ensure your lib/projects.ts includes heroAlt in the Project type
              alt={project.projectName} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-16 lg:gap-24 items-start">
          <div className="space-y-16">
            <div className="prose prose-lg max-w-none text-[#09083B]/80 leading-relaxed font-light space-y-6">
              {project.projectOverview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <NarrativeSection title="The Challenge" content={project.challengeDescription} />
            <NarrativeSection title="The Solution" content={project.solutionDescription} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 text-base font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#99C5FF]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-inner border border-[#09083B]/5">
                  <Image src={img.url} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>

            <NarrativeSection title="The Impact" content={project.impactDescription} />
          </div>

          <aside className="sticky top-28 space-y-8 bg-white border border-[#09083B]/5 p-10 md:p-12 rounded-[2rem] shadow-lg">
            <h3 className="text-2xs font-bold uppercase tracking-[0.25em] text-[#09083B]/50 mb-10">Project Details</h3>
            <SidebarMeta title="Project Category" value={project.category} />
            <SidebarMeta title="Client" value={project.clientName} />
            <SidebarMeta title="Duration" value={project.duration} />
            <SidebarMeta title="Location / Country" value={project.location} />
          </aside>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white px-6 border-t border-[#09083B]/5">
        <div className="max-w-5xl mx-auto p-10 md:p-16 bg-[#F8FAFF] rounded-[2.5rem] border border-[#09083B]/5 shadow-inner">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg">
              <Image src={project.testimonial.avatar} alt={project.testimonial.name} fill className="object-cover" />
            </div>

            <div className="flex flex-col text-center md:text-left gap-6">
              <div className="flex justify-center md:justify-start gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#99C5FF] text-[#99C5FF]" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-[#09083B]">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <cite className="not-italic mt-4 flex flex-col gap-1">
                <span className="text-lg font-bold">{project.testimonial.name}</span>
                <span className="text-sm font-light opacity-60 italic">{project.testimonial.role}</span>
              </cite>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NarrativeSection({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#09083B]">{title}</h2>
      <p className="text-lg text-[#09083B]/80 font-light leading-relaxed max-w-4xl">{content}</p>
    </div>
  );
}

function SidebarMeta({ title, value }: { title: string; value: string }) {
  return (
    <div className="space-y-1.5 flex flex-col pt-6 border-t border-[#09083B]/5">
      <span className="text-xs uppercase tracking-widest text-[#09083B]/50">{title}</span>
      <p className="text-lg font-medium text-[#09083B] leading-snug">{value}</p>
    </div>
  );
}