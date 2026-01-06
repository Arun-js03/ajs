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

interface DevTapsContentProps {
  title: string;
  desc: string;
}

const DevTapsContent = ({ title, desc }: DevTapsContentProps) => (
  <div className="w-full h-[500px] rounded-3xl overflow-hidden relative border border-white/5">
    <Image
      src={imageConfig.url("bg-Process.png")}
      alt="Process"
      fill
      className="object-cover"
    />
    {/* Grid Content */}
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 relative z-20">
      {/* Left: Text Content */}
      <div className="p-12 flex flex-col justify-center space-y-6">
        <h3 className="text-3xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-white leading-relaxed text-base!">{desc}</p>
      </div>
    </div>
  </div>
);

export default DevTapsContent;
