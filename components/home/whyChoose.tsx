"use client";

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
            className="group relative h-150 rounded-2xl overflow-hidden flex items-end justify-center
             flex-1 transition-all duration-500 ease-out cursor-default
             hover:flex-3 focus:flex-2"
            style={{
              backgroundImage: `url(${imageConfig.url(item.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* inset shadow overlay */}
            <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />

            <h3 className="relative group-hover:text-2xl z-10 text-white font-semibold text-center px-2 py-4 w-full">
              {item.title}
              <p className="relative z-10 text-white text-xl font-semibold text-center px-2 py-4 w-full max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100">
                {item.description}
              </p>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
