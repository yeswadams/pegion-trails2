"use client";

import React from "react";
import Link from "next/link";
// Make sure to install lucide-react: npm install lucide-react
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerData = {
  services: [
    {
      title: "Creative design services",
      links: [
        "Ad creative",
        "Social media creative",
        "Presentation design",
        "Illustration design",
        "Branding services",
        "Ebooks & report design",
        "Concept creation",
        "Print design",
        "Packaging & merchandise design",
      ],
    },
    {
      title: "Specialized production services",
      links: [
        "Video production",
        "Motion design",
        "Immersive design",
        "Email creation",
        "Web design",
        "Design Systems",
        "Product Design",
        "Copywriting",
      ],
    },
    {
      title: "AI services",
      links: ["AI-powered creative", "AI consulting"],
    },
    {
      title: "Marketing services",
      links: ["Marketing strategy", "Campaign strategy"],
    },
  ],
  navigation: {
    main: [
      "Our work",
      "Our people",
      "About us",
      "Pricing",
      "Trust center",
      "Careers",
      "Superside vs. Alternatives",
      "Forrester TEI Report",
    ],
    learn: [
      "Blog",
      "Events & Summits",
      "Guides",
      "Reports",
      "Customer Stories",
      "Video Library",
      "Playbooks",
      "What's new",
      "Help Center",
    ],
  },
  contact: {
    phone: "+254 740076772",
    email: "pegiontrails@gmail.com",
    addressLine1: "Brookside Drive Westlands,",
    addressLine2: "Nairobi",
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09083B] text-white pt-16 pb-8 px-6 md:px-10 font-sans">
      <div className="max-w-full mx-auto">
        {/* Top CTA */}
        <div className="flex flex-col items-center justify-between mb-32 gap-10 text-center">
          <p className="text-4xl md:text-5xl lg:text-7xl">
            Your <em>creative team&apos;s</em> <br /> creative team
          </p>
          <Link
            href="/demo"
            className="px-5 py-3 text-lg font-bold bg-[#FAF8F9] text-[#09083B] rounded-full hover:scale-105 transition-transform"
          >
            Book a demo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Services Section */}
          <div className="flex flex-col gap-14">
            <div className="flex flex-col-reverse items-start gap-4">
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold">
                Services
              </h2>
              <div className="h-[1px] w-full bg-white/20"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerData.services.slice(0, 2).map((s, i) => (
                <div key={i}>
                  <h3 className="text-[15px] flex justify-between font-bold mb-4">
                    {s.title} <ArrowUpRight className="w-4 h-auto" />
                  </h3>
                  <ul className="space-y-3">
                    {s.links.map((l) => (
                      <li key={l}>
                        <Link
                          href="#"
                          className="text-sm text-white/70 hover:text-white"
                        >
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="space-y-10">
                {footerData.services.slice(2).map((s, i) => (
                  <div key={i}>
                    <h3 className="text-[15px] flex gap-4 font-bold mb-4">
                      {s.title} <ArrowUpRight className="w-4 h-auto" />
                    </h3>
                    <ul className="space-y-3">
                      {s.links.map((l) => (
                        <li key={l}>
                          <Link
                            href="#"
                            className="text-sm text-white/70 hover:text-white"
                          >
                            {l}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation & Contact Card */}
          <div className="flex flex-col gap-14 h-full">
            <div className="flex flex-col-reverse items-start gap-4">
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold">
                Navigation
              </h2>
              <div className="h-[1px] w-full bg-white/20"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[15px] font-bold mb-4">Main</h3>
                  <ul className="space-y-3">
                    {footerData.navigation.main.map((l) => (
                      <li key={l}>
                        <Link
                          href="#"
                          className="text-sm text-white/70 hover:text-white"
                        >
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold mb-4">Learn</h3>
                  <ul className="space-y-3">
                    {footerData.navigation.learn.map((l) => (
                      <li key={l}>
                        <Link
                          href="#"
                          className="text-sm text-white/70 hover:text-white"
                        >
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Updated Contact Card with Icons */}
              <div className="flex flex-col w-full ">
                <h3 className="text-[15px] font-bold text-white mb-4">
                  Let&apos;s work together!
                </h3>

                <div className="flex items-center gap-3 mb-6">
                  <Phone size={20} className="text-(--color-secondary)" />
                  <a
                    href="tel:+254740076772"
                    className="text-lg font-semibold text-white hover:text-(--color-secondary) transition-colors"
                  >
                    {footerData.contact.phone}
                  </a>
                </div>

                <div className="flex flex-col gap-4 text-[15px] text-white/80 mb-8">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-(--color-secondary)" />
                    <a
                      href="mailto:pegiontrails@gmail.com"
                      className="hover:text-white"
                    >
                      {footerData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-(--color-secondary) mt-1 shrink-0"
                    />
                    <p>
                      {footerData.contact.addressLine1} <br />{" "}
                      {footerData.contact.addressLine2}
                    </p>
                  </div>
                </div>

                <Link
                  href="/demo"
                  className="btn-roll bg-[#FAF8F9] text-[#09083B] hover:bg-[#eee] w-fit"
                  data-text="Book a call"
                >
                  <span className="w-full text-center">Book a call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col xl:row items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-2xl font-bold">Pegion Trails</h2>
            <p className="text-xs text-white/50">
              © {currentYear} Pegion Trails. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialIcon
              icon="linkedin"
              href="https://www.linkedin.com/company/pegion-trails"
            />
            <SocialIcon
              icon="facebook"
              href="https://www.facebook.com/profile.php?id=61587150838828"
            />
            <SocialIcon
              icon="instagram"
              href="https://www.instagram.com/pegion_trails_digital/"
            />
            <SocialIcon icon="youtube" href="#" />
            <SocialIcon
              icon="tiktok"
              href="https://www.tiktok.com/@pegion.trails.digital"
            />
            <div className="ml-2 bg-(--color-secondary) p-2 rounded-md text-[#09083B]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => {
  const icons = {
    linkedin: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    facebook: (
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
    youtube: (
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    ),
    tiktok: (
      <path d="M12.525.02c1.31 0 2.591.31 3.746.88.11.05.23.1.33.16.2.11.39.23.57.36.21.16.4.32.58.5a10.024 10.024 0 001.37 1.5c.2.18.41.35.63.51.27.2.56.37.86.53.29.16.59.3.9.42.36.14.73.25 1.11.34V8.85c-.99-.01-1.95-.27-2.8-.75-.4-.22-.76-.5-1.09-.81-.3-.28-.56-.6-.79-.94-.17-.26-.32-.53-.44-.81-.13-.28-.24-.58-.32-.88a7.062 7.062 0 01-.18-1.55v11.72c0 .73-.1 1.45-.29 2.14-.19.68-.48 1.33-.86 1.92-.38.58-.86 1.09-1.41 1.5-.56.41-1.18.73-1.84.94a7.994 7.994 0 01-4.88 0 8.077 8.077 0 01-3.25-2.44 7.96 7.96 0 01-1.72-4.8c0-.73.1-1.45.29-2.14.19-.68.48-1.33.86-1.92.38-.58.86-1.09 1.41-1.5.56-.41 1.18-.73 1.84-.94.67-.21 1.37-.32 2.08-.32.33 0 .66.02.99.07v3.7c-.32-.06-.65-.1-.99-.1a4.194 4.194 0 00-4.22 4.19 4.2 4.2 0 001.24 2.97c.39.4.86.7 1.38.89.52.2 1.07.3 1.63.3.56 0 1.11-.1 1.63-.3.52-.19.99-.49 1.38-.89.39-.4.7-.87.89-1.38.2-.52.3-1.07.3-1.63V0h3.66v.02z" />
    ),
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
    >
      <span className="sr-only">{icon}</span>
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
    </Link>
  );
};

export default Footer;
