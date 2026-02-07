"use client";

import React from "react";
import { Play } from "lucide-react";

const Testimonials = () => {
  const stories = [
    {
      company: "Salesforce",
      quote:
        "Pegion Trails has become an extension of our team. Their AI-powered workflows have cut our design time by 60%.",
      author: "Jane Doe, Creative Director",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      company: "Vimeo",
      quote:
        "The quality and speed are unmatched. We launch global campaigns in days, not weeks.",
      author: "John Smith, Head of Marketing",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#09083B] mb-16 text-center">
          Loved by marketing teams.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F9] rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
                <img
                  src={story.img}
                  alt={story.author}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                    <Play className="w-5 h-5 text-[#09083B] fill-current" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[#09083B] text-xl font-bold mb-4">
                  "{story.quote}"
                </p>
                <div>
                  <p className="font-bold text-[#09083B]">{story.author}</p>
                  <p className="text-gray-400 text-sm">{story.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
