import AboutUs from "@/components/home/aboutUs";
import Banner from "@/components/home/banner";
import Industries from "@/components/home/industries";
import LogoSlider from "@/components/home/Logos";
import OurPortfolio from "@/components/home/ourPortfolio";
import { ThreeDImageRing } from "@/components/home/ourServices";
import WhyChoose from "@/components/home/whyChoose";

const imageUrls = [
  "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2449540/pexels-photo-2449540.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function Page() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <LogoSlider />
      <ThreeDImageRing images={imageUrls} />
      <WhyChoose />
      <OurPortfolio />
      <Industries />
    </div>
  );
}
