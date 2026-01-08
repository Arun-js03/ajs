"use client";

import Image from "next/image";
import Link from "next/link";
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
  return (
    <section className="w-full py-12 px-3">
      <div className="flex items-center justify-between container mb-10 ">
        <div className="text-center lg:text-left ">
          <h3 className="italic font-bold text-2xl text-black">
            Experience a Seamless Website Development Process
          </h3>
          <h2 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>
        <div>
          <Link
            href="#"
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
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="flex flex-wrap justify-between border-b-2! bg-transparent rounded-none h-auto p-0 mb-8 w-full gap-4 lg:gap-0">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                relative px-4 py-4 font-bold text-black bg-transparent
                hover:text-black transition-colors
                border-b-2 border-transparent

                data-[state=active]:text-black!
                aria-selected:text-black!
                data-selected:text-black!
                data-active:text-black!

                data-[state=active]:bg-transparent!
                aria-selected:bg-transparent!
                data-selected:bg-transparent!
                data-active:bg-transparent!

                data-[state=active]:shadow-none!
                aria-selected:shadow-none!
                data-selected:shadow-none!
                data-active:shadow-none!

                data-[state=active]:border-b-[#D00515]!
                data-[state=active]:border-b-4!
                aria-selected:border-b-[#D00515]!
                data-selected:border-b-[#D00515]!
                data-active:border-b-[#D00515]!

                text-lg
                italic
              "
            >
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
    </section>
  );
}
