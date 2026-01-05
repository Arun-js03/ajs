"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { imageConfig } from "@/lib/imageConfig";

const testimonials = [
  {
    // ... (content skipped for brevity in replacement, but I only need to replace the import and the plugin usage. replace_file_content requires contiguous block. I can do two replaces or one big one if they are close. They are far apart (lines 3 and 78). I should use multi_replace.
    // Wait, I can use default_api:multi_replace_file_content for non-contiguous changes. Even better.

    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
  },
  {
    id: 2,
    text: "Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 3,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 4,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  // Duplicates for loop
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
  },
  {
    id: 6,
    text: "Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 7,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 8,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 9,
    text: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
  },
  {
    id: 10,
    text: "Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 11,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
  {
    id: 12,
    text: "Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla.",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#FFFAFA] py-5">
      <div className="text-center">
        <h3 className="italic font-bold">Testimonial</h3>
        <h2 className="font-bold text-2xl">
          Review of Website Development Services
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center">
        <Carousel
          plugins={[
            React.useRef(
              AutoScroll({
                speed: 1000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              })
            ).current,
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="p-1">
                  <TestimonialCard text={testimonial.text} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ text }: { text: string }) {
  return (
    <div className="relative w-[380px] sm:w-[420px]  p-10 sm:h-[470px] mb-10 lg:mb-0 group">
      {/* SVG BACKGROUND */}
      <svg
        viewBox="0 0 500 420"
        className="absolute inset-0 w-full h-[470px] group-hover:base-shadow-lg transition-all duration-500"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M40 10 H460 Q490 10 490 40 V350 Q490 400 440 400 H350 Q320 400 320 370 V340 Q320 320 290 320 H40 Q10 320 10 290 V40 Q10 10 40 10 Z"
          fill="white"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full top-6">
        <Image
          src={imageConfig.url("/quoma.png")}
          alt="Quote"
          width={60}
          height={60}
          className="mb-2 pt-4"
        />

        <p className="text-[15px] leading-[28px]!  text-center font-medium!">
          {text}
        </p>
      </div>
      <div className="bg-white px-2 py-1 rounded-2xl flex items-center gap-4 w-62 absolute bottom-19 left-1/2 translate-x-[-78%]">
        <Image
          src={imageConfig.url("/reviewerImg.png")}
          alt="Viewer"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-center text-[15px]">
          <h4>Eleanor</h4>
          <p className="text-[#190103] ">Founder and CEO</p>
        </div>
      </div>
    </div>
  );
}
