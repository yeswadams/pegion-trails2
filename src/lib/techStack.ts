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
  },
  {
    id: "astro",
    name: "Astro",
    category: "Development",
    description: "The web framework for content-driven websites.",
    strengths: ["Zero JS by default", "Island architecture", "Excellent SEO"],
    useCase: "Content-heavy sites, blogs, and documentation.",
    whyWeUse: "Astro's ability to ship zero JavaScript by default makes it perfect for content-rich sites where performance is critical.",
    comparison: "Compared to other SSG frameworks, Astro gives us more control over what JavaScript is sent to the browser."
  },
  {
    id: "tanstack",
    name: "TanStack",
    category: "Development",
    description: "High-quality open-source software for web developers.",
    strengths: ["Powerful state management", "Data fetching", "Type safety"],
    useCase: "Managing complex application state and server data.",
    whyWeUse: "TanStack Query and Table are industry standards that ensure our applications are robust and maintainable.",
    comparison: "It provides a much more refined developer experience than manually managing fetch states and caching."
  },
  {
    id: "django",
    name: "Django",
    category: "Development",
    description: "The web framework for perfectionists with deadlines.",
    strengths: ["Secure by default", "Batteries-included", "Scalable"],
    useCase: "Complex backend systems and data-driven applications.",
    whyWeUse: "Django's robust security features and built-in admin panel allow us to build complex backends rapidly.",
    comparison: "While Node.js is great for real-time, Django's structure is superior for complex relational data handling."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Development",
    description: "JavaScript with syntax for types.",
    strengths: ["Type safety", "Improved IDE support", "Better refactoring"],
    useCase: "Scalable JavaScript development.",
    whyWeUse: "TypeScript prevents a whole class of bugs before they happen, ensuring our code is more reliable.",
    comparison: "It's simply a better way to write JavaScript for any project beyond a single script."
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Development",
    description: "The programming language of the web.",
    strengths: ["Ubiquitous", "Huge ecosystem", "Dynamic"],
    useCase: "Universal web development.",
    whyWeUse: "As the foundation of the modern web, we leverage JS for everything from simple interactions to complex apps.",
    comparison: "While other languages compile to it, understanding core JS is essential for performance tuning."
  },
  {
    id: "react-native",
    name: "React Native",
    category: "Mobile",
    description: "Create native apps for Android and iOS using React.",
    strengths: ["Cross-platform", "Native performance", "Fast refresh"],
    useCase: "Building high-quality mobile applications for both iOS and Android.",
    whyWeUse: "It allows us to share business logic across platforms, significantly reducing development time and cost.",
    comparison: "Unlike Flutter, it uses standard web skills and native UI components for a more 'native' feel."
  },
  {
    id: "adobe",
    name: "Adobe Creative Suite",
    category: "Design",
    description: "Industry-standard creative tools.",
    strengths: ["Comprehensive toolset", "Advanced editing", "Industry standard"],
    useCase: "Asset creation, photo editing, and complex illustrations.",
    whyWeUse: "For high-end creative work, Photoshop and Illustrator remain the gold standard for quality and control.",
    comparison: "While Canva is great for speed, Adobe provides the precision needed for professional branding."
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design",
    description: "Design anything in minutes.",
    strengths: ["Speed", "Ease of use", "Huge template library"],
    useCase: "Social media graphics, presentations, and quick marketing materials.",
    whyWeUse: "Canva allows our team to move fast on social content and basic marketing assets without design bottlenecks.",
    comparison: "It's significantly faster for non-designers and routine tasks compared to professional tools."
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    category: "Video",
    description: "Professional video editing software.",
    strengths: ["Advanced timeline", "Multi-cam editing", "Integration with After Effects"],
    useCase: "Professional video production and high-quality content.",
    whyWeUse: "It's the industry standard for video, offering the depth required for cinematic storytelling.",
    comparison: "It offers significantly more control and precision than mobile-first editors like CapCut."
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Video",
    description: "All-in-one video editor for everyone.",
    strengths: ["Mobile-first", "Trendy effects", "Auto-captions"],
    useCase: "Short-form content for TikTok, Reels, and Shorts.",
    whyWeUse: "CapCut's efficiency for social media content allows us to turn around high-impact video in record time.",
    comparison: "It's the best tool for modern social media trends, beating desktop editors for speed."
  },
  {
    id: "brevo",
    name: "Brevo",
    category: "Marketing",
    description: "All-in-one marketing platform.",
    strengths: ["Email automation", "CRM", "Transactional emails"],
    useCase: "Email marketing, automation, and customer relationship management.",
    whyWeUse: "Brevo offers a powerful suite of tools that grow with our clients' needs, from basic emails to complex CRM.",
    comparison: "It's more cost-effective and flexible for growing businesses than platforms like Mailchimp."
  },
  {
    id: "apollo",
    name: "Apollo.io",
    category: "Marketing",
    description: "Lead intelligence and sales engagement platform.",
    strengths: ["Huge database", "Automated outreach", "Data enrichment"],
    useCase: "B2B lead generation and sales development.",
    whyWeUse: "Apollo gives us the data and tools to scale outreach and find the right partners for our clients.",
    comparison: "The integration of a massive database with an outreach tool makes it superior to using multiple disconnected tools."
  }
];