// lib/projects.ts

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type GalleryImage = {
  url: string;
  alt: string;
};

export type Project = {
  id: string;
  category: "Website Design" | "UX/UI Design" | "Graphics Design" | "Digital Marketing";
  service: string;
  projectName: string;
  tags: string[];
  imageUrl: string;
  isLarge: boolean;
  
  // Detailed Page Content
  clientName: string;
  duration: string;
  location: string;
  projectOverview: string[];
  challengeDescription: string;
  solutionDescription: string;
  keyFeatures: string[];
  galleryImages: GalleryImage[];
  impactDescription: string;
  testimonial: Testimonial;
};

export const projects: Project[] = [
  {
    id: "podcast-mobile-app",
    category: "UX/UI Design",
    service: "Mobile App Solution",
    projectName: "Podcast",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    imageUrl: "/projects/podcast-app.jpg",
    isLarge: false,
    clientName: "Podcast Media Group",
    duration: "4 Months",
    location: "London, UK",
    projectOverview: [
      "We developed a comprehensive mobile solution for a growing podcast network looking to centralize their content.",
      "The app focuses on user discovery and seamless offline playback experiences."
    ],
    challengeDescription: "The main challenge was handling high-fidelity audio streaming over low-bandwidth connections while maintaining a clean, minimal interface.",
    solutionDescription: "We implemented an intelligent caching system and a UI that prioritizes accessible playback controls and content categorization.",
    keyFeatures: [
      "Seamless Audio Streaming",
      "Offline Download Manager",
      "Dynamic Content Discovery",
      "Social Sharing Integration"
    ],
    galleryImages: [
      { url: "/projects/podcast-detail-1.jpg", alt: "User dashboard view" },
      { url: "/projects/podcast-detail-2.jpg", alt: "Player interface view" }
    ],
    impactDescription: "Post-launch, user engagement increased by 45% and the app maintained a 4.8-star rating on the App Store.",
    testimonial: {
      quote: "The Pegion Trails team turned our vision into a polished reality. The discovery features are a game changer for our listeners.",
      name: "Sarah Jenkins",
      role: "Director of Product",
      avatar: "/testimonials/sarah.jpg"
    }
  },
  {
    id: "podcast-landing-page",
    category: "Website Design",
    service: "Mobile Application Landing Page",
    projectName: "Podcast",
    tags: ["Web Design", "Landing Page", "Wireframe"],
    imageUrl: "/projects/podcast-landing.png",
    isLarge: false,
    clientName: "Podcast Media Group",
    duration: "2 Months",
    location: "London, UK",
    projectOverview: [
      "A high-conversion landing page designed to drive app downloads and explain the core features of the Podcast app."
    ],
    challengeDescription: "Creating a landing page that felt as premium as the app itself while optimizing for fast load times across mobile devices.",
    solutionDescription: "We used a modern stack with Next.js to ensure lightning-fast performance and immersive scroll animations.",
    keyFeatures: [
      "High Conversion CTA Sections",
      "Device Mockup Showcases",
      "Interactive Feature Scroller",
      "SEO Optimized Performance"
    ],
    galleryImages: [
      { url: "/projects/podcast-web-1.png", alt: "Landing page hero section" },
      { url: "/projects/podcast-web-2.png", alt: "Landing page footer section" }
    ],
    impactDescription: "The landing page achieved a 12% conversion rate in the first month of the marketing campaign.",
    testimonial: {
      quote: "Our app downloads saw a significant spike immediately after this landing page went live.",
      name: "Mark Thompson",
      role: "Head of Marketing",
      avatar: "/testimonials/mark.jpg"
    }
  },
  {
    id: "dating-mobile-app",
    category: "UX/UI Design",
    service: "Mobile Application Solution",
    projectName: "Dating App",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    imageUrl: "/projects/dating-app.png",
    isLarge: false,
    clientName: "Soulmate Tech",
    duration: "5 Months",
    location: "New York, USA",
    projectOverview: [
      "A relationship-focused mobile application that uses psychological profiling to match compatible users."
    ],
    challengeDescription: "The difficulty lay in making a complex onboarding process feel light, engaging, and non-intrusive.",
    solutionDescription: "We designed a gamified onboarding experience with soft gradients and playful animations to reduce drop-off rates.",
    keyFeatures: [
      "Advanced Profile Matching",
      "Gamified Onboarding",
      "Secure Video Chat",
      "Real-time Messaging"
    ],
    galleryImages: [
      { url: "/projects/dating-detail-1.png", alt: "Match profile screen" },
      { url: "/projects/dating-detail-2.png", alt: "Onboarding flow screen" }
    ],
    impactDescription: "User retention for the first week increased by 30% compared to the client's previous MVP.",
    testimonial: {
      quote: "They understood our niche perfectly and created a design that feels both safe and exciting.",
      name: "Robert Fox",
      role: "Founder, Soulmate",
      avatar: "/testimonials/robert-fox.jpg"
    }
  },
  // Add remaining projects (dating-landing-page, carwash-mobile-app, carwash-landing-page) 
  // following the same structure above to ensure the [slug] page works perfectly.
];