import AboutUs from "@/components/home/aboutUs";
import Banner from "@/components/home/banner";
import BlogSec from "@/components/home/blogSec";
import ProcessScrollSection from "@/components/home/devProcess";
import FaqSec from "@/components/home/faqSec";
import Industries from "@/components/home/industries";
import LogoSlider from "@/components/home/Logos";
import OurPortfolio from "@/components/home/ourPortfolio";
import ServicesSlider from "@/components/home/ourServices";
import Testimonial from "@/components/home/testimonial";
import WebsitesTabs from "@/components/home/webDevProcess";
import WhyChoose from "@/components/home/whyChoose";

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
