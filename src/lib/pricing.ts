// lib/pricing.ts

export type Service = {
    name: string;
    slug: string;
    description: string;
    image?: string;
  };
  
  export type ServiceGroup = {
    category: string;
    slug: string;
    description: string;
    services: Service[];
  };
  
  /**
   * =========================
   * SERVICE GROUPS (SOURCE OF TRUTH)
   * =========================
   */
  
  export const SERVICE_GROUPS: ServiceGroup[] = [
    {
      category: "Creative Design Services",
      slug: "creative-design",
      description: "Foundation services for brand visibility.",
      services: [
        {
          name: "Ad Creative",
          slug: "ad-creative",
          description: "High-performing designs for paid media.",
          image: "/services/ad-creative.jpg",
        },
        {
          name: "Social Media Creative",
          slug: "social-media-creative",
          description: "Engaging assets for every platform.",
          image: "/services/social-media-creative.jpg",
        },
        {
          name: "Presentation Design",
          slug: "presentation-design",
          description: "Captivating slides that tell your story.",
          image: "/services/presentation-design.jpg",
        },
        {
          name: "Illustration Design",
          slug: "illustration-design",
          description: "Unique visual storytelling.",
          image: "/services/illustration-design.jpg",
        },
        {
          name: "Branding Services",
          slug: "branding-services",
          description: "Custom identity and guidelines.",
          image: "/services/branding-services.jpg",
        },
        {
          name: "eBooks & Reports",
          slug: "ebooks-reports",
          description: "Digital content supercharged.",
          image: "/services/ebooks-reports.jpg",
        },
        {
          name: "Concept Creation",
          slug: "concept-creation",
          description: "Big ideas crafted for impact.",
          image: "/services/concept-creation.jpg",
        },
        {
          name: "Print Design",
          slug: "print-design",
          description: "Tangible designs for lasting impressions.",
          image: "/services/print-design.jpg",
        },
        {
          name: "Packaging & Merch",
          slug: "packaging-merch",
          description: "Bringing your physical brand to life.",
          image: "/services/packaging-merch.jpg",
        },
      ],
    },
  
    {
      category: "Specialized Production Services",
      slug: "specialized-production",
      description: "High-fidelity execution for modern platforms.",
      services: [
        {
          name: "Video Production",
          slug: "video-production",
          description: "Effortless video at scale.",
          image: "/services/video-production.jpg",
        },
        {
          name: "Motion Design",
          slug: "motion-design",
          description: "Dynamic visuals for web and ads.",
          image: "/services/motion-design.jpg",
        },
        {
          name: "Immersive Design",
          slug: "immersive-design",
          description: "3D and AR solutions.",
          image: "/services/immersive-design.jpg",
        },
        {
          name: "Email Creation",
          slug: "email-creation",
          description: "Click-worthy, engagement-driven layouts.",
          image: "/services/email-creation.jpg",
        },
        {
          name: "Web Design",
          slug: "web-design",
          description: "Stunning high-conversion landing pages.",
          image: "/services/web-design.jpg",
        },
        {
          name: "Design Systems",
          slug: "design-systems",
          description: "Robust visual consistency.",
          image: "/services/design-systems.jpg",
        },
        {
          name: "Product Design",
          slug: "product-design",
          description: "Intuitive UX/UI experiences.",
          image: "/services/product-design.jpg",
        },
        {
          name: "Copywriting",
          slug: "copywriting",
          description: "Persuasive words for clarity.",
          image: "/services/copywriting.jpg",
        },
      ],
    },
  
    {
      category: "AI & Marketing Strategy",
      slug: "ai-marketing-strategy",
      description: 'The "Intelligence" layer for market leadership.',
      services: [
        {
          name: "AI Services",
          slug: "ai-services",
          description:
            "Human brilliance powered by AI tools + custom AI consulting.",
          image: "/services/ai-services.jpg",
        },
        {
          name: "Marketing Services",
          slug: "marketing-services",
          description:
            "Expert growth and multi-market campaign strategy.",
          image: "/services/marketing-services.jpg",
        },
      ],
    },
  ];
  
  /**
   * =========================
   * PRICING (FLATTENED MAP FOR PRICING PAGES)
   * =========================
   */
  
  export const PRICING = Object.fromEntries(
    SERVICE_GROUPS.flatMap((group) =>
      group.services.map((service) => [
        service.slug,
        {
          title: service.name,
          slug: service.slug,
          description: service.description,
          image: service.image,
          category: group.category,
          overview: service.description,
          tiers: [
            {
              name: "Starter",
              price: "$499",
              features: ["Basic delivery", "Single variation", "Standard turnaround"],
            },
            {
              name: "Growth",
              price: "$999",
              features: [
                "Multiple variations",
                "Faster delivery",
                "Platform optimization",
              ],
            },
            {
              name: "Scale",
              price: "Custom",
              features: [
                "Unlimited production",
                "Dedicated support",
                "Full system design",
              ],
            },
          ],
        },
      ])
    )
  );
  
  /**
   * =========================
   * HELPERS
   * =========================
   */
  
  export function getAllServices(): Service[] {
    return SERVICE_GROUPS.flatMap((group) => group.services);
  }
  
  export function getServiceBySlug(slug: string): Service | undefined {
    return getAllServices().find((s) => s.slug === slug);
  }
  
  export function getGroupBySlug(slug: string): ServiceGroup | undefined {
    return SERVICE_GROUPS.find((g) => g.slug === slug);
  }