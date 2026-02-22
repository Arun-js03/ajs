"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { imageConfig } from "@/lib/imageConfig";

const years = [
  { id: 1, value: 10, suffix: "+ Year", title: "of Experience" },
  { id: 2, value: 1000, suffix: "+ ", title: "Projects" },
];

function CountUp({ to }: { to: number }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const animation = animate(count, to, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export default function AboutUs() {
  return (
    <div className="space-top relative overflow-hidden rounded-2xl">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageConfig.url("/about-banner.png")}
          alt="AJS Aura Team Working Background"
          fill
          className="object-cover"
          priority
        />
        {/* Responsive Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/30"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-6 md:py-16 lg:py-20 px-6 md:px-0">
        <div className="space-y-6 text-white text-left">
          <div className="md:space-y-2 m-0 md:m-auto">
            <h2 className="font-semibold italic text-xl md:text-2xl text-red-500 md:text-white">
              About Us
            </h2>
            <h2 className="font-semibold text-lg md:text-3xl lg:text-4xl leading-tight">
              We Are Your Turnkey Partners in
            </h2>
            <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-[linear-gradient(180deg,#FF8A99_0%,#D00515_78.85%)] bg-clip-text text-transparent leading-tight py-1">
              Web Development
            </h3>
          </div>

          <div className="space-y-4 text-sm md:text-base opacity-90 leading-relaxed max-w-2xl mx-auto md:mx-0">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit
              lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada
              vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl
              tempor nunc nulla. Adipiscing consequat maecenas venenatis elit
              non laoreet varius massa et. Iaculis aenean magna rhoncus integer
              bibendum mauris. Lorem ipsum dolor sit amet consectetur. Sit id
              amet amet velit lorem neque tincidunt mi tortor. Vestibulum
              vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae
              semper egestas enim nisl tempor .
            </p>
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit
              lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada
              vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl
              tempor nunc nulla.
            </p>
          </div>

          <div className="flex justify-start">
            <Link
              href="/about-us"
              className="group inline-flex px-8 py-3 text-sm font-bold text-white gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)] hover:brightness-110"
              style={{
                borderRadius: "10px",
                border: "1px solid transparent",
                background:
                  "linear-gradient(#190103, #190103) padding-box, linear-gradient(110.26deg, #FFF5F6 -4.51%, #D00515 100%) border-box",
              }}
            >
              Learn More
              <Image
                src={imageConfig.url("/learnmore-arrow.png")}
                alt=""
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 mx-auto max-w-[500px] md:max-w-none">
            <Image
              src={imageConfig.url("/aboutUsImg.webp")}
              alt="About Us"
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="text-white grid grid-cols-2 items-center gap-4 md:gap-8 justify-center mt-3">
            {years.map((year) => (
              <div
                key={year.id}
                className="bg-[linear-gradient(180deg,rgba(25,1,3,0.85)_0%,#D00515_100%)] p-2 md:p-8 rounded-2xl justify-center flex flex-col items-center space-y-2 border border-white/10 shadow-lg text-center"
              >
                <h4 className="font-bold text-lg md:text-3xl ">
                  <CountUp to={year.value} />
                  {year.suffix}
                </h4>
                <div className="font-semibold text-base md:text-2xl italic opacity-90">
                  {year.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
