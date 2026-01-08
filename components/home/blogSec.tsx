"use client";

import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import VerticalSlider, { slides } from "@/components/home/blogVerticalSlider";
import { Button } from "@/components/ui/button";
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
    // Map 0-1 to 0-(slides.length-1)
    const index = Math.min(
      Math.floor(latest * slides.length),
      slides.length - 1
    );
    setActiveIndex(index);
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 overflow-hidden flex flex-col justify-center">
        <Image
          src={imageConfig.url("/blog-banner.png")}
          alt="Blog"
          fill
          className="object-cover -z-10"
        />
        <div className="container mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-5 gap-6 text-white items-center">
            {/* First column: span 2 */}
            <div className="col-span-2 space-y-12 pl-4">
              <Link
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("testimonials")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex px-4 py-1 text-sm font-bold text-white gap-3 items-center"
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
                />
              </Link>
              <div className="space-y-6">
                <h3 className="italic font-bold text-2xl">Blog</h3>
                <h2 className="text-3xl font-bold">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit
                  lorem neque tincidunt mi tortor. Vestibulum vestibulum
                  malesuada vel feugiat ut ultrices. Vestibulum vel feugiat ut
                  ultrices.
                </p>
                <Button className="text-base font-light py-5 px-6">
                  Explore Our Trending Blogs{" "}
                  <Image
                    src={imageConfig.url("/learnmore-arrow.png")}
                    alt="Arrow Right"
                    width={25}
                    height={25}
                  />
                </Button>
              </div>
            </div>

            {/* Second column: span 3 */}
            <div className="col-span-3">
              <VerticalSlider activeIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
