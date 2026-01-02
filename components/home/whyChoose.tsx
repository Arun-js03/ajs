"use client";

import { imageConfig } from "@/lib/imageConfig";

const images = [
  {
    id: 1,
    image: "/servicethreedImage.jpg",
    title: "Experience You Can Trust",
  },
  { id: 2, image: "/servicethreedImage.jpg", title: "Data-Driven Results" },
  { id: 3, image: "/servicethreedImage.jpg", title: "Long-Term Partnership" },
  { id: 4, image: "/servicethreedImage.jpg", title: "Experts at Every Step" },
  { id: 5, image: "/servicethreedImage.jpg", title: "A World of Knowledge" },
  { id: 6, image: "/servicethreedImage.jpg", title: "Scalability for Growth" },
];

export default function WhyChoose() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="space-y-1 text-center md:text-left">
        <h3 className="italic font-semibold">Why Should You Choose Us?</h3>
        <h2 className="font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>

      {/* Hover effect container */}
      <div className="flex gap-4 overflow-hidden">
        {images.map((item, _index) => (
          <div
            key={item.id}
            className="relative h-100 rounded-md overflow-hidden flex items-end justify-center
                       grow transition-all duration-500 ease-out cursor-default
                       hover:grow-20 focus:grow-20 outline-none"
            style={{
              backgroundImage: `url(${imageConfig.url(item.image)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-white font-semibold text-center px-2 py-4 rounded w-full bg-black/30">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
