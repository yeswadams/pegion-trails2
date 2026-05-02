export type TechItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    strengths: string[];
    useCase: string;
    whyWeUse: string;
    comparison: string; 
  };
  
  export const techStack: TechItem[] = [
    {
      id: "nextjs",
      name: "Next.js",
      category: "Development",
      description: "The React framework for the web.",
      strengths: ["Server-side rendering", "SEO optimized", "Fast refresh"],
      useCase: "Building highly scalable, performance-driven web applications.",
      whyWeUse: "Pegion Trails prioritizes speed and search visibility; Next.js allows us to deliver high-performance experiences without compromising on complex features.",
      comparison: "Unlike standard React, Next.js provides out-of-the-box routing and optimization that reduces our development overhead."
    },
    {
      id: "figma",
      name: "Figma",
      category: "Design",
      description: "Collaborative interface design tool.",
      strengths: ["Real-time collaboration", "Prototyping", "Vector networks"],
      useCase: "UI/UX design, wireframing, and team collaboration.",
      whyWeUse: "We prefer Figma because it bridges the gap between design and development, allowing our team to iterate in real-time.",
      comparison: "While Adobe XD is powerful, Figma's web-first approach makes it the clear choice for our distributed creative workflow."
    }
  ];