"use client";

import { imageConfig } from "@/lib/imageConfig";

const images = [
  {
    id: 1,
    image: "/business.jpg",
    title: "Experience You Can Trust",
  },
  { id: 2, image: "/datadriven.png", title: "Data-Driven Results" },
  { id: 3, image: "/futurevision.jpg", title: "Long-Term Partnership" },
  { id: 4, image: "/experts.jpg", title: "Experts at Every Step" },
  { id: 5, image: "/hightech.png", title: "A World of Knowledge" },
  { id: 6, image: "/dynamicdata.jpg", title: "Scalability for Growth" },
];

export default function WhyChoose() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="space-y-1 text-center md:text-left">
        <h3 className="italic text-2xl font-semibold">
          Why Should You Choose Us?
        </h3>
        <h2 className="font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>

      {/* Hover effect container */}
      <div className="flex gap-4 overflow-hidden">
        {images.map((item, _index) => (
          <div
            key={item.id}
            className="relative h-150 rounded-md overflow-hidden flex items-end justify-center
             grow transition-all duration-500 ease-out cursor-default
             hover:grow-16 focus:grow-2"
            style={{
              backgroundImage: `url(${imageConfig.url(item.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* inset shadow overlay */}
            <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />

            <h3 className="relative z-10 text-white font-semibold text-center px-2 py-4 w-full">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
