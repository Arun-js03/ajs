"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    // Only switch tabs on scroll for screens larger than 768px (Tablet/Laptop)
    if (window.innerWidth < 768) return;

    const totalTabs = tabData.length;
    const step = 1 / totalTabs;
    const index = Math.min(Math.floor(latest / step), totalTabs - 1);
    const newTab = tabData[index].value;
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  });

  const handlePrev = () => {
    const currentIndex = tabData.findIndex((tab) => tab.value === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabData[currentIndex - 1].value);
    }
  };

  const handleNext = () => {
    const currentIndex = tabData.findIndex((tab) => tab.value === activeTab);
    if (currentIndex < tabData.length - 1) {
      setActiveTab(tabData[currentIndex + 1].value);
    }
  };

  // Mobile: Scroll active tab into view when changed via Next/Prev
  useEffect(() => {
    const handleScrollIntoView = () => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        const activeTrigger = document.querySelector(
          '[data-slot="tabs-trigger"][data-active]',
        );
        if (activeTrigger) {
          activeTrigger.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }
    };

    // Small delay to ensure the DOM has updated the data-active attribute
    const timeoutId = setTimeout(handleScrollIntoView, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative md:h-[300vh] h-auto py-12 md:py-0"
      id="webDevProcess"
    >
      <div className="md:sticky md:top-0 md:h-screen flex flex-col md:justify-center bg-white md:overflow-hidden py-4 overflow-visible">
        <div className="w-full px-4 lg:px-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full flex flex-col h-auto md:h-full"
          >
            <div className=" lg:shadow-none py-4 md:py-0 md:static md:bg-transparent">
              <div className="flex flex-col md:flex-row md:items-center justify-between container mx-auto mb-4 md:mb-10 gap-4">
                <div className="md:text-left text-center space-y-2 md:space-y-3 px-4 md:px-0">
                  <h3 className="italic font-bold text-xl md:text-2xl text-black">
                    Experience a Seamless Website Development Process
                  </h3>
                  <h2 className="font-bold text-2xl md:text-3xl text-black">
                    Lorem ipsum dolor sit amet consectetur
                  </h2>
                  <h2 className="font-bold text-lg md:text-3xl text-black md:hidden">
                    {tabData.find((t) => t.value === activeTab)?.label}
                  </h2>
                </div>
                <div className="shrink-0 hidden md:block">
                  <Link
                    href="#whychoose"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("whychoose")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="group inline-flex px-6 py-3 text-sm font-bold text-[#190103] gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)]"
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

              <TabsList
                className="
                md:flex overflow-x-auto no-scrollbar
                justify-start md:justify-between border-b! border-black bg-white md:bg-transparent
                rounded-none h-auto p-0 mb-4 w-full gap-2 md:gap-0
                scrollbar-hide px-4 md:px-0 hidden
              "
              >
                {tabData.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="
                      cursor-pointer whitespace-nowrap
                      relative px-4 py-4 font-bold text-black bg-transparent
                      hover:text-black transition-colors

                      data-[state=active]:text-black!
                      aria-selected:text-black!
                      data-selected:text-black!
                      data-active:text-black!

                      text-sm md:text-lg
                      italic
                    "
                  >
                    {activeTab === tab.value && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute bottom-0 left-0 w-full h-[3px] md:h-[4px] bg-[#D00515]  rounded-2xl"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                        }}
                      >
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 md:border-l-[6px] border-l-transparent border-r-4 md:border-r-[6px] border-r-transparent border-t-4 md:border-t-6 border-t-[#D00515]" />
                      </motion.div>
                    )}
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Content */}
            <div className="relative group/nav">
              {/* Left Navigation (Mobile Only) */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 lg:hidden z-30">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeTab === tabData[0].value}
                  className="group flex items-center justify-center w-10 h-10 transition-all duration-300 disabled:opacity-40 pointer-events-auto active:scale-90 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(110.26deg, #D00515 -4.51%, #190103 100%)",
                    borderRadius: "100px",
                    boxShadow: "0 0 15px rgba(208,5,21,0.3)",
                  }}
                  aria-label="Previous tab"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Right Navigation (Mobile Only) */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 lg:hidden z-30">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeTab === tabData[tabData.length - 1].value}
                  className="group flex items-center justify-center w-10 h-10 transition-all duration-300 disabled:opacity-40 pointer-events-auto active:scale-90 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(110.26deg, #D00515 -4.51%, #190103 100%)",
                    borderRadius: "100px",
                    boxShadow: "0 0 15px rgba(208,5,21,0.3)",
                  }}
                  aria-label="Next tab"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

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
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
