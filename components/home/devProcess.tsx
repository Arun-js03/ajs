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
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 2,
      title: "Planning & Analysis",
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 3,
      title: "Planning & Analysis",
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 4,
      title: "Planning & Analysis",
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 5,
      title: "Planning & Analysis",
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
    {
      id: 6,
      title: "Planning & Analysis",
      image: "/processImg.png",
      describe:
        "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet varius massa et. Iaculis aenean magna rhoncus integer bibendum mauris.",
    },
  ];

  return (
    <div className="mt-20">
      {/* Header - Static */}

      {/* Sticky Scroll Section */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div
            className="container mx-auto mb-10 flex items-center justify-between"
            id="dev-process"
          >
            <div className="text-center lg:text-left space-y-3">
              <h3 className="text-2xl font-bold italic text-black">
                Experience a Seamless Website Development Process
              </h3>
              <h2 className="text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur
              </h2>
            </div>
            <div>
              <Link
                href="/#webDevProcess"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("webDevProcess")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex px-4 py-2 text-sm font-bold text-[#190103] gap-3"
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
                />
              </Link>
            </div>
          </div>
          <motion.div style={{ x }} className="flex w-[300vw]">
            {processList.map((item) => (
              <div key={item.id} className="w-[50vw] shrink-0 px-20">
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
                <p className="mt-4 text-black! font-medium!">{item.describe}</p>
              </div>
            ))}
          </motion.div>
          <div className="relative z-999 mx-auto container">
            <div className="relative border-b-[#D00515] -translate-y-45 border-b-4">
              <motion.div
                style={{ left: pulseLeft }}
                className="absolute -top-[8px] h-5 w-5 -translate-x-1/2 rounded-full bg-[#D00515] shadow-[0_0_12px_3px_#D00515]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
