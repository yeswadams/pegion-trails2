import React from 'react'

const differences = [
  {
    label: "SCALABLE",
    title: "Boost your in-house creative",
    description: "We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  {
    label: "FLEXIBLE",
    title: "Say yes to more projects",
    description: "Whether you need more bandwidth or different skills, Superside has whatever resources you need to get the job done.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    )
  },
  {
    label: "RESPONSIVE",
    title: "Don't sacrifice quality for speed",
    description: "Our global team of creatives delivers agency-level work in a fraction of the time.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  }
];

const OurDifference = () => {
  return (
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#09083B] uppercase mb-4">OUR DIFFERENCE</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-16 md:mb-24 leading-tight text-[#09083B]">
            Pegion Trails is the <span className="italic font-serif">perfect fit</span> for fast moving brands
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-left">
            {differences.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#d1e5ff] text-[#09083B] rounded-xl flex items-center justify-center mb-8 md:mb-12">
                  {item.icon}
                </div>
                <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#09083B]/40 uppercase mb-3">
                  {item.label}
                </p>
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#09083B]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default OurDifference

