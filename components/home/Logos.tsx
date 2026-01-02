"use client";
import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

const logos = [
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
  "/infinitelogo.png",
];

interface Props {
  direction?: "left" | "right";
  speed?: number;
}

export default function LogoSlider({ direction = "left", speed = 25 }: Props) {
  const repeatLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-white py-10 container">
      <div
        className={`flex gap-12 ${
          direction === "left" ? "slider-left" : "slider-right"
        }`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {repeatLogos.map((logo, index) => (
          <div
            key={index}
            className="min-w-[100px] flex items-center justify-center"
          >
            <Image
              src={imageConfig.url(logo)}
              width={100}
              height={100}
              alt="brand"
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
