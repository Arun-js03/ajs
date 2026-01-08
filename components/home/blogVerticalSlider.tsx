"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";
import { cn } from "@/lib/utils";

export const slides = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
];

interface VerticalSliderProps {
  activeIndex: number;
}

export default function VerticalSlider({ activeIndex }: VerticalSliderProps) {
  return (
    <div className="w-full h-[600px] relative overflow-hidden flex items-center justify-center">
      {/* The track moves to center the active item */}
      <motion.div
        className="flex flex-col gap-10 absolute w-full"
        initial={false}
        animate={{
          y: `calc(50% - ${activeIndex * 320 + 160}px)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={slide.id}
              className={cn(
                "transition-all duration-500 w-full flex justify-center",
                isActive ? "opacity-100 scale-100" : "opacity-40 scale-90",
              )}
              style={{ height: "280px" }}
            >
              <div className="w-full max-w-4xl p-6 bg-[#4a3b39] rounded-3xl flex gap-6 items-center group hover:bg-[#5a4846] transition-colors relative z-10">
                {/* Image Section */}
                <div className="shrink-0 w-80 h-56 relative rounded-2xl overflow-hidden">
                  <Image
                    src={imageConfig.url(slide.img)}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-2xl font-bold leading-tight text-white mb-1">
                    {slide.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <CalendarDays className="w-4 h-4" />
                    <span>{slide.date}</span>
                  </div>

                  <p className="text-gray-200 text-sm line-clamp-2 leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex items-center gap-2 text-red-500 font-semibold cursor-pointer text-sm mt-2 hover:text-red-400 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
