"use client";
import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

const logos = [
  "/auelogo.png",
  "/baggitlogo.png",
  "/playboy.png",
  "/sharplogo.png",
  "/magical.png",
  "/myflower.png",
  "/tamilan.png",
];

interface Props {
  direction?: "left" | "right";
  speed?: number;
}

export default function LogoSlider({ direction = "left", speed = 25 }: Props) {
  const repeatLogos = [...logos, ...logos, ...logos, ...logos].map(
    (logo, index) => ({
      id: `${logo}-${index}`,
      src: logo,
    }),
  );

  return (
    <div className="w-full bg-white py-8 md:py-16 container relative">
      <div className="overflow-hidden relative after:absolute after:top-0 after:left-0 after:h-full after:w-20 after:bg-linear-to-r after:from-white after:to-transparent after:z-10 before:absolute before:top-0 before:right-0 before:h-full before:w-20 before:bg-linear-to-l before:from-white before:to-transparent before:z-10">
        <div
          className={`flex gap-12 w-max ${
            direction === "left" ? "slider-left" : "slider-right"
          }`}
          style={
            {
              "--speed": `${speed}s`,
              willChange: "transform",
            } as React.CSSProperties
          }
        >
          {repeatLogos.map((logo) => (
            <div
              key={logo.id}
              className="min-w-[100px] h-24 flex items-center justify-center"
            >
              <Image
                src={imageConfig.url(logo.src)}
                width={120}
                height={120}
                alt={`${logo.src.replace("/", "").replace("logo", "").replace(".png", "")} brand logo`}
                className="max-h-full w-auto object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
