"use client";

import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

interface TechBubbleProps {
  label: string;
  index: number;
}

const _TechBubble = ({ label, index }: TechBubbleProps) => {
  // Simple positioning logic to scatter bubbles
  const positions = [
    "top-10 right-10",
    "top-32 right-32",
    "bottom-20 right-10",
    "bottom-10 right-48",
    "top-20 right-64",
    "bottom-40 right-5",
  ];
  const posClass = positions[index % positions.length];

  // Random visuals for bubbles if we don't have icons
  return (
    <div
      className={`absolute ${posClass} animate-pulse duration-3000`}
      style={{ animationDelay: `${index * 500}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl px-4 py-3 shadow-lg font-bold text-sm transform hover:scale-110 transition-transform cursor-pointer">
        {label}
      </div>
    </div>
  );
};

interface DevTabsContentProps {
  title: string;
  desc: string;
}

const DevTabsContent = ({ title, desc }: DevTabsContentProps) => (
  <div className="container min-h-[400px] lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden relative border border-white/5">
    <Image
      src={imageConfig.url("bg-Process.png")}
      alt="Process"
      fill
      className="object-cover"
    />
    {/* Content Container */}
    <div className="h-full relative z-20">
      {/* Center Text Content */}
      <div className="w-full h-full p-6 py-12 md:p-12 flex flex-col justify-center items-center text-center md:items-start md:text-left space-y-4 md:space-y-6">
        <h3 className="text-xl md:text-3xl font-bold text-white leading-tight max-w-full md:max-w-none">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-full md:max-w-md lg:max-w-2xl xl:max-w-3xl">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

export default DevTabsContent;
