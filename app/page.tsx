import AboutUs from "@/components/home/aboutUs";
import Banner from "@/components/home/banner";
import Industries from "@/components/home/industries";
import LogoSlider from "@/components/home/Logos";
import OurPortfolio from "@/components/home/ourPortfolio";
import ServicesSlider from "@/components/home/ourServices";
import Testimonial from "@/components/home/testimonial";
import WhyChoose from "@/components/home/whyChoose";


export default function Page() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <LogoSlider />
      <ServicesSlider />
      <WhyChoose />
      <OurPortfolio />
      <Industries />
      <Testimonial />
    </div>
  );
}
