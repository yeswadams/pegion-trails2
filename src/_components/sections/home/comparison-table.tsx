"use client";

import React from "react";
import { Check } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    "Dedicated Creative Team",
    "AI-Powered Workflows",
    "Fast 12-24h Delivery",
    "Transparent Monthly Pricing",
    "Integrated Project Platform",
    "Unlimited Team Seats",
    "Source Files Included",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#09083B] mb-12 text-center">
          In-house quality at scale.
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 italic">
                <th className="text-left py-6 px-4 text-gray-400 font-normal">
                  Feature
                </th>
                <th className="text-center py-6 px-4 bg-[#CBF382]/10 rounded-t-2xl text-[#09083B] font-bold">
                  Pegion Trails
                </th>
                <th className="text-center py-6 px-4 text-gray-400 font-normal">
                  Traditional
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-6 px-4 font-medium text-[#09083B]">{f}</td>
                  <td className="py-6 px-4 bg-[#CBF382]/10 text-center">
                    <Check className="w-5 h-5 text-blue-600 mx-auto" />
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
