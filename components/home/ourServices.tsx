"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";

const ServicesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      id: 1,
      image: "seriviceslider.jpg",
      title: "Web Development",
      description: "Custom web solutions",
    },
    {
      id: 2,
      image: "seriviceslider.jpg",
      title: "Digital Solutions",
      description: "Innovative technology",
    },
    {
      id: 3,
      image: "seriviceslider.jpg",
      title: "Code Architecture",
      description: "Scalable systems",
    },
    {
      id: 4,
      image: "seriviceslider.jpg",
      title: "Mobile Apps",
      description: "Cross-platform development",
    },
    {
      id: 5,
      image: "seriviceslider.jpg",
      title: "Cloud Solutions",
      description: "Scalable infrastructure",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

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
  const size = 60;
  return (
    <div className="relative py-10 flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={imageConfig.url("/Servicebanner.png")}
        alt="ourServiceBanner"
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Header */}
      <div className="relative z-10 space-y-1 text-center">
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
      <div className="relative w-[400px] mt-10 flex items-center justify-center">
        {/* Center Logo */}
        <div className="absolute z-20">
          <div
            className="relative inline-flex items-center justify-center"
            style={{ width: size, height: size }}
          >
            {/* Smooth shadow glow */}
            <div
              className="absolute inset-0 bg-[#D00515] opacity-40 blur-[30px] scale-125 animate-logo-glow"
              aria-hidden
            />

            {/* Logo */}
            <Image
              src={imageConfig.url("zinavologo.png")}
              alt="logo"
              width={size}
              height={size}
              className="relative z-10"
              priority
            />
          </div>
        </div>

        {/* Rotating Title Ring */}
        <motion.div
          className="absolute w-full top-32 h-full flex items-center justify-center pointer-events-none"
          animate={{
            rotate: -activeIndex * (360 / slides.length),
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            ease: "easeInOut",
            duration: 0.8,
          }}
        >
          {slides.map((slide, index) => {
            const angle = (360 / slides.length) * index;
            // Radius for text position
            const radius = 180;

            return (
              <div
                key={slide.id}
                className="absolute top-1/2 left-1/2 origin-center"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 400 400"
                  className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
                >
                  <title>{slide.title}</title>
                  <path
                    id={`curve-${index}`}
                    d={`M 200, 200 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
                      radius * 2
                    },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                    fill="transparent"
                  />
                  <text
                    className="text-xl font-semibold fill-white"
                    textAnchor="middle"
                    letterSpacing="0.1em"
                  >
                    <textPath
                      href={`#curve-${index}`}
                      startOffset="25%"
                      className={`transition-opacity duration-500 fill-white`}
                      style={{
                        opacity: index === activeIndex ? 1 : 0.6,
                        filter:
                          index === activeIndex
                            ? "brightness(100%)"
                            : "brightness(60%)",
                      }}
                    >
                      {slide.title}
                    </textPath>
                  </text>
                </svg>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSlider;
