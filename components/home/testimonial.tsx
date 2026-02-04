"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
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
    <section className="bg-[#FFFAFA] py-10 md:py-20" id="testimonials">
      <div className="text-center space-y-3">
        <h3 className="italic font-bold text-xl md:text-2xl">Testimonial</h3>
        <h2 className="font-bold text-2xl md:text-3xl">
          Review of Website Development Services
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center">
        <Carousel
          plugins={[
            AutoScroll({
              speed: 2.5,
              startDelay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
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
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[450px] sm:h-[470px] p-6 sm:p-10 mb-10 lg:mb-0 group mx-auto">
      {/* SVG BACKGROUND */}
      <svg
        viewBox="0 0 500 420"
        className="absolute inset-0 w-full h-full group-hover:drop-shadow-[0_20px_40px_rgba(236,72,153,0.3)] transition-all duration-500 ease-in-out cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M40 10 H460 Q490 10 490 40 V350 Q490 400 440 400 H350 Q320 400 320 370 V340 Q320 320 290 320 H40 Q10 320 10 290 V40 Q10 10 40 10 Z"
          fill="white"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full top-6">
        <Image
          src={imageConfig.url("/gamanxt.png")}
          alt="Quote"
          width={60}
          height={60}
          className="mb-2 pt-4"
        />

        <p className="text-[14px] sm:text-[15px] leading-[24px]! sm:leading-[28px]! text-center font-medium">
          {text}
        </p>
      </div>
      <div className="bg-white px-2 py-1 rounded-2xl shadow-sm border border-gray-100 md:flex lg:block xl:flex items-center gap-3 w-[160px] md:w-[240px] lg:w-[180px] xl:w-[240px] absolute bottom-8 md:bottom-10 lg:bottom-1 xl:bottom-10 -left-45 md:left-1/2 lg:left-1/2 xl:left-1/2 -translate-x-[70%] md:-translate-x-[80%]">
        <Image
          src={imageConfig.url("/reviewerImg.png")}
          alt="Viewer"
          width={40}
          height={40}
          className="rounded-full hidden md:block"
        />
        <div className="text-center text-[15px]">
          <h4>Eleanor</h4>
          <p className="text-[#190103] text-[10px] md:text-sm">
            Founder and CEO
          </p>
        </div>
      </div>
    </div>
  );
}
