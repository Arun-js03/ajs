import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

const industries = [
  {
    id: 1,
    bg: "#000080CF",
    icon: "/education.png",
    description: "Education",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 2,
    bg: "#ADD8E6",
    icon: "/healthcare.png",
    description: "Healthcare",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 3,
    bg: "#06402B87",
    icon: "/financial.png",
    description: "Financial Services",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 4,
    bg: "#708090",
    icon: "/accounting.png",
    description: "Accounting",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 5,
    bg: "#708090",
    icon: "/ecommerce.png",
    description: "E-Commerce",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 6,
    bg: "#037D7D80",
    icon: "/startup.png",
    description: "Start-Ups",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 7,
    bg: "#800000",
    icon: "/garments.png",
    description: "Garments",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 8,
    bg: "#2563EB80",
    icon: "/travel.png",
    description: "Travel",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 9,
    bg: "#DC2626",
    icon: "/restaurent.png",
    description: "Restaurant",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 10,
    bg: "#1F2937",
    icon: "/industries.png",
    description: "Industries",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 11,
    bg: "#3B82F6",
    icon: "/realestate.png",
    description: "Real Estate",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 12,
    bg: "#14B8A6",
    icon: "/itcompany.png",
    description: "IT Companies",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 13,
    bg: "#EF444480",
    icon: "/sports.png",
    description: "Sports",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 14,
    bg: "#FBBF24",
    icon: "/community.png",
    description: "Community",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 15,
    bg: "#8B5CF6",
    icon: "/entertainment.png",
    description: "Entertainment",
    hoverimg: "hoverindustry.jpg",
  },
  {
    id: 16,
    bg: "#374151",
    icon: "/logistics.png",
    description: "Logistics",
    hoverimg: "hoverindustry.jpg",
  },
];

export default function Industries() {
  return (
    <div className="container space-y-4 space">
      <div className="text-center space-y-3">
        <h3 className="italic font-bold text-2xl">Industries Empower</h3>
        <h2 className="font-bold text-3xl">
          Industries Empowered by Our Website Designing Companys
        </h2>
      </div>
      <div className="grid grid-cols-4 rounded-2xl gap-8 mt-10 group">
        {industries.map((industry) => (
          <div
            key={industry.id}
            style={{ backgroundColor: industry.bg }}
            className="relative overflow-hidden group/card flex items-center rounded-lg px-2 py-5 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-102 gap-4"
          >
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0">
              <Image
                src={imageConfig.url(industry.hoverimg)}
                alt="hover background"
                fill
                className="object-cover"
              />
            </div>
            <Image
              src={imageConfig.url(industry.icon)}
              alt="industries Icon"
              width={80}
              height={80}
              className="relative z-10"
            />
            <h3 className="ml-2 text-white text-[26px] italic font-bold relative z-10">
              {industry.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
