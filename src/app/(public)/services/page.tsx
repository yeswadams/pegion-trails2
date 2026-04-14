"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERVICE_GROUPS = [
  {
    category: "Creative Design Services",
    description: "Foundation services for high-end brand visibility.",
    services: [
      {
        name: "Ad Creative",
        slug: "ad-creative",
        detail: "High-performing designs for paid media.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format",
      },
      {
        name: "Social Media Creative",
        slug: "social",
        detail: "Engaging assets for every platform.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format",
      },
      {
        name: "Presentation Design",
        slug: "presentation",
        detail: "Captivating slides that tell your story.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format",
      },
      {
        name: "Illustration Design",
        slug: "illustration",
        detail: "Unique visual storytelling.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&auto=format",
      },
      {
        name: "Branding Services",
        slug: "branding",
        detail: "Custom identity and guidelines.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format",
      },
      {
        name: "eBooks & Reports",
        slug: "ebooks",
        detail: "Digital content supercharged.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format",
      },
      {
        name: "Concept Creation",
        slug: "concepts",
        detail: "Big ideas crafted for impact.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format",
      },
      {
        name: "Print Design",
        slug: "print",
        detail: "Tangible designs for lasting impressions.",
        image: "https://images.unsplash.com/photo-1561070791-26c11d204a3d?w=1200&auto=format",
      },
      {
        name: "Packaging & Merch",
        slug: "packaging",
        detail: "Bring your brand to life physically.",
        image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?w=1200&auto=format",
      },
    ],
  },

  {
    category: "Specialized Production Services",
    description: "High-fidelity execution for modern platforms.",
    services: [
      {
        name: "Video Production",
        slug: "video",
        detail: "Effortless video production at scale.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&auto=format",
      },
      {
        name: "Motion Design",
        slug: "motion",
        detail: "Dynamic visuals for web and ads.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format",
      },
      {
        name: "Immersive Design",
        slug: "immersive",
        detail: "3D and AR solutions.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&auto=format",
      },
      {
        name: "Email Creation",
        slug: "email",
        detail: "Click-worthy engagement-driven layouts.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format",
      },
      {
        name: "Web Design",
        slug: "web-design",
        detail: "Stunning high-conversion landing pages.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format",
      },
      {
        name: "Design Systems",
        slug: "design",
        detail: "Robust visual consistency.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=1200&auto=format",
      },
      {
        name: "Product Design",
        slug: "product",
        detail: "Intuitive UX/UI experiences.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format",
      },
      {
        name: "Copywriting",
        slug: "copywriting",
        detail: "Persuasive words for clarity.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format",
      },
    ],
  },

  {
    category: "AI & Marketing Strategy",
    description: "The intelligence layer for market leadership.",
    services: [
      {
        name: "AI Services",
        slug: "ai-services",
        detail: "AI-powered creative + consulting.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format",
      },
      {
        name: "Marketing Services",
        slug: "marketing-services",
        detail: "Multi-market campaign strategy.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#09083B] text-white pb-32">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Our <span className="text-[#C6DFFF] italic">Services</span>
        </motion.h1>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          A curated collection of high-performance creative, production, and AI services designed for modern brands.
        </p>
      </section>

      {/* SERVICE GROUPS */}
      <section className="max-w-6xl mx-auto px-6 space-y-28">

        {SERVICE_GROUPS.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* CATEGORY HEADER */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold border-l-4 border-[#C6DFFF] pl-4">
                {group.category}
              </h2>
              <p className="text-white/60 mt-2">
                {group.description}
              </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">

              {group.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >

                  {/* CARD */}
                  <div className="relative h-[360px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#09083B]">

                    {/* IMAGE LAYER */}
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09083B] via-[#09083B]/40 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 p-6 z-10">

                      <h3 className="text-2xl font-bold group-hover:text-[#C6DFFF] transition">
                        {service.name}
                      </h3>

                      <p className="text-white/60 text-sm mt-2 line-clamp-2">
                        {service.detail}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[#C6DFFF] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all">
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </div>

                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </motion.div>
        ))}

      </section>
    </div>
  );
}