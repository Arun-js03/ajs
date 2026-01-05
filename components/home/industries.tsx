import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

const industries = [
  { id: 1, bg: "#000080CF", icon: "/iconindus.png", description: "Education" },
  { id: 2, bg: "#ADD8E6", icon: "/iconindus.png", description: "Healthcare" },
  { id: 3, bg: "#06402B87", icon: "/iconindus.png", description: "Finance" },
  { id: 4, bg: "#708090", icon: "/iconindus.png", description: "E-Commerce" },
  { id: 5, bg: "#708090", icon: "/iconindus.png", description: "Real Estate" },
  {
    id: 6,
    bg: "#037D7D80",
    icon: "/iconindus.png",
    description: "Travel & Tourism",
  },
  { id: 7, bg: "#800000", icon: "/iconindus.png", description: "Hospitality" },
  {
    id: 8,
    bg: "#2563EB80",
    icon: "/iconindus.png",
    description: "Manufacturing",
  },
  { id: 9, bg: "#DC2626", icon: "/iconindus.png", description: "Retail" },
  { id: 10, bg: "#3B82F6", icon: "/iconindus.png", description: "Logistics" },
  { id: 11, bg: "#14B8A6", icon: "/iconindus.png", description: "Automobile" },
  {
    id: 12,
    bg: "#F3E5F5",
    icon: "/iconindus.png",
    description: "Media & Entertainment",
  },
  {
    id: 13,
    bg: "#EF444480",
    icon: "/iconindus.png",
    description: "Technology",
  },
  {
    id: 14,
    bg: "#FBBF24",
    icon: "/iconindus.png",
    description: "Food & Beverage",
  },
  { id: 15, bg: "#8B5CF6", icon: "/iconindus.png", description: "Energy" },
  { id: 16, bg: "#374151", icon: "/iconindus.png", description: "Sports" },
];

export default function Industries() {
  return (
    <div className="container space-y-4 space">
      <div className="text-center">
        <h3 className="italic font-bold text-2xl">Industries Empower</h3>
        <h2 className="font-bold text-3xl">
          Industries Empowered by Our Website Designing Companys
        </h2>
      </div>
      <div className="grid grid-cols-4 rounded-2xl gap-8">
        {industries.map((industry) => (
          <div
            key={industry.id}
            style={{ backgroundColor: industry.bg }}
            className="flex items-center rounded p-2   transition-all duration-300 ease-in-out
        hover:shadow-xl hover:scale-102"
          >
            <Image
              src={imageConfig.url(industry.icon)}
              alt="industries Icon"
              width={80}
              height={80}
            />
            <h3 className="ml-2 text-white text-lg">{industry.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
