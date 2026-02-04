"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { imageConfig } from "@/lib/imageConfig";

const images = [
  {
    id: 1,
    image: "/business.jpg",
    title: "Experience You Can Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: "/datadriven.png",
    title: "Data-Driven Results",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: "/futurevision.jpg",
    title: "Long-Term Partnership",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: "/experts.jpg",
    title: "Experts at Every Step",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: "/hightech.png",
    title: "A World of Knowledge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    image: "/dynamicdata.jpg",
    title: "Scalability for Growth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function WhyChoose() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of width
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div
      className="container mx-auto xl:py-10 pb-10 xl:pb-0 space-y-6 md:mt-14"
      id="whychoose"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="italic text-xl md:text-2xl font-semibold text-primary">
            Why Should You Choose Us?
          </h3>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>

        {/* Navigation Buttons - Visible on Mobile and Tablet */}
        <div className="flex gap-3 justify-center md:justify-end lg:hidden">
          <button
            title="Previous"
            type="button"
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 text-foreground hover:bg-primary hover:text-white transition-all border border-border cursor-pointer shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            title="Next"
            type="button"
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 text-foreground hover:bg-primary hover:text-white transition-all border border-border cursor-pointer shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Hover effect container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto lg:overflow-hidden pt-4 snap-x snap-mandatory scrollbar-hide pb-6"
      >
        {images.map((item) => (
          <div
            key={item.id}
            className="group relative md:h-120 lg:h-150 h-96 rounded-3xl overflow-hidden flex items-end justify-center
             shrink-0 w-[85vw] md:w-[45vw] lg:w-auto lg:flex-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default
             lg:hover:flex-3 focus:flex-2 snap-center shadow-lg"
            style={{
              backgroundImage: `url(${imageConfig.url(item.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* inset shadow overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)] lg:group-hover:shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />

            <div className="relative z-10 text-white font-semibold text-center px-6 py-8 w-full translate-y-2 lg:translate-y-12 lg:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl md:text-[16px] lg:mb-10 lg:group-hover:text-xl lg:group-hover:mb-2 transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/90 line-clamp-4 lg:max-h-0 lg:opacity-0 lg:overflow-hidden transition-all duration-700 ease-in-out lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
