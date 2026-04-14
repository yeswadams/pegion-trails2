"use client";

import { useParams } from "next/navigation";
import { PRICING, getGroupBySlug } from "@/lib/pricing";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PricingDetailPage() {
  const params = useParams();

  const categorySlug = params.category as string;
  const serviceSlug = params.service as string;

  const service = PRICING[serviceSlug];
  const group = getGroupBySlug(categorySlug);

  const isMatch = service && group && service.category === group.category;

  if (!isMatch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09083B] text-white">
        Pricing not found (Invalid Category: {categorySlug})
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#09083B]">
      {/* Header Section */}
      <section className="px-6 pt-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">{service.title}</h1>
        <p className="text-gray-500 mt-2 text-lg">{service.description}</p>
      </section>

      {/* Hero Image Section */}
      <section className="px-6 max-w-6xl mx-auto mt-10">
        <div className="relative w-full h-[400px] border-red-500 rounded-2xl overflow-hidden mb-10 shadow-lg">
          {service.image ? (
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              unoptimized
              className="object-cover w-full h-full"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              No image available
            </div>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed max-w-3xl">{service.overview}</p>
      </section>

      {/* Pricing Tiers Section */}
      <section className="px-6 max-w-6xl mx-auto mt-16 pb-32">
        <h2 className="text-3xl font-bold mb-10">Pricing Tiers</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.tiers.map((tier) => (
            <div key={tier.name} className="p-8 rounded-2xl bg-[#C6DFFF] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl">{tier.name}</h3>
                <div className="text-4xl font-bold my-6">{tier.price}</div>

                <div className="space-y-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/book"
                className="block mt-8 bg-[#09083B] text-white text-center py-4 rounded-xl font-medium hover:bg-[#1a1863] transition-colors"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}