"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogVerticalSlider.css";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

const slides = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur amet consectetur",
    date: "05-July-2025",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem Vestibulum vestibulum malesuada vel feugiat ut ultrices.",
    img: "/blogimage.png",
  },
];

export default function VerticalSlider() {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    className: "vertical-slider-custom",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[680px]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="focus:outline-none py-4">
            <div className="slide-inner p-4 bg-[#4a3b39] rounded-3xl flex gap-6 items-center group transition-all duration-300 hover:bg-[#5a4846]">
              {/* Image Section */}
              <div className="shrink-0 w-80 h-65 relative rounded-2xl overflow-hidden">
                <Image
                  src={imageConfig.url(slide.img)}
                  alt={slide.title}
                  width={192}
                  height={192}
                  className="object-cover transition-transform duration-500 h-65 w-full group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col gap-2 flex-1 relative">
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {slide.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <CalendarDays className="w-4 h-4" />
                  <span>{slide.date}</span>
                </div>

                <p className=" text-sm line-clamp-2 leading-relaxed">
                  {slide.desc}
                </p>

                <div className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer text-sm mt-1 hover:text-red-500 transition-colors">
                  Read More
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
