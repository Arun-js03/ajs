"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DevTapsContent from "@/components/home/devTaps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { imageConfig } from "@/lib/imageConfig";

const tabData = [
  {
    value: "uiux",
    label: "UI/UX Designer",
    bgImage: "bg-Process.png",
  },
  {
    value: "frontend",
    label: "Front End Technologies",
    bgImage: "bg-Process.png",
  },
  {
    value: "backend",
    label: "Backend Technologies",
    bgImage: "bg-Process.png",
  },
  {
    value: "frameworks",
    label: "Frame Works",
    bgImage: "bg-Process.png",
  },
  {
    value: "marketing",
    label: "Digital Marketing",
    bgImage: "bg-Process.png",
  },
];

export default function WebsitesTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("uiux");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalTabs = tabData.length;
    const step = 1 / totalTabs;
    const index = Math.min(Math.floor(latest / step), totalTabs - 1);
    const newTab = tabData[index].value;
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh]"
      id="webDevProcess"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="w-full py-12 px-3">
          <div className="flex items-center justify-between container mb-10 ">
            <div className="text-center lg:text-left space-y-3">
              <h3 className="italic font-bold text-2xl text-black">
                Experience a Seamless Website Development Process
              </h3>
              <h2 className="font-bold text-3xl">
                Lorem ipsum dolor sit amet consectetur
              </h2>
            </div>
            <div>
              <Link
                href="#whychoose"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("whychoose")?.scrollIntoView({
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

          {/* Tabs Header */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex flex-wrap justify-between border-b! border-black bg-transparent rounded-none h-auto p-0 mb-8 w-full gap-4 lg:gap-0">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="
                    cursor-pointer
                    relative px-4 py-4 font-bold text-black bg-transparent
                    hover:text-black transition-colors

                    data-[state=active]:text-black!
                    aria-selected:text-black!
                    data-selected:text-black!
                    data-active:text-black!

                    text-lg
                    italic
                  "
                >
                  {activeTab === tab.value && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute bottom-0 left-0 w-full h-[4px] bg-[#D00515] shadow-[0_0_20px_#D00515] rounded-2xl"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                      }}
                    >
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-6 border-t-[#D00515]" />
                    </motion.div>
                  )}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            {tabData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="mt-0 focus:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <DevTapsContent
                  title={`Lorem ipsum dolor sit amet ${tab.label}`}
                  desc="Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices. Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices."
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
