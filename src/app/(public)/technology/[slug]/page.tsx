import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Target, Lightbulb, Scale } from "lucide-react";
import { techStack } from "@/lib/techStack";

export async function generateStaticParams() {
  return techStack.map((tech) => ({
    slug: tech.id,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TechnologyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = techStack.find((t) => t.id === slug);

  if (!tech) notFound();

  return (
    <main className="min-h-screen bg-white text-[#0d0b2e] pt-32 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* BACK LINK */}
        <Link 
          href="/technology" 
          className="flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Technology Stack
        </Link>

        {/* HERO */}
        <section className="mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-xs font-bold uppercase tracking-wider mb-6">
            {tech.category}
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1.1] mb-8">
            {tech.name}
          </h1>
          <p className="text-xl text-black/60 max-w-2xl leading-relaxed">
            {tech.description}
          </p>
        </section>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <DetailCard 
            icon={<Zap className="w-5 h-5" />} 
            title="Core Strengths" 
            content={
              <ul className="space-y-3">
                {tech.strengths.map((strength, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-black/80">{strength}</span>
                  </li>
                ))}
              </ul>
            } 
          />
          <DetailCard 
            icon={<Target className="w-5 h-5" />} 
            title="Primary Use Case" 
            content={<p className="text-black/80 leading-relaxed">{tech.useCase}</p>} 
          />
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-medium">Why We Use It</h2>
            </div>
            <div className="p-8 rounded-2xl bg-black/[0.02] border border-black/5 text-lg text-black/80 leading-relaxed">
              {tech.whyWeUse}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-medium">Strategic Comparison</h2>
            </div>
            <div className="p-8 rounded-2xl bg-black/[0.02] border border-black/5 text-lg text-black/80 leading-relaxed italic">
              &ldquo;{tech.comparison}&rdquo;
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-32 pt-20 border-t border-black/10 text-center">
          <h2 className="text-3xl font-medium mb-6">Interested in our tech stack?</h2>
          <p className="text-black/60 mb-10 max-w-lg mx-auto">
            We use these tools to build high-performance products that scale. 
            Let&apos;s talk about how they can help your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-[#0d0b2e] text-white rounded-full font-medium hover:scale-105 transition-transform"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </main>
  );
}

function DetailCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-colors">
      <div className="flex items-center gap-3 mb-6 text-black/40">
        {icon}
        <h3 className="text-sm font-bold uppercase tracking-widest">{title}</h3>
      </div>
      {content}
    </div>
  );
}
