"use client";

import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import VerticalSlider, { slides } from "@/components/home/blogVerticalSlider";
import { imageConfig } from "@/lib/imageConfig";

export default function BlogSec() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest: number) => {
    // Only switch slides on scroll for screens larger than 1024px (Laptop)
    if (window.innerWidth < 1024) return;

    // Map 0-1 to 0-(slides.length-1)
    const index = Math.min(
      Math.floor(latest * slides.length),
      slides.length - 1,
    );
    setActiveIndex(index);
  });

  return (
    <div
      ref={containerRef}
      className="relative lg:min-h-screen lg:h-(--container-height)"
      style={
        {
          "--container-height": `${slides.length * 100}vh`,
        } as React.CSSProperties
      }
    >
      <div className="relative lg:sticky lg:top-0 overflow-hidden flex flex-col justify-center py-10 lg:py-0">
        <Image
          src={imageConfig.url("/blog-banner.png")}
          alt="Zinavo Blog Background"
          fill
          className="object-cover -z-10"
        />
        <div className="container mx-auto px-4 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-white items-center">
            {/* First column: span 2 */}
            <div className="md:col-span-2 space-y-8 md:space-y-12 md:pl-4 text-left">
              <Link
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("testimonials")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group lg:inline-flex px-4 py-1 text-sm font-bold text-white gap-3 items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)] hover:brightness-110 mx-auto md:mx-0 hidden "
                style={{
                  borderRadius: "10px",
                  border: "1px solid transparent",
                  background:
                    "linear-gradient(#190103, #190103) padding-box, linear-gradient(110.26deg, #FFF5F6 -4.51%, #D00515 100%) border-box",
                }}
              >
                Next
                <Image
                  src={imageConfig.url("/nextdownarrow.png")}
                  alt="Arrow Right"
                  width={25}
                  height={25}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <div className="space-y-4 md:space-y-6">
                <h2 className="italic font-bold text-xl md:text-2xl">Blog</h2>
                <h3 className="text-2xl md:text-4xl font-bold">
                  Latest Insights & News
                </h3>
                <p className="text-gray-200 max-w-lg mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit
                  lorem neque tincidunt mi tortor. Vestibulum vestibulum
                  malesuada vel feugiat ut ultrices. Vestibulum vel feugiat ut
                  ultrices.
                </p>
                <Link
                  href="#"
                  className="group relative text-base font-light py-3 px-4 md:px-6 flex items-center gap-3 bg-primary text-white rounded-lg w-fit overflow-hidden transition-all duration-300 hover:gap-4 hover:pr-3 hover:shadow-lg mx-auto md:mx-0"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    Explore Our Trending Blogs
                  </span>
                  <Image
                    src={imageConfig.url("/learnmore-arrow.png")}
                    alt="Arrow Right"
                    width={25}
                    height={25}
                    className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Link>
              </div>
            </div>

            {/* Second column: span 3 */}
            <div className="md:col-span-3 hidden lg:block">
              <VerticalSlider activeIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
