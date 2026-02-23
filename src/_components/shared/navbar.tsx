"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  MoveUpRight,
  ArrowUpRight,
  LoaderPinwheel,
  Megaphone,
  BookOpen,
  BarChart3,
  PlayCircle,
  Disc,
  ExternalLink,
} from "lucide-react";
// --- TYPES & DATA ---
// Defining the structure of our navigation data for type safety
type SubLink = {
  label: string;
  desc?: string;
  href: string;
  isNew?: boolean;
  icon?: React.ReactNode; // Placeholder for icons
};

type MegaMenuColumn = {
  heading: string;
  links: SubLink[];
};

type NavItem = {
  label: string;
  href?: string;
  megaMenuData?: MegaMenuColumn[];
};

// Sample Data mirroring the structure in the image
const navData: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaMenuData: [
      // Handled by specialized ServicesMegaMenu component
    ],
  },
  { label: "Our work", href: "/work" },
  {
    label: "Why us",
    href: "/why-us",
    megaMenuData: [
      // Handled by specialized WhyUsMegaMenu component
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    megaMenuData: [
      // This will be handled by a specialized renderer
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

const learningCenterItems = [
  {
    title: "Events & Summits",
    desc: "Our upcoming events and recordings",
    icon: <Megaphone className="w-5 h-5" />,
    href: "/resources/events",
  },
  {
    title: "Guides",
    desc: "Insights from marketing leaders",
    icon: <BookOpen className="w-5 h-5" />,
    href: "/resources/guides",
  },
  {
    title: "Reports",
    desc: "Data for smarter decisions",
    icon: <BarChart3 className="w-5 h-5" />,
    href: "/resources/reports",
  },
  {
    title: "Video library",
    desc: "Superside's latest videos",
    icon: <PlayCircle className="w-5 h-5" />,
    href: "/resources/videos",
  },
  {
    title: "Playbooks",
    desc: "Quick ways to step up your game",
    icon: <Disc className="w-5 h-5" />,
    href: "/resources/playbooks",
  },
];

// --- MAIN NAVBAR COMPONENT ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // 1. Handle Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Check initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Handle Mouse Leave behavior for the entire nav area
  const handleMouseLeaveNav = () => {
    setHoveredNavItem(null);
  };

  const activeMegaMenu = navData.find(
    (item) => item.label === hoveredNavItem,
  )?.megaMenuData;

  // Dynamic classes based on state
  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled || hoveredNavItem || isMobileMenuOpen
      ? "bg-[#09083B] shadow-scroll py-3"
      : "bg-transparent py-5"
  }`;

  const linkColorClass =
    isScrolled || hoveredNavItem || isMobileMenuOpen
      ? "text-white"
      : "text-white"; // Always white for contrast based on image request, adjust if needed for transparent state against light bg.

  return (
    <nav
      ref={navRef}
      className={navbarClasses}
      onMouseLeave={handleMouseLeaveNav}
    >
      <div className="max-w-full mx-auto px-4 md:px-10 lg:px-18 flex items-center justify-between font-sans">
        {/* Logo */}
        <Link href="/" className="z-10">
          {/* Replace with your actual Logo Image/SVG */}
          <h1 className={`text-2xl font-bold ${linkColorClass}`}>
            Pegion Trails
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navData.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() =>
                  item.megaMenuData && setHoveredNavItem(item.label)
                }
                className="relative py-2"
              >
                {item.megaMenuData ? (
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-blue-300 ${linkColorClass}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${hoveredNavItem === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`text-[15px] font-medium transition-colors hover:text-blue-300 ${linkColorClass}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/demo"
            className={`px-6 py-2.5 text-[15px] font-bold justify-center items-center rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg ${
              isScrolled || hoveredNavItem
                ? "bg-[#D1E5FF] text-[#09083B]"
                : "bg-white text-[#09083B]"
            }`}
          >
            Book a demo
          </Link>
          <Link
            href="/login"
            className={`px-6 py-2.5 text-[15px] font-bold border-2 rounded-full transition-all duration-200 ${
              isScrolled || hoveredNavItem
                ? "border-white text-white hover:bg-white hover:text-[#09083B]"
                : "border-white text-white hover:bg-white hover:text-[#09083B]"
            }`}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 ${linkColorClass}`}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MEGA MENU CONTAINER (Desktop) */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out origin-top border-t border-[#09083B]/10 shadow-xl z-40 bg-mega-bg text-mega-text ${
          activeMegaMenu ||
          hoveredNavItem === "Resources" ||
          hoveredNavItem === "Why us" ||
          hoveredNavItem === "Services"
            ? "opacity-100 visible scale-y-100"
            : "opacity-0 invisible scale-y-95"
        } ${hoveredNavItem === "Why us" ? "h-[45vh] overflow-hidden" : "h-[90vh] overflow-y-auto"}`}
        onMouseEnter={() => setHoveredNavItem(hoveredNavItem)}
      >
        {hoveredNavItem === "Resources" ? (
          <ResourcesMegaMenu />
        ) : hoveredNavItem === "Why us" ? (
          <WhyUsMegaMenu />
        ) : hoveredNavItem === "Services" ? (
          <ServicesMegaMenu />
        ) : (
          activeMegaMenu &&
          activeMegaMenu.length > 0 && (
            <div className="max-w-full mx-auto px-6 md:px-10 py-12">
              <div className="grid grid-cols-3 gap-12">
                {activeMegaMenu.map((column, idx) => (
                  <div key={idx}>
                    <h3 className="inline-block bg-deep-blue text-white text-sm font-bold px-4 py-2 rounded-md mb-6">
                      {column.heading} ›
                    </h3>
                    <ul className="space-y-6">
                      {column.links.map((link, linkIdx) => (
                        <li key={linkIdx} className="group">
                          <Link href={link.href} className="block">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-mega-text font-bold text-[15px] group-hover:text-blue-700 transition">
                                {link.label}
                              </span>
                              {link.isNew && (
                                <span className="bg-[#CBF382] text-deep-blue text-xs font-bold px-2 py-0.5 rounded-sm">
                                  New
                                </span>
                              )}
                            </div>
                            {link.desc && (
                              <p className="text-mega-text/70 text-sm">
                                {link.desc}
                              </p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
        {activeMegaMenu &&
          activeMegaMenu.length === 0 &&
          hoveredNavItem !== "Resources" &&
          hoveredNavItem !== "Why us" &&
          hoveredNavItem !== "Services" && (
            <div className="py-8 text-center text-mega-text">
              Coming Soon...
            </div>
          )}
      </div>

      {/* BLUR BACKDROP FOR WHY US */}
      {hoveredNavItem === "Why us" && (
        <div className="fixed top-[calc(60px+45vh)] left-0 w-full h-[55vh] backdrop-blur-md bg-white/10 pointer-events-none z-30 transition-all duration-300"></div>
      )}

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#D1E5FF] text-[#09083B] z-40 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: "60px" }}
      >
        {" "}
        {/* Adjust top based on navbar actual height */}
        <div className="h-full overflow-y-auto pb-20 px-6 py-8">
          <ul className="space-y-4 text-[#09083B]">
            {navData.map((item) => (
              <MobileMenuItem
                key={item.label}
                item={item}
                closeMenu={() => setIsMobileMenuOpen(false)}
              />
            ))}
          </ul>
          {/* Mobile Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/demo"
              className="w-full text-center px-5 py-3 text-lg font-bold bg-[#FAF8F9] text-[#09083B] rounded-full"
            >
              Book a demo
            </Link>
            <Link
              href="/login"
              className="w-full text-center px-5 py-3 text-lg font-bold border-2 border-white text-white rounded-full"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Helper Component for Mobile Accordions ---
const MobileMenuItem = ({
  item,
  closeMenu,
}: {
  item: NavItem;
  closeMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSpecialized = ["Services", "Why us", "Resources"].includes(
    item.label,
  );
  const hasChildren =
    isSpecialized || (item.megaMenuData && item.megaMenuData.length > 0);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href || "#"}
          onClick={closeMenu}
          className="block text-[#09083B] text-xl font-medium py-3 border-b border-[#09083B]/10"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-[#09083B] text-xl font-medium py-3 border-b border-[#09083B]/10"
      >
        {item.label}
        <ChevronRight
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      {/* Mobile Submenu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        {item.label === "Services" ? (
          <MobileServicesContent closeMenu={closeMenu} />
        ) : item.label === "Why us" ? (
          <MobileWhyUsContent closeMenu={closeMenu} />
        ) : item.label === "Resources" ? (
          <MobileResourcesContent closeMenu={closeMenu} />
        ) : (
          item.megaMenuData?.map((col, idx) => (
            <div key={idx} className="mb-6">
              <button className="bg-[#09083B] text-[#D1E5FF] text-[16px] font-[instrument-serif] items-center justify-center font-bold tracking-wider mb-3 px-4 py-2 rounded-md flex gap-2">
                {col.heading}
                <ArrowUpRight />
              </button>
              <ul className="space-y-4">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex justify-between"
                    >
                      <div>
                        <div className="text-[#09083B] font-medium">
                          {link.label}
                        </div>
                        {link.desc && (
                          <div className="text-[#09083B]/60 text-sm">
                            {link.desc}
                          </div>
                        )}
                      </div>
                      <LoaderPinwheel className="w-5 h-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </li>
  );
};

// --- Specialized Mobile Content Renderers ---

const MobileServicesContent = ({ closeMenu }: { closeMenu: () => void }) => {
  const creativeServices = [
    {
      title: "Ad creative",
      desc: "Eye-catching designs that perform",
      href: "/services/ad-creative",
    },
    {
      title: "Social media creative",
      desc: "Engaging assets for all platforms",
      href: "/services/social",
    },
    {
      title: "Presentation design",
      desc: "Captivating slides that tell your story",
      href: "/services/presentation",
    },
    {
      title: "Illustration design",
      desc: "Visual storytelling for your brand",
      href: "/services/illustration",
    },
  ];

  const productionServices = [
    {
      title: "Video production",
      desc: "Effortless video production at scale",
      href: "/services/video",
    },
    {
      title: "Motion design",
      desc: "For websites, ads, and presentations",
      href: "/services/motion",
    },
    {
      title: "Web design",
      desc: "Stunning websites and landing pages",
      href: "/services/web",
    },
    {
      title: "Design Systems",
      desc: "Robust design systems",
      href: "/services/design-systems",
      isNew: true,
    },
  ];

  const aiServices = [
    {
      title: "AI-powered creative",
      desc: "Human brilliance powered by AI",
      href: "/services/ai-creative",
    },
    {
      title: "AI consulting",
      desc: "Maximize AI with tailored strategies",
      href: "/services/ai-consulting",
    },
  ];

  return (
    <div className="space-y-8 pb-4">
      <div className="space-y-4">
        <div className="bg-[#CBF382] text-[#09083B] text-xs font-bold px-3 py-1.5 rounded-md inline-flex items-center gap-1">
          Creative design services <ArrowUpRight className="w-3 h-3" />
        </div>
        <div className="grid gap-4 pl-1">
          {creativeServices.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              onClick={closeMenu}
              className="block group"
            >
              <h4 className="font-bold text-sm text-[#09083B] group-active:text-blue-700">
                {s.title}
              </h4>
              <p className="text-xs text-[#09083B]/60">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#2D6A4F] text-white text-xs font-bold px-3 py-1.5 rounded-md inline-flex items-center gap-1">
          Specialized production services <ArrowUpRight className="w-3 h-3" />
        </div>
        <div className="grid gap-4 pl-1">
          {productionServices.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              onClick={closeMenu}
              className="block group"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-[#09083B] group-active:text-blue-700">
                  {s.title}
                </h4>
                {s.isNew && (
                  <span className="bg-[#CBF382] text-deep-blue text-[9px] font-bold px-1 rounded-sm">
                    New
                  </span>
                )}
              </div>
              <p className="text-xs text-[#09083B]/60">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#1D4E89] text-white text-xs font-bold px-3 py-1.5 rounded-md inline-flex items-center gap-1">
          AI services <ArrowUpRight className="w-3 h-3" />
        </div>
        <div className="grid gap-4 pl-1">
          {aiServices.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              onClick={closeMenu}
              className="block group"
            >
              <h4 className="font-bold text-sm text-[#09083B] group-active:text-blue-700">
                {s.title}
              </h4>
              <p className="text-xs text-[#09083B]/60">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileWhyUsContent = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="space-y-6 pb-6">
      {[
        {
          title: "Our creative talent",
          sub: "Meet your dedicated team",
          img: "https://images.unsplash.com/photo-1522071823991-b19c0652077f?auto=format&fit=crop&q=80&w=600",
          href: "/why-us/creative-talent",
        },
        {
          title: "AI excellence",
          sub: "Your shortcut to AI",
          img: "https://images.unsplash.com/photo-1620712943543-bcc4638a77d0?auto=format&fit=crop&q=80&w=600",
          href: "/why-us/ai-excellence",
          isAI: true,
        },
        {
          title: "Our technology",
          sub: "The tech powering edge",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
          href: "/why-us/technology",
        },
      ].map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          onClick={closeMenu}
          className="block space-y-3"
        >
          <div className="aspect-video rounded-lg overflow-hidden relative shadow-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {item.isAI && (
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                <span className="text-[8px] font-medium text-white tracking-wider uppercase">
                  Made with AI
                </span>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-sm">{item.title}</h4>
            <p className="text-xs text-[#09083B]/60">{item.sub}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const MobileResourcesContent = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="space-y-8 pb-6">
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#09083B]/40">
          Learning Center
        </h4>
        <div className="grid gap-4 pl-1">
          {learningCenterItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between group"
            >
              <span className="font-bold text-sm group-active:text-blue-700">
                {item.title}
              </span>
              <div className="text-[#09083B]/40">{item.icon}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#09083B]/40">
          Featured Blog
        </h4>
        <Link
          href="/resources/blog/saas-design"
          onClick={closeMenu}
          className="block space-y-3"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-[#E3F2FF] relative flex items-center justify-center p-6">
            <div className="bg-white/80 p-3 rounded-lg text-center shadow-sm">
              <p className="text-[8px] font-bold uppercase tracking-tighter">
                Your video. Your brand.
              </p>
              <div className="mt-1 flex justify-center">
                <div className="h-4 w-12 bg-blue-600 rounded flex items-center justify-center text-[7px] text-white font-bold">
                  CTA
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-sm leading-tight">
            Design systems for SaaS: Top 6 agencies for enterprises
          </h4>
        </Link>
      </div>
    </div>
  );
};

const WhyUsMegaMenu = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 grid grid-cols-3 gap-8 text-[#09083B]">
      {/* Our creative talent */}
      <Link
        href="/why-us/creative-talent"
        className="group block cursor-pointer"
      >
        <div className="aspect-16/10 rounded-lg overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1522071823991-b19c0652077f?auto=format&fit=crop&q=80&w=800"
            alt="Our creative talent"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
        </div>
        <h4 className="text-[17px] font-bold mb-1.5 group-hover:text-blue-700 transition">
          Our creative talent
        </h4>
        <p className="text-[14px] text-[#09083B]/60 leading-tight">
          Meet your dedicated team
        </p>
      </Link>

      {/* AI excellence */}
      <Link href="/why-us/ai-excellence" className="group block cursor-pointer">
        <div className="aspect-16/10 rounded-lg overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-all duration-300 relative bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4638a77d0?auto=format&fit=crop&q=80&w=800"
            alt="AI excellence"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          {/* Vertical "Made with AI" text matching image */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center h-full">
            <span className="text-[9px] font-medium text-white/40 tracking-[0.2em] uppercase origin-center rotate-90 whitespace-nowrap">
              Made with AI
            </span>
          </div>
        </div>
        <h4 className="text-[17px] font-bold mb-1.5 group-hover:text-blue-700 transition">
          AI excellence
        </h4>
        <p className="text-[14px] text-[#09083B]/60 leading-tight">
          Your shortcut to AI&apos;s creative advantage
        </p>
      </Link>

      {/* Our technology */}
      <Link href="/why-us/technology" className="group block cursor-pointer">
        <div className="aspect-16/10 rounded-lg overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
            alt="Our technology"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
        </div>
        <h4 className="text-[17px] font-bold mb-1.5 group-hover:text-blue-700 transition">
          Our technology
        </h4>
        <p className="text-[14px] text-[#09083B]/60 leading-tight">
          The tech powering your creative edge
        </p>
      </Link>
    </div>
  );
};

const ServicesMegaMenu = () => {
  const creativeServices = [
    {
      title: "Ad creative",
      desc: "Eye-catching designs that perform",
      href: "/services/ad-creative",
    },
    {
      title: "Social media creative",
      desc: "Engaging assets for all platforms",
      href: "/services/social",
    },
    {
      title: "Presentation design",
      desc: "Captivating slides that tell your story",
      href: "/services/presentation",
    },
    {
      title: "Illustration design",
      desc: "Visual storytelling for your brand",
      href: "/services/illustration",
    },
    {
      title: "Branding services",
      desc: "Expertise & custom design services",
      href: "/services/branding",
    },
    {
      title: "eBooks & report design",
      desc: "Your digital content supercharged",
      href: "/services/ebooks",
    },
    {
      title: "Concept creation",
      desc: "Big ideas crafted for maximum impact",
      href: "/services/concepts",
    },
    {
      title: "Print design",
      desc: "Tangible designs that leave a lasting impression",
      href: "/services/print",
    },
    {
      title: "Packaging & merchandise design",
      desc: "Bring your brand to life",
      href: "/services/packaging",
    },
  ];

  const productionServices = [
    {
      title: "Video production",
      desc: "Effortless video production at scale",
      href: "/services/video",
    },
    {
      title: "Motion design",
      desc: "For websites, ads, and presentations",
      href: "/services/motion",
    },
    {
      title: "Immersive design",
      desc: "Innovative solutions for 3D/AR design services",
      href: "/services/immersive",
    },
    {
      title: "Email creation",
      desc: "Click-worthy emails that drive engagement",
      href: "/services/email",
    },
    {
      title: "Web design",
      desc: "Stunning websites and landing pages built to engage",
      href: "/services/web",
    },
    {
      title: "Design Systems",
      desc: "Robust design systems that drive visual consistency",
      href: "/services/design-systems",
      isNew: true,
    },
    {
      title: "Product Design",
      desc: "Engaging & intuitive experiences",
      href: "/services/product",
      isNew: true,
    },
    {
      title: "Copywriting",
      desc: "Persuasive words for clarity and action",
      href: "/services/copywriting",
      isNew: true,
    },
  ];

  const aiServices = [
    {
      title: "AI-powered creative",
      desc: "Human brilliance powered by AI",
      href: "/services/ai-creative",
    },
    {
      title: "AI consulting",
      desc: "Maximize AI with tailored strategies",
      href: "/services/ai-consulting",
    },
  ];

  const marketingServices = [
    {
      title: "Marketing strategy",
      desc: "Grow your brand with expert consultants",
      href: "/services/strategy",
      isNew: true,
    },
    {
      title: "Campaign strategy",
      desc: "Strategy, messaging, and concept for multi-market campaigns",
      href: "/services/campaign",
      isNew: true,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 grid grid-cols-3 gap-12 text-[#09083B]">
      {/* Column 1: Creative */}
      <div>
        <div className="bg-[#CBF382] text-[#09083B] text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-8 group cursor-pointer hover:bg-[#b8db75] transition">
          Creative design services <ArrowUpRight className="w-4 h-4" />
        </div>
        <div className="space-y-6">
          {creativeServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group flex items-center justify-between transition"
            >
              <div className="flex-1">
                <h4 className="font-bold text-[15px] group-hover:text-blue-700 transition">
                  {service.title}
                </h4>
                <p className="text-[13px] text-[#09083B]/60 leading-tight mt-1">
                  {service.desc}
                </p>
              </div>
              <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-blue-700 transition">
                <LoaderPinwheel className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Column 2: Production */}
      <div>
        <div className="bg-[#2D6A4F] text-white text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-8 group cursor-pointer hover:bg-[#255541] transition">
          Specialized production services <ArrowUpRight className="w-4 h-4" />
        </div>
        <div className="space-y-6">
          {productionServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group flex items-center justify-between transition"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-[15px] group-hover:text-blue-700 transition">
                    {service.title}
                  </h4>
                  {service.isNew && (
                    <span className="bg-[#CBF382] text-deep-blue text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      New
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[#09083B]/60 leading-tight mt-1">
                  {service.desc}
                </p>
              </div>
              <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-blue-700 transition">
                <LoaderPinwheel className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Column 3: AI & Marketing */}
      <div>
        {/* AI Section */}
        <div className="mb-12">
          <div className="bg-[#1D4E89] text-white text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-8 group cursor-pointer hover:bg-[#163a66] transition">
            AI services <ArrowUpRight className="w-4 h-4" />
          </div>
          <div className="space-y-6">
            {aiServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group flex items-center justify-between transition"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-[15px] group-hover:text-blue-700 transition">
                    {service.title}
                  </h4>
                  <p className="text-[13px] text-[#09083B]/60 leading-tight mt-1">
                    {service.desc}
                  </p>
                </div>
                <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-blue-700 transition">
                  <LoaderPinwheel className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Marketing Section */}
        <div>
          <div className="bg-[#EAE2B7] text-[#09083B] text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-8 group cursor-pointer hover:bg-[#dad2a6] transition">
            Marketing services <ArrowUpRight className="w-4 h-4" />
          </div>
          <div className="space-y-6 border-t border-[#09083B]/10 pt-6">
            {marketingServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group flex items-center justify-between transition"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[15px] group-hover:text-blue-700 transition">
                      {service.title}
                    </h4>
                    {service.isNew && (
                      <span className="bg-[#CBF382] text-deep-blue text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#09083B]/60 leading-tight mt-1">
                    {service.desc}
                  </p>
                </div>
                <div className="w-5 h-5 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:text-blue-700 transition">
                  <LoaderPinwheel className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourcesMegaMenu = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 grid grid-cols-12 gap-12 text-[#09083B]">
      {/* Learning Center */}
      <div className="col-span-3">
        <div className="flex items-center gap-2 mb-8 group cursor-pointer hover:text-blue-700 transition">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Learning Center
          </h3>
          <ArrowUpRight className="w-4 h-4 -translate-y-px" />
        </div>
        <div className="space-y-0">
          {learningCenterItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-center justify-between py-5 border-b border-[#09083B]/10 hover:border-[#09083B]/30 transition"
            >
              <div className="pr-4">
                <h4 className="font-bold text-[15px] group-hover:text-blue-700 transition">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#09083B]/60 leading-tight mt-1">
                  {item.desc}
                </p>
              </div>
              <div className="text-[#09083B]/40 group-hover:text-[#09083B] transition">
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="col-span-5 border-x border-[#09083B]/10 px-8">
        <div className="flex items-center gap-2 mb-8 group cursor-pointer hover:text-blue-700 transition">
          <h3 className="text-sm font-bold uppercase tracking-wider">Blog</h3>
          <ArrowUpRight className="w-4 h-4 -translate-y-px" />
        </div>

        {/* Featured Blog */}
        <div className="mb-10">
          <div className="relative rounded-lg overflow-hidden mb-6 aspect-video group bg-[#E3F2FF]">
            <div className="absolute top-4 left-4 bg-[#09083B] text-[#D1E5FF] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
              Blog
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm w-full max-w-[280px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-[#09083B] rounded flex items-center justify-center text-white text-[10px] font-bold italic">
                    V
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider">
                    Your video. Your brand.
                  </span>
                </div>
                <button className="bg-blue-600 text-white text-[10px] font-bold py-2 px-4 rounded-md shadow-sm mb-3">
                  CTA Here
                </button>
                <p className="text-[10px] text-gray-600 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-lg leading-tight hover:text-blue-700 cursor-pointer transition">
            Design systems for SaaS: Top 6 agencies for enterprises
          </h4>
        </div>

        {/* Second Blog Card */}
        <div className="pt-8 border-t border-[#09083B]/10">
          <div className="rounded-lg overflow-hidden mb-6 aspect-16/6 bg-[#F5FAFF] relative p-6 flex items-center justify-between border border-[#09083B]/5">
            <div className="flex-1">
              <h5 className="font-bold text-base leading-tight">
                Creative Delivery: Traditional Agency vs Global Creative Service
              </h5>
            </div>
            <div className="flex-1 pl-4">
              <div className="space-y-2">
                <div className="h-2 w-full bg-[#E3F2FF] rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-400"></div>
                </div>
                <div className="h-2 w-full bg-[#E3F2FF] rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-bold text-lg leading-tight hover:text-blue-700 cursor-pointer transition">
            10 Creative Services Examples From Top Brands in 2026
          </h4>
        </div>
      </div>

      {/* Customer Stories */}
      <div className="col-span-4">
        <div className="flex items-center gap-2 mb-8 group cursor-pointer hover:text-blue-700 transition">
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Customer Stories
          </h3>
          <ArrowUpRight className="w-4 h-4 -translate-y-px" />
        </div>

        <div className="space-y-10">
          {/* Vimeo Card */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden aspect-16/10 bg-gray-900 mb-6 flex items-center justify-center p-12 transition group-hover:shadow-xl">
              <h2 className="text-white text-6xl font-black italic tracking-tighter opacity-80 group-hover:opacity-100 transition">
                vimeo
              </h2>
            </div>
            <h4 className="font-bold text-lg leading-tight group-hover:text-blue-700 transition">
              Transforming creative workflows with AI at Vimeo
            </h4>
          </div>

          {/* Fortune 500 Card */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden aspect-16/10 bg-gray-200 mb-6 flex items-center justify-center transition group-hover:shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-black/40 to-black/10 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 text-center text-white px-6">
                <h3 className="text-4xl font-black tracking-tight mb-2">
                  Fortune 500
                </h3>
              </div>
            </div>
            <h4 className="font-bold text-lg leading-tight group-hover:text-blue-700 transition">
              How a Fortune 500 doubled their AI adoption
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;