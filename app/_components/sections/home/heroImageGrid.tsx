import Image from "next/image";

const HeroImageGrid = () => {
  // Array of images - ensuring enough items for a tall enough track
  const images = [
    "/images/hero_img1.avif",
    "/images/hero_img2.jfif",
    "/images/hero_img3.jfif",
    "/images/hero_img4.jfif",
    "/images/hero_img5.jfif",
    "/images/hero_img6.jfif",
    "/images/hero_img7.jfif",
    "/images/hero_img8.png",
    "/images/hero_img9.jfif",
    "/images/hero_img10.jfif",
    "/images/hero_img11.jfif",
    "/images/hero_img12.jfif",
    "/images/hero_img13.jfif",
  ];

  const ScrollingColumn = ({
    direction,
    speed,
    containerClass = "",
  }: {
    direction: "up" | "down";
    speed: string;
    containerClass?: string;
  }) => (
    /* The container handles the vertical stagger/misalignment */
    <div className={`flex-1 h-full overflow-hidden ${containerClass} `}>
      <div
        className={`flex flex-col gap-4 ${
          direction === "down" ? "animate-marquee-down" : "animate-marquee-up"
        }`}
        style={{ animationDuration: speed }}
      >
        {/* Double the array for the seamless loop seam */}
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-3/4 overflow-hidden rounded-2xl border-2 border-white/5 shadow-xl"
          >
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="hidden md:flex gap-4 w-[45%] h-screen overflow-hidden px-4">
      {/* Column 1: Starts lower (Misaligned Down) */}
      <ScrollingColumn direction="down" speed="200s" containerClass="pt-20" />

      {/* Column 2: Standard Start (Moving Up) */}
      <ScrollingColumn direction="up" speed="130s" />

      {/* Column 3: Starts even lower (Misaligned further) */}
      <ScrollingColumn direction="down" speed="242s" containerClass="pt-40" />
    </div>
  );
};

export default HeroImageGrid;
