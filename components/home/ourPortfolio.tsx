import Image from "next/image";
import { Button } from "@/components/ui/button";
import { imageConfig } from "@/lib/imageConfig";
export default function OurPortfolio() {
  return (
    <div className="container">
      <div className="space-y-1 text-center">
        <h3 className="italic font-bold text-2xl">Our Portfolio</h3>
        <h2 className="font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="flex justify-between bg-[#BCBBB9] col-span-2 rounded-2xl">
            <div>
              <Image
                src={imageConfig.url("/portfolioOne.png")}
                alt="Portfolio"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <Button>View more</Button>
              </div>
              <div className="space-y-1 text-left">
                <h2 className="text-white text-2xl ">
                  Lorem ipsum dolor sit amet{" "}
                </h2>
                <p className="text-white leading-normal!">
                  Lorem ipsum dolor sit amet consectetur. Sit id amet amet
                  malesuada vel feugiat ut ultrices.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#BCBBB9] col-span-1 rounded-2xl">
            <Image
              src={imageConfig.url("/portfoliosec.png")}
              alt="Portfolio"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="bg-[#BCBBB9] col-span-1 rounded-2xl">
            <Image
              src={imageConfig.url("/portfolioThree.png")}
              alt="Portfolio"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="flex justify-between bg-[#BCBBB9] col-span-2 rounded-2xl">
            <div>
              <Image
                src={imageConfig.url("/portfolioFour.png")}
                alt="Portfolio"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <Button>View more</Button>
              </div>
              <div className="space-y-1 text-left">
                <h2 className="text-white text-2xl ">
                  Lorem ipsum dolor sit amet{" "}
                </h2>
                <p className="text-white leading-normal!">
                  Lorem ipsum dolor sit amet consectetur. Sit id amet amet
                  malesuada vel feugiat ut ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
