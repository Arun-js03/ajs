import VerticalSlider from "@/components/home/blogVerticalSlider";
import { Button } from "@/components/ui/button";

export default function BlogSec() {
  return (
    <div className="bg-[#190103] overflow-hidden">
      <div className="container">
        <div className=" mx-auto grid grid-cols-5 gap-6 text-white ">
          {/* First column: span 1 */}
          <div className="col-span-2 space-y-6 space-top">
            <Button
              className="border border-transparent bg-transparent rounded-2xl
                       [border-image:linear-gradient(110.26deg,#FFF5F6_-4.51%,#D00515_100%)_1] px-6 py-3"
            >
              Next
            </Button>
            <h3 className="italic font-bold text-2xl">Blog</h3>
            <h2 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit
              lorem neque tincidunt mi tortor. Vestibulum vestibulum malesuada
              vel feugiat ut ultrices. Vestibulum vel feugiat ut ultrices.
            </p>
            <Button className="text-base font-light py-5 px-6">
              Explore Our Trending Blogs
            </Button>
          </div>

          {/* Second column: span 3 */}
          <div className="col-span-3">
            <VerticalSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
