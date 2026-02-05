"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { imageConfig } from "@/lib/imageConfig";

export default function ProcessScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  const pulseLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const processList = [
    {
      id: 1,
      title: "Requirement Gathering",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 2,
      title: "Planning & Analysis",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 3,
      title: "Design Phase",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 4,
      title: "Development",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 5,
      title: "Testing & QA",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 6,
      title: "Deployment",
      image: "/processImg.webp",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
  ];

  return (
    <div className="mt-10 md:mt-20 md:mb-10 lg:mb-0">
      {/* Header - Responsive */}
      <div
        className="container mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-0"
        id="dev-process"
      >
        <div className="md:text-left text-center space-y-3 max-w-2xl">
          <h3 className="text-xl md:text-2xl font-bold italic text-black">
            Experience a Seamless Website Development Process
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>
        <div className="shrink-0">
          <Link
            href="/#webDevProcess"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("webDevProcess")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group md:inline-flex px-6 py-3 text-sm font-bold text-[#190103] gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)] hidden "
            style={{
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(110.26deg, #190103 -4.51%, #D00515 100%) border-box",
              borderRadius: "10px",
              border: "1px solid transparent",
            }}
          >
            Next
            <Image
              src={imageConfig.url("/downarrow.png")}
              alt="Arrow Right"
              width={20}
              height={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Sticky Scroll Section - Visible on lg and above */}
      <div ref={targetRef} className="hidden md:block relative h-[300vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[300vw]">
            {processList.map((item) => (
              <div
                key={item.id}
                className="lg:w-[50vw] w-[50vw] md:w-[50vw] shrink-0 px-20"
              >
                <div className="relative flex items-center space-y-16">
                  {/* Image */}
                  <Image
                    src={imageConfig.url(item.image)}
                    alt={item.title}
                    width={290}
                    height={290}
                    className="h-50 w-70 object-cover pl-20"
                  />

                  {/* Rotated Title */}
                  <div>
                    <div className="absolute -left-14 top-25">
                      <h2
                        className="
                        rotate-270
                        relative
                        w-40
                        pb-3 text-center
                        text-3xl
                        font-bold
                        after:absolute
                        after:-bottom-[4px] after:left-0
                        after:h-px after:w-full
                        after:bg-red-600/60 after:blur-sm
                      "
                      >
                        {item.title}
                        <span className="border-b-[#4C3F3C] absolute -left-8 bottom-0 w-60 border-b-3 border-dashed"></span>
                      </h2>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-black font-medium">{item.describe}</p>
              </div>
            ))}
          </motion.div>
          <div className="relative z-99 mx-auto container">
            <div className="relative border-b-[#D00515] md:-translate-y-105 lg:-translate-y-65 xl:-translate-y-45 border-b-4">
              <motion.div
                style={{ left: pulseLeft }}
                className="absolute -top-[8px] h-5 w-5 -translate-x-1/2 rounded-full bg-[#D00515] shadow-[0_0_12px_3px_#D00515]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Vertical List Section - Visible below lg */}
      <div className="md:hidden container mx-auto px-4 space-y-16 md:pb-20">
        {processList.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#D00515] text-white flex items-center justify-center rounded-full font-bold text-xl z-10 shadow-[0_0_15px_rgba(208,5,21,0.4)]">
                {index + 1}
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={imageConfig.url(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-4 max-w-lg">
              <h3 className="text-xl font-bold text-black inline-block relative border-b-2 border-dashed border-[#D00515]/30 pb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {item.describe}
              </p>
            </div>
            {/* Connector Line */}
            {index !== processList.length - 1 && (
              <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 border-l-2 border-dashed border-[#D00515]/30 -translate-x-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
