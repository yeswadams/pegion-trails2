"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { 
  ChevronRight, Sparkles, Layers, Zap, 
  CreditCard, ShieldCheck, Info 
} from "lucide-react";
import { SERVICE_GROUPS } from "@/lib/pricing";

const textReveal = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#09083B] text-white selection:bg-[#C6DFFF] selection:text-[#09083B]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09083B] z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
            alt="Tech and Design abstraction"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
        </div>

        <div className="relative z-20 text-center max-w-5xl">
          <motion.span initial="hidden" animate="visible" variants={textReveal} transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }} className="text-[#C6DFFF] font-mono tracking-widest uppercase text-sm mb-4 block">
            Pegion Trails // Investment Guide 2026
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={textReveal} transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }} className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
            Outcome-Based <br /> <span className="italic font-serif font-light text-blue-200">Economics.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={textReveal} transition={{ duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) }} className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            We don’t bill for &quot;hours spent.&quot; We bill for the value we create and the technical infrastructure we build. Transparency is our baseline.
          </motion.p>
        </div>
      </section>

      {/* --- SECTION 1: THE RATE CARD LOGIC --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">The &quot;Standard vs. Per-Client&quot; <br />Approach</h2>
            <div className="prose prose-invert lg:prose-xl text-white/50">
              <p>In a creative agency, no two problems are identical. That&apos;s why we operate using a dual-rate card system inspired by industry leaders.</p>
              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded bg-[#C6DFFF]/20 flex items-center justify-center shrink-0"><span className="text-[#C6DFFF] text-xs font-bold">01</span></div>
                  <div><h4 className="text-white font-bold text-lg">The Standard Rate Card</h4><p className="text-sm">Our baseline for predictable, structured production—perfect for brands with established guidelines.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded bg-[#C6DFFF]/20 flex items-center justify-center shrink-0"><span className="text-[#C6DFFF] text-xs font-bold">02</span></div>
                  <div><h4 className="text-white font-bold text-lg">The Per-Client Rate Card</h4><p className="text-sm">For high-intensity sprints or complex full-stack builds requiring rapid scaling.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden group">
            <Image src="/services/client-approach.jpg" alt="Data" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-[#C6DFFF]/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PAYMENT & POLICIES --- */}
      <section className="bg-white/5 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-12 rounded-[3rem] bg-[#09083B] border border-white/10 flex flex-col justify-between">
            <CreditCard size={48} className="text-[#C6DFFF] mb-20" />
            <div><h3 className="text-3xl font-bold mb-6">The 50% Commitment</h3><p className="text-white/50 text-lg">A 50% down payment is required to initiate production and lock in our development team.</p></div>
          </div>
          <div className="p-12 rounded-[3rem] bg-gradient-to-br from-[#C6DFFF]/20 to-[#09083B] border border-white/10 flex flex-col justify-between">
            <h3 className="text-2xl font-bold leading-tight">Volume & <br />Retainer Credits</h3>
            <div className="mt-12 pt-8 border-t border-white/10"><span className="text-4xl font-bold text-[#C6DFFF]">-15%</span><p className="text-[10px] font-mono uppercase tracking-widest mt-2">Avg. Partner Savings</p></div>
          </div>
          <div className="p-12 rounded-[3rem] bg-white/[0.02] border border-white/10">
            <Info size={32} className="text-[#C6DFFF] mb-8" /><h3 className="text-xl font-bold mb-4">The &quot;Perfect Finish&quot;</h3><p className="text-white/40 text-sm">Every project includes two major revision cycles.</p>
          </div>
          <div className="md:col-span-2 p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 flex items-center gap-12">
            <ShieldCheck size={64} className="text-[#C6DFFF] shrink-0 opacity-50" />
            <div><h3 className="text-xl font-bold mb-2">Intellectual Asset Transfer</h3><p className="text-white/40 text-sm">Upon final payment, full ownership of assets and code is transferred to you.</p></div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SERVICE TIERS --- */}
      <main className="px-6 py-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {SERVICE_GROUPS.map((group, groupIdx) => (
            <motion.section key={group.slug} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-4">
                    {groupIdx === 0 ? <Sparkles size={20} className="text-[#C6DFFF]" /> : groupIdx === 1 ? <Layers size={20} className="text-[#C6DFFF]" /> : <Zap size={20} className="text-[#C6DFFF]" />}
                    <h2 className="text-3xl font-bold tracking-tight">{group.category}</h2>
                  </div>
                  <p className="text-white/50 text-lg italic">{group.description}</p>
                </div>
                <div className="mt-6 md:mt-0"><span className="text-sm font-mono text-white/30">0{groupIdx + 1} /</span></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.services.map((service) => (
                  <motion.div key={service.slug} variants={itemVariants}>
                    <Link href={`/pricing/${group.slug}/${service.slug}`} className="group relative block h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C6DFFF]/50 hover:bg-white/[0.06] transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C6DFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-12">
                          <h3 className="text-xl font-semibold group-hover:text-[#C6DFFF] transition-colors">{service.name}</h3>
                          <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#C6DFFF] group-hover:text-[#09083B] transition-all"><ChevronRight size={18} /></div>
                        </div>
                        <p className="text-white/40 group-hover:text-white/70 transition-colors mb-8 flex-grow">{service.description}</p>
                        <div className="text-xs font-mono tracking-widest text-[#C6DFFF]/60 uppercase">Explore Scope &rarr;</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
}