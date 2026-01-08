import Image from "next/image";
import Link from "next/link";
import { imageConfig } from "@/lib/imageConfig";
export default function OurPortfolio() {
  return (
    <div className="container">
      <div className="space-y-1 text-center">
        <div className="space-y-3 pb-4">
          <h3 className="italic font-bold text-2xl">Our Portfolio</h3>
          <h2 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="flex justify-between bg-[#D1D6D0] col-span-2 rounded-2xl">
            <div>
              <Image
                src={imageConfig.url("/portfolio.png")}
                alt="Portfolio"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="group inline-flex px-6 py-2 text-sm font-bold text-[#190103] gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)]"
                  style={{
                    background:
                      "linear-gradient(#BCBBB9, #BCBBB9) padding-box, linear-gradient(110.26deg, #190103 -4.51%, #D00515 100%) border-box",
                    borderRadius: "10px",
                    border: "1px solid transparent",
                  }}
                >
                  View more
                  <Image
                    src={imageConfig.url("/viewarrow.png")}
                    alt="Arrow Right"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
              <div className="space-y-1 text-left">
                <h2 className="text-[#190103] text-2xl ">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="text-[#190103] leading-normal!">
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
              src={imageConfig.url("/portfoliothree.png")}
              alt="Portfolio"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="flex justify-between bg-[#D1D6D0] col-span-2 rounded-2xl">
            <div>
              <Image
                src={imageConfig.url("/portfoliofour.png")}
                alt="Portfolio"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="group inline-flex px-6 py-2 text-sm font-bold text-[#190103] gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,5,21,0.5)]"
                  style={{
                    background:
                      "linear-gradient(#BCBBB9, #BCBBB9) padding-box, linear-gradient(110.26deg, #190103 -4.51%, #D00515 100%) border-box",
                    borderRadius: "10px",
                    border: "1px solid transparent",
                  }}
                >
                  View more
                  <Image
                    src={imageConfig.url("/viewarrow.png")}
                    alt="Arrow Right"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
              <div className="space-y-1 text-left">
                <h2 className="text-[#190103] text-2xl ">
                  Lorem ipsum dolor sit amet{" "}
                </h2>
                <p className="text-[#190103] leading-normal!">
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
