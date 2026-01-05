"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      id: 1,
      image: "aboutUsImg.png",
      title: "Web Development",
      description: "Custom web solutions",
    },
    {
      id: 2,
      image: "aboutUsImg.png",
      title: "Digital Solutions",
      description: "Innovative technology",
    },
    {
      id: 3,
      image: "aboutUsImg.png",
      title: "Code Architecture",
      description: "Scalable systems",
    },
    {
      id: 4,
      image: "aboutUsImg.png",
      title: "Mobile Apps",
      description: "Cross-platform development",
    },
    {
      id: 5,
      image: "aboutUsImg.png",
      title: "Cloud Solutions",
      description: "Scalable infrastructure",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getSlideStyles = (index: number) => {
    const totalSlides = slides.length;
    let diff = index - activeIndex;

    // Handle wrapping for full 360 rotation
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;

    // Center slide
    if (diff === 0) {
      return {
        transform: "translateX(0%) translateZ(0px) scale(1, 1)",
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1)",
      };
    }
    // Left side slides
    else if (diff === -1) {
      return {
        transform:
          "translateX(-110%) translateZ(150px) rotateY(35deg) scale(0.95, 1)",
        zIndex: 40,
        opacity: 0.85,
        filter: "brightness(0.7)",
      };
    }
    // Right side slides
    else if (diff === 1) {
      return {
        transform:
          "translateX(110%) translateZ(150px) rotateY(-35deg) scale(0.95, 1)",
        zIndex: 40,
        opacity: 0.85,
        filter: "brightness(0.7)",
      };
    }

    // Hidden slides (allows full 360 rotation)
    return {
      transform: "translateX(0%) translateZ(-200px) scale(0.5, 1)",
      zIndex: 0,
      opacity: 0,
      filter: "brightness(0)",
    };
  };

  return (
    <div className="py-10 bg-linear-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center  overflow-hidden">
      {/* Header */}
      <div className="space-y-1 text-center">
        <h3 className="italic font-semibold text-2xl text-white">
          Our Services
        </h3>
        <h2 className="font-bold text-3xl text-white">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>

      {/* Slider Container with 3D Perspective */}
      <div
        className="relative w-full max-w-10xl h-[500px] flex items-center justify-center"
        style={{ perspective: "800px" }}
      >
        {/* Slides */}
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {slides.map((slide, index) => {
            const styles = getSlideStyles(index);

            return (
              <Button
                key={slide.id}
                type="button"
                className="absolute top-1/2 left-1/2 w-full max-w-md h-96 cursor-pointer transition-all duration-700 ease-out bg-transparent border-none p-0 focus:outline-none"
                style={{
                  transform: `translate(-50%, -50%) ${styles.transform}`,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                  filter: styles.filter,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="relative w-full h-full overflow-hidden shadow-2xl border border-white/10"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={imageConfig.url(slide.image)}
                    alt={slide.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              </Button>
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="relative w-[400px] h-[400px] mt-10 flex items-center justify-center">
        {/* Center Logo */}
        <div className="absolute z-20">
          <Image
            src={imageConfig.url("zinavologo.png")}
            alt="logo"
            width={60}
            height={60}
          />
        </div>

        {/* Rotating Title Ring */}
        <div
          className="absolute w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: `rotate(${-activeIndex * (360 / slides.length)}deg)`,
          }}
        >
          {slides.map((slide, index) => {
            const angle = (360 / slides.length) * index;

            return (
              <div
                key={slide.id}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  transform: `
              rotate(${angle}deg)
              translateY(-180px)
              rotate(${-angle}deg)
            `,
                }}
              >
                <p
                  className={`text-white text-sm font-semibold tracking-wide transition-all duration-500 ${
                    index === activeIndex
                      ? "opacity-100 scale-110"
                      : "opacity-60"
                  }`}
                >
                  {slide.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
