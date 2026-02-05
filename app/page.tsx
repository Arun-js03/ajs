import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Banner from "@/components/home/banner";

const AboutUs = dynamic(() => import("@/components/home/aboutUs"));
const BlogSec = dynamic(() => import("@/components/home/blogSec"));
const ProcessScrollSection = dynamic(
  () => import("@/components/home/devProcess"),
);
const FaqSec = dynamic(() => import("@/components/home/faqSec"));
const Industries = dynamic(() => import("@/components/home/industries"));
const LogoSlider = dynamic(() => import("@/components/home/Logos"));
const OurPortfolio = dynamic(() => import("@/components/home/ourPortfolio"));
const ServicesSlider = dynamic(() => import("@/components/home/ourServices"));
const Testimonial = dynamic(() => import("@/components/home/testimonial"));
const WebsitesTabs = dynamic(() => import("@/components/home/webDevProcess"));
const WhyChoose = dynamic(() => import("@/components/home/whyChoose"));

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Zinavo - Your partner for high-quality web design, development, and SEO services in Bangalore, India.",
};

export default function Page() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <LogoSlider />
      <ServicesSlider />
      <ProcessScrollSection />
      <WebsitesTabs />
      <WhyChoose />
      <OurPortfolio />
      <Industries />
      <BlogSec />
      <Testimonial />
      <FaqSec />
    </div>
  );
}
