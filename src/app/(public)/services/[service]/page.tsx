"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";

// -----------------------------
// SERVICE DATA
// -----------------------------
const SERVICES = {
  // --- CREATIVE DESIGN SERVICES ---
  "ad-creative": {
    title: "Ad Creative",
    category: "Creative Design Services",
    description: "High-performing ad visuals engineered for attention, clicks, and conversions across digital platforms.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&auto=format",
    overview: "We design performance-driven ad creatives that blend psychology, design systems, and platform-native optimization. Every asset is built to maximize attention and conversion efficiency.",
    approach: [
      { num: "01", title: "Audience Mapping", desc: "Understanding target behaviors and attention triggers." },
      { num: "02", title: "Creative Direction", desc: "Defining visual hooks and narrative structure." },
      { num: "03", title: "Production System", desc: "Building scalable creative variations." },
      { num: "04", title: "Optimization", desc: "Refining creatives based on performance data." },
    ],
    services: ["Ad Variations", "A/B Testing Sets", "Static & Motion Ads", "Platform Optimization", "Creative Strategy", "Conversion Design"],
    pricing: [
      { name: "Starter Pack", price: "$499", features: ["5 Ad Creatives", "1 Platform Format", "Basic Variations"] },
      { name: "Growth Pack", price: "$999", features: ["15 Ad Creatives", "Multi-platform Adaptation", "A/B Testing Variations", "Priority Delivery"] },
      { name: "Scale Partner", price: "Custom", features: ["Unlimited Creative Production", "Dedicated Creative Lead", "Full Campaign Systems", "Ongoing Optimization"] },
    ],
  },
  "social": {
    title: "Social Media Creative",
    category: "Creative Design Services",
    description: "Engaging assets for every platform.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&auto=format",
    overview: "We craft thumb-stopping social media assets designed to build community, spark conversations, and drive organic engagement across all major platforms.",
    approach: [
      { num: "01", title: "Trend Analysis", desc: "Identifying current visual and cultural trends." },
      { num: "02", title: "Format Adaptation", desc: "Designing natively for Reels, TikToks, and Feeds." },
      { num: "03", title: "Community Focus", desc: "Creating assets that encourage shares and saves." },
      { num: "04", title: "Batch Production", desc: "Delivering consistent volume for content calendars." },
    ],
    services: ["Instagram Carousels", "Short-form Video Edits", "Story Templates", "Profile Branding", "Community Graphics"],
    pricing: [
      { name: "Starter", price: "$399", features: ["10 Static Posts", "2 Platform Formats", "Basic Copywriting"] },
      { name: "Pro", price: "$799", features: ["20 Mixed Assets", "Video Shorts", "Monthly Strategy Call", "Priority Support"] },
      { name: "Enterprise", price: "Custom", features: ["Daily Content", "Dedicated Manager", "Trend Monitoring", "Custom Animations"] },
    ],
  },
  "presentation": {
    title: "Presentation Design",
    category: "Creative Design Services",
    description: "Captivating slides that tell your story.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&auto=format",
    overview: "We transform complex data and narratives into visually compelling, easy-to-digest pitch decks, sales presentations, and keynote slides.",
    approach: [
      { num: "01", title: "Narrative Arc", desc: "Structuring your story for maximum impact." },
      { num: "02", title: "Visual Hierarchy", desc: "Highlighting key data points clearly." },
      { num: "03", title: "Custom Graphics", desc: "Designing bespoke charts and illustrations." },
      { num: "04", title: "Delivery", desc: "Providing editable formats for your team." },
    ],
    services: ["Pitch Decks", "Sales Presentations", "Keynote Slides", "Webinar Visuals", "Custom Templates", "Data Visualization"],
    pricing: [
      { name: "Standard Deck", price: "$599", features: ["Up to 15 Slides", "Custom Theme", "Basic Infographics"] },
      { name: "Premium Deck", price: "$1,299", features: ["Up to 30 Slides", "Advanced Animations", "Custom Illustrations", "2 Revisions"] },
      { name: "Retainer", price: "Custom", features: ["Ongoing Slide Updates", "Template Management", "Priority Turnaround"] },
    ],
  },
  "illustration": {
    title: "Illustration Design",
    category: "Creative Design Services",
    description: "Unique visual storytelling.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1400&auto=format",
    overview: "Bespoke digital illustrations that give your brand a unique voice and separate you from competitors relying on stock imagery.",
    approach: [
      { num: "01", title: "Style Discovery", desc: "Finding the right aesthetic for your brand." },
      { num: "02", title: "Sketching", desc: "Rough concepts and composition planning." },
      { num: "03", title: "Refinement", desc: "Adding color, texture, and detail." },
      { num: "04", title: "Systematization", desc: "Creating a cohesive library of assets." },
    ],
    services: ["Editorial Illustration", "Spot Graphics", "Iconography", "Character Design", "Brand Patterns"],
    pricing: [
      { name: "Spot Bundle", price: "$349", features: ["5 Spot Illustrations", "Vector Formats", "Commercial Rights"] },
      { name: "Hero Bundle", price: "$899", features: ["3 Hero Illustrations", "Custom Icon Set", "Brand Guideline Integration"] },
      { name: "Custom", price: "Custom", features: ["Full Illustration System", "Animation Prep", "Dedicated Illustrator"] },
    ],
  },
  "branding": {
    title: "Branding Services",
    category: "Creative Design Services",
    description: "Custom identity and guidelines.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&auto=format",
    overview: "Comprehensive brand identity development that ensures your company looks professional, cohesive, and memorable at every touchpoint.",
    approach: [
      { num: "01", title: "Brand Audit", desc: "Evaluating current positioning and market." },
      { num: "02", title: "Logo Development", desc: "Crafting the core visual mark." },
      { num: "03", title: "Visual System", desc: "Defining typography, color, and spacing." },
      { num: "04", title: "Guidelines", desc: "Documenting rules for brand consistency." },
    ],
    services: ["Logo Design", "Brand Guidelines", "Typography Selection", "Color Palettes", "Brand Strategy", "Voice & Tone"],
    pricing: [
      { name: "Refresh", price: "$1,499", features: ["Logo Update", "Basic Color Palette", "1 Page Guideline"] },
      { name: "Full Identity", price: "$3,499", features: ["Primary & Secondary Logos", "Full Visual System", "Comprehensive Brand Book", "Social Assets"] },
      { name: "Enterprise", price: "Custom", features: ["Multi-market Strategy", "Sub-brand Architecture", "Ongoing Brand Guardianship"] },
    ],
  },
  "ebooks": {
    title: "eBooks & Reports",
    category: "Creative Design Services",
    description: "Digital content supercharged.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1400&auto=format",
    overview: "We layout long-form content into beautifully readable, lead-generating digital products like eBooks, whitepapers, and annual reports.",
    approach: [
      { num: "01", title: "Content Review", desc: "Analyzing text for flow and breaks." },
      { num: "02", title: "Layout Concept", desc: "Designing cover and core spread." },
      { num: "03", title: "Typesetting", desc: "Formatting typography for readability." },
      { num: "04", title: "Export & Optimize", desc: "Delivering web-ready PDFs." },
    ],
    services: ["eBook Layout", "Whitepapers", "Annual Reports", "Lead Magnets", "Interactive PDFs", "Cover Design"],
    pricing: [
      { name: "Short Form", price: "$499", features: ["Up to 10 Pages", "Cover Design", "Stock Imagery Integration"] },
      { name: "Long Form", price: "$1,199", features: ["Up to 30 Pages", "Custom Graphs/Charts", "Interactive Links", "Source Files"] },
      { name: "Volume", price: "Custom", features: ["Monthly Whitepapers", "Template Creation", "Dedicated Typesetter"] },
    ],
  },
  "concepts": {
    title: "Concept Creation",
    category: "Creative Design Services",
    description: "Big ideas crafted for impact.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&auto=format",
    overview: "Blue-sky thinking and ideation for your next big campaign, product launch, or brand activation.",
    approach: [
      { num: "01", title: "Briefing", desc: "Understanding the core objective." },
      { num: "02", title: "Brainstorming", desc: "Generating divergent ideas." },
      { num: "03", title: "Storyboarding", desc: "Visualizing the top concepts." },
      { num: "04", title: "Pitching", desc: "Presenting concepts for selection." },
    ],
    services: ["Campaign Ideation", "Storyboarding", "Moodboarding", "Activation Concepts", "Creative Copy"],
    pricing: [
      { name: "Sprint", price: "$899", features: ["2 Concepts", "Moodboards", "Initial Copy Lines"] },
      { name: "Deep Dive", price: "$2,499", features: ["4 Concepts", "Full Storyboards", "Mockups", "Presentation Deck"] },
      { name: "Partner", price: "Custom", features: ["Quarterly Ideation", "Executive Workshops", "End-to-End Oversight"] },
    ],
  },
  "print": {
    title: "Print Design",
    category: "Creative Design Services",
    description: "Tangible designs for lasting impressions.",
    image: "https://images.unsplash.com/photo-1561070791-26c11d204a3d?w=1400&auto=format",
    overview: "Pixel-perfect, print-ready designs for physical collateral that feel as good in the hand as they look on screen.",
    approach: [
      { num: "01", title: "Specs Check", desc: "Verifying printer requirements and bleed." },
      { num: "02", title: "Design Phase", desc: "Crafting the visual layout." },
      { num: "03", title: "Proofing", desc: "Checking color profiles and margins." },
      { num: "04", title: "Pre-press", desc: "Delivering final print-ready files." },
    ],
    services: ["Business Cards", "Brochures", "Posters", "Flyers", "Direct Mail", "Event Signage"],
    pricing: [
      { name: "Stationery", price: "$299", features: ["Business Cards", "Letterheads", "Envelopes"] },
      { name: "Marketing Collateral", price: "$699", features: ["Brochure Design", "Flyer Layout", "Print-Ready Export"] },
      { name: "Event Pack", price: "Custom", features: ["Banners", "Booth Design", "Lanyards", "Swag Integration"] },
    ],
  },
  "packaging": {
    title: "Packaging & Merch",
    category: "Creative Design Services",
    description: "Bring your brand to life physically.",
    image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?w=1400&auto=format",
    overview: "Eye-catching packaging and merchandise design that creates an unboxing experience your customers will want to share.",
    approach: [
      { num: "01", title: "Dieline Setup", desc: "Structuring the physical dimensions." },
      { num: "02", title: "Surface Design", desc: "Applying brand visuals to 3D space." },
      { num: "03", title: "Material Selection", desc: "Advising on print finishes and textures." },
      { num: "04", title: "3D Mockups", desc: "Visualizing the final product." },
    ],
    services: ["Box Design", "Label Design", "Apparel Graphics", "Promotional Merch", "3D Visualization"],
    pricing: [
      { name: "Label & Sticker", price: "$499", features: ["1 Product Label", "2 Sticker Designs", "3D Mockup"] },
      { name: "Full Packaging", price: "$1,299", features: ["Box Dieline Design", "Inner Tissue/Inserts", "Multiple Variations", "Source Files"] },
      { name: "Merch Line", price: "Custom", features: ["Apparel Graphics", "Tote Bags", "Manufacturing Handoff"] },
    ],
  },

  // --- SPECIALIZED PRODUCTION SERVICES ---
  "video": {
    title: "Video Production",
    category: "Specialized Production Services",
    description: "Effortless video production at scale.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1400&auto=format",
    overview: "End-to-end video production, from scripting to post-production, delivering high-quality assets for ads, socials, and web.",
    approach: [
      { num: "01", title: "Pre-production", desc: "Scripting, casting, and location scouting." },
      { num: "02", title: "Production", desc: "High-end filming and direction." },
      { num: "03", title: "Post-production", desc: "Editing, color grading, and sound design." },
      { num: "04", title: "Delivery", desc: "Formatting for various platforms." },
    ],
    services: ["Commercials", "Explainer Videos", "Testimonials", "Social Edits", "Color Grading"],
    pricing: [
      { name: "Editing Only", price: "$599", features: ["Editing existing footage", "Color Correction", "Basic Text Graphics"] },
      { name: "Standard Shoot", price: "$2,999", features: ["1 Day Shoot", "Basic Crew", "Final Edit & Cuts"] },
      { name: "Full Production", price: "Custom", features: ["Concept to Delivery", "Full Crew & Talent", "Advanced VFX"] },
    ],
  },
  "motion": {
    title: "Motion Design",
    category: "Specialized Production Services",
    description: "Dynamic visuals for web and ads.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&auto=format",
    overview: "Fluid and engaging 2D/3D animations that explain complex ideas, elevate your brand, and capture user attention.",
    approach: [
      { num: "01", title: "Storyboarding", desc: "Mapping out the animation sequence." },
      { num: "02", title: "Asset Creation", desc: "Designing vectors and elements." },
      { num: "03", title: "Animation", desc: "Bringing elements to life." },
      { num: "04", title: "Sound Design", desc: "Adding audio cues and music." },
    ],
    services: ["UI Animation", "Explainer Animations", "Logo Reveals", "Lottie Animations", "Kinetic Typography"],
    pricing: [
      { name: "Micro-Animations", price: "$399", features: ["3 Lottie Files", "Icon Animations", "Web UI Elements"] },
      { name: "Explainer", price: "$1,499", features: ["60 Second Animation", "Voiceover", "Custom Vectors"] },
      { name: "Campaign", price: "Custom", features: ["Series of Ads", "3D Elements", "Full Sound Design"] },
    ],
  },
  "immersive": {
    title: "Immersive Design",
    category: "Specialized Production Services",
    description: "3D and AR solutions.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1400&auto=format",
    overview: "Cutting-edge 3D modeling, rendering, and Augmented Reality (AR) experiences that push the boundaries of digital interaction.",
    approach: [
      { num: "01", title: "Modeling", desc: "Creating geometry and 3D assets." },
      { num: "02", title: "Texturing", desc: "Applying realistic materials." },
      { num: "03", title: "Lighting", desc: "Setting the scene and mood." },
      { num: "04", title: "Rendering/Export", desc: "Outputting still renders or AR files." },
    ],
    services: ["Product Renders", "3D Environments", "AR Social Filters", "WebGL Assets"],
    pricing: [
      { name: "Still Renders", price: "$699", features: ["3 High-Res Product Renders", "White/Transparent Background"] },
      { name: "AR Filter", price: "$1,299", features: ["Instagram/TikTok Filter", "Face Tracking or World Tracking", "Publishing Support"] },
      { name: "Complex 3D", price: "Custom", features: ["Animated Environments", "WebGL Interactive Models", "Unreal Engine Rendering"] },
    ],
  },
  "email": {
    title: "Email Creation",
    category: "Specialized Production Services",
    description: "Click-worthy engagement-driven layouts.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&auto=format",
    overview: "Beautifully designed, responsive HTML email templates optimized for high deliverability, open rates, and click-throughs.",
    approach: [
      { num: "01", title: "Strategy", desc: "Defining the email goal and audience." },
      { num: "02", title: "Wireframing", desc: "Structuring the content flow." },
      { num: "03", title: "Design", desc: "Creating the visual layout." },
      { num: "04", title: "Coding", desc: "Building responsive HTML/CSS." },
    ],
    services: ["Newsletter Templates", "E-commerce Flows", "Promotional Blasts", "HTML Coding", "Dark Mode Optimization"],
    pricing: [
      { name: "Single Template", price: "$299", features: ["1 Custom Design", "Figma File", "Image Slicing"] },
      { name: "Coded Template", price: "$599", features: ["Design + HTML Code", "Mailchimp/Klaviyo Ready", "Responsive Testing"] },
      { name: "Flow Setup", price: "Custom", features: ["Welcome/Cart Abandonment Flows", "A/B Testing Strategies", "Ongoing Management"] },
    ],
  },
  "web-design": {
    title: "Web Design",
    category: "Specialized Production Services",
    description: "Stunning high-conversion landing pages.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&auto=format",
    overview: "Strategic, aesthetically pleasing, and highly functional web design that turns visitors into leads and customers.",
    approach: [
      { num: "01", title: "UX Wireframing", desc: "Mapping user journeys and structure." },
      { num: "02", title: "UI Design", desc: "Applying visual brand elements." },
      { num: "03", title: "Prototyping", desc: "Creating interactive click-throughs." },
      { num: "04", title: "Handoff", desc: "Delivering developer-ready files." },
    ],
    services: ["Landing Pages", "Corporate Websites", "E-commerce Stores", "Web App UI", "Responsive Design"],
    pricing: [
      { name: "Landing Page", price: "$899", features: ["Single Page Design", "Responsive Layouts", "Figma Delivery"] },
      { name: "Marketing Site", price: "$2,499", features: ["Up to 5 Pages", "Custom Iconography", "Interactive Prototype"] },
      { name: "Full Build", price: "Custom", features: ["UI/UX Design", "Webflow/Next.js Development", "CMS Setup"] },
    ],
  },
  "design": {
    title: "Design Systems",
    category: "Specialized Production Services",
    description: "Robust visual consistency.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=1400&auto=format",
    overview: "Scalable, component-based design systems that empower your product and marketing teams to build faster and maintain consistency.",
    approach: [
      { num: "01", title: "Audit", desc: "Reviewing existing UI inconsistencies." },
      { num: "02", title: "Tokens", desc: "Defining colors, typography, and spacing." },
      { num: "03", title: "Components", desc: "Building reusable UI elements." },
      { num: "04", title: "Documentation", desc: "Creating rules for usage." },
    ],
    services: ["UI Kit Creation", "Figma Variables Setup", "Component Libraries", "Design Documentation", "Accessibility Audits"],
    pricing: [
      { name: "UI Kit", price: "$1,499", features: ["Core Components", "Color/Type Styles", "Figma Auto-layout"] },
      { name: "Full System", price: "$3,999", features: ["Complex Components", "Dark/Light Modes", "Basic Documentation"] },
      { name: "Enterprise", price: "Custom", features: ["React/Code Syncing", "Extensive Documentation", "Team Training"] },
    ],
  },
  "product": {
    title: "Product Design",
    category: "Specialized Production Services",
    description: "Intuitive UX/UI experiences.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1400&auto=format",
    overview: "End-to-end user experience and interface design for software, SaaS platforms, and mobile applications.",
    approach: [
      { num: "01", title: "Research", desc: "User interviews and competitor analysis." },
      { num: "02", title: "UX Flows", desc: "Creating user journeys and wireframes." },
      { num: "03", title: "UI Design", desc: "High-fidelity interface creation." },
      { num: "04", title: "Testing", desc: "Validating designs with real users." },
    ],
    services: ["SaaS Design", "Mobile Apps", "Dashboard UI", "User Research", "Usability Testing"],
    pricing: [
      { name: "Feature Design", price: "$1,299", features: ["Specific Module/Feature", "UX Flow", "UI Handoff"] },
      { name: "App MVP", price: "$4,500", features: ["Core User Journeys", "High-Fidelity Prototype", "Developer Handoff"] },
      { name: "Retainer", price: "Custom", features: ["Dedicated Product Designer", "Continuous Iteration", "User Testing Sessions"] },
    ],
  },
  "copywriting": {
    title: "Copywriting",
    category: "Specialized Production Services",
    description: "Persuasive words for clarity.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&auto=format",
    overview: "Compelling, conversion-focused copy that captures your brand voice and drives action across all your marketing channels.",
    approach: [
      { num: "01", title: "Voice Discovery", desc: "Defining brand tone and messaging pillars." },
      { num: "02", title: "Drafting", desc: "Writing the initial copy." },
      { num: "03", title: "Refinement", desc: "Editing for clarity and impact." },
      { num: "04", title: "SEO Optimization", desc: "Integrating keywords naturally." },
    ],
    services: ["Website Copy", "Ad Copy", "Email Sequences", "Blog Posts", "Brand Messaging Guidelines"],
    pricing: [
      { name: "Ad & Email", price: "$399", features: ["5 Ad Variations", "3 Email Sequence", "1 Revision"] },
      { name: "Website Copy", price: "$999", features: ["Up to 5 Pages", "SEO Meta Data", "Headline Variations"] },
      { name: "Content Partner", price: "Custom", features: ["Monthly Blogs", "Whitepapers", "Ongoing Campaign Copy"] },
    ],
  },

  // --- AI & MARKETING STRATEGY ---
  "ai-services": {
    title: "AI Services",
    category: "AI & Marketing Strategy",
    description: "AI-powered creative + consulting.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&auto=format",
    overview: "Leveraging state-of-the-art artificial intelligence to generate massive creative variations, automate workflows, and unlock new conceptual possibilities.",
    approach: [
      { num: "01", title: "Workflow Audit", desc: "Identifying areas for AI integration." },
      { num: "02", title: "Prompt Engineering", desc: "Crafting specific instructions for models." },
      { num: "03", title: "Generation", desc: "Creating imagery, text, or code at scale." },
      { num: "04", title: "Human Refinement", desc: "Polishing AI output to brand standards." },
    ],
    services: ["AI Image Generation", "Custom GPT Setup", "Workflow Automation", "AI Consulting", "Bulk Variation Production"],
    pricing: [
      { name: "Asset Generation", price: "$499", features: ["50 AI Image Variations", "Prompt Documentation", "Upscaled Files"] },
      { name: "Workflow Setup", price: "$1,499", features: ["Custom AI Agent Setup", "Team Training", "Standard Operating Procedures"] },
      { name: "Enterprise AI", price: "Custom", features: ["Proprietary Model Fine-tuning", "API Integrations", "Retainer Support"] },
    ],
  },
  "marketing-services": {
    title: "Marketing Services",
    category: "AI & Marketing Strategy",
    description: "Multi-market campaign strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format",
    overview: "Data-backed marketing strategies and execution that align your creative assets with measurable business growth and ROI.",
    approach: [
      { num: "01", title: "Market Research", desc: "Analyzing competitors and audience." },
      { num: "02", title: "Strategy Formulation", desc: "Defining channels and budgets." },
      { num: "03", title: "Execution", desc: "Launching and managing campaigns." },
      { num: "04", title: "Reporting", desc: "Tracking metrics and optimizing." },
    ],
    services: ["Go-to-Market Strategy", "Media Buying Management", "SEO Strategy", "Campaign Analytics", "Conversion Rate Optimization"],
    pricing: [
      { name: "Audit & Strategy", price: "$1,299", features: ["Full Funnel Audit", "Competitor Analysis", "Actionable Roadmap"] },
      { name: "Campaign Launch", price: "$2,999", features: ["Setup of 2 Channels", "Tracking Implementation", "1st Month Management"] },
      { name: "Growth Partner", price: "Custom", features: ["Full-service Agency Support", "Performance Guarantees", "Omnichannel Execution"] },
    ],
  }
};

// -----------------------------
// PAGE COMPONENT
// -----------------------------
export default function ServicePage() {
  const params = useParams();
  const slug = params?.service as string;

  const service = SERVICES[slug as keyof typeof SERVICES];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#09083B]">
        <h2 className="text-4xl font-bold mb-4">Service not found</h2>
        <p className="text-gray-500 mb-8">The service you are looking for does not exist or has been moved.</p>
        <Link href="/services" className="bg-[#09083B] text-white px-8 py-4 rounded-xl font-bold">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#09083B]">

      {/* 1. HERO */}
      <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          {service.title}
        </h1>
        <p className="text-gray-500 font-medium italic mt-3">
          Home / Services / {service.title}
        </p>
      </section>

      {/* 2. MAIN VISUAL + OVERVIEW */}
      <section className="px-6 max-w-7xl mx-auto pb-20">

        <div
          className="h-[500px] w-full rounded-[2rem] mb-12 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />

        <div className="grid md:grid-cols-2 gap-16">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              High-Impact Execution
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              {service.overview}
            </p>

            <p className="text-gray-600 leading-relaxed">
              We combine strategy, design psychology, and performance systems
              to ensure your output is not just visually strong —
              but commercially effective.
            </p>
          </div>

          {/* SERVICES INCLUDED */}
          <div className="bg-[#09083B] p-10 rounded-[2rem] text-white">
            <h3 className="text-2xl font-bold mb-8">Services Include:</h3>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {service.services.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-[#C6DFFF] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. APPROACH */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.approach.map((step) => (
              <div
                key={step.num}
                className="p-8 bg-white border border-gray-200 rounded-[2rem]"
              >
                <div className="text-2xl font-bold text-[#09083B] mb-4">
                  {step.num}
                </div>

                <h4 className="text-xl font-bold mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRICING */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Pricing Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {service.pricing.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col p-8 bg-[#C6DFFF] rounded-[2rem] hover:scale-105 transition"
            >
              <h4 className="text-lg font-bold mb-2 opacity-70">
                {tier.name}
              </h4>

              <div className="text-4xl font-bold mb-6 text-[#09083B]">
                {tier.price}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm font-medium text-[#09083B]"
                  >
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className="block w-full text-center mt-auto py-3 bg-[#09083B] text-white rounded-xl font-bold"
              >
                Choose Plan
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* 5. CTA */}
      <section className="px-6 max-w-7xl mx-auto py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* FORM */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Let’s Build Something Powerful
            </h2>

            <form className="space-y-4">
              <input className="w-full p-4 border rounded-xl" placeholder="Your Name" />
              <input className="w-full p-4 border rounded-xl" placeholder="Email" />
              <textarea className="w-full p-4 border rounded-xl h-32" placeholder="Message" />
              <button className="bg-[#09083B] text-white px-8 py-4 rounded-xl font-bold">
                Send Message
              </button>
            </form>
          </div>

          {/* VISUAL */}
          <div className="h-[500px] w-full bg-gray-200 rounded-[2rem] overflow-hidden relative">
             <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${service.image})` }}
             />
             <div className="absolute inset-0 bg-[#09083B]/20 mix-blend-multiply" />
          </div>

        </div>

      </section>

    </div>
  );
}