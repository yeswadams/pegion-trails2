"use client";

import Link from "next/link";

type TechItem = {
  name: string;
  slug: string;
  description: string;
};

type Category = {
  title: string;
  items: TechItem[];
};

const techStack: Category[] = [
  {
    title: "Web Development",
    items: [
      { name: "Next.js", slug: "nextjs", description: "High-performance React framework" },
      { name: "Astro", slug: "astro", description: "Ultra-fast content-focused websites" },
      { name: "TanStack", slug: "tanstack", description: "State & data management" },
      { name: "Django", slug: "django", description: "Robust backend systems" },
      { name: "TypeScript", slug: "typescript", description: "Typed JavaScript at scale" },
      { name: "JavaScript", slug: "javascript", description: "Core web language" },
    ],
  },
  {
    title: "Mobile Development",
    items: [
      { name: "React Native", slug: "react-native", description: "Cross-platform mobile apps" },
    ],
  },
  {
    title: "Design Tools",
    items: [
      { name: "Figma", slug: "figma", description: "Collaborative interface design" },
      { name: "Adobe Suite", slug: "adobe", description: "Advanced creative tools" },
      { name: "Canva", slug: "canva", description: "Rapid visual production" },
    ],
  },
  {
    title: "Video & Content",
    items: [
      { name: "Adobe Premiere", slug: "premiere", description: "Professional video editing" },
      { name: "CapCut", slug: "capcut", description: "Fast content creation" },
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      { name: "Brevo", slug: "brevo", description: "Email marketing automation" },
      { name: "Apollo", slug: "apollo", description: "Lead generation & outreach" },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-[100dvh] pt-32 pb-24 px-12 bg-white text-[#0d0b2e]">

      {/* HERO */}
      <section className="mb-24 max-w-4xl">
        <h1 className="font-serif text-[clamp(4rem,8vw,7rem)] leading-[0.9]">
          Our <em className="text-black/40 not-italic">Technology</em>
        </h1>

        <p className="mt-8 text-lg text-black/60 max-w-xl">
          We combine modern engineering, design systems, and growth tools to build scalable,
          high-performance digital products.
        </p>
      </section>

      {/* CATEGORIES */}
      <div className="space-y-20">
        {techStack.map((category) => (
          <section key={category.title}>
            
            {/* CATEGORY TITLE */}
            <h2 className="text-2xl font-medium mb-8">
              {category.title}
            </h2>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/why-us/technology/${item.slug}`}
                  className="group border border-black/10 p-6 rounded-md hover:border-black transition"
                >
                  <h3 className="text-lg font-medium group-hover:underline">
                    {item.name}
                  </h3>

                  <p className="text-sm text-black/60 mt-2">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}