import Image from "next/image";
import Link from "next/link";
import { imageConfig } from "@/lib/imageConfig";

const years = [
  { id: 1, value: "13+ Year", title: "of Experience" },
  { id: 2, value: "1000+ ", title: "Projects" },
];
export default function AboutUs() {
  return (
    <div className="space-top relative">
      <Image
        src={imageConfig.url("/about-banner.png")}
        alt="About Us"
        width={1200}
        height={500}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 absolute z-10 top-0 left-0 right-0 h-full">
        <div className="space-y-4  text-white">
          <h4 className="font-semibold italic text-2xl">About Us</h4>

          <h3 className="font-semibold text-3xl">
            We Are Your Turnkey Partners in
          </h3>
          <h2 className="font-semibold text-5xl bg-[linear-gradient(180deg,#FF8A99_0%,#D00515_78.85%)] bg-clip-text text-transparent">
            Web Development
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem
            neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel
            feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor
            nunc nulla. Adipiscing consequat maecenas venenatis elit non laoreet
            varius massa et. Iaculis aenean magna rhoncus integer bibendum
            mauris. Lorem ipsum dolor sit amet consectetur. Sit id amet amet
            velit lorem neque tincidunt mi tortor. Vestibulum vestibulum
            malesuada vel feugiat ut ultrices. Lacus ut vitae semper egestas
            enim nisl tempor .
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sit id amet amet velit lorem
            neque tincidunt mi tortor. Vestibulum vestibulum malesuada vel
            feugiat ut ultrices. Lacus ut vitae semper egestas enim nisl tempor
            nunc nulla.{" "}
          </p>
          <Link
            href="/about"
            className="inline-flex px-6 py-2 text-sm font-bold text-white gap-3"
            style={{
              borderRadius: "10px",
              border: "1px solid transparent",
              background:
                "linear-gradient(#190103, #190103) padding-box, linear-gradient(110.26deg, #FFF5F6 -4.51%, #D00515 100%) border-box",
            }}
          >
            Learn More{" "}
            <Image
              src={imageConfig.url("/learnmore-arrow.png")}
              alt="Arrow Right"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div>
          <div>
            <Image
              src={imageConfig.url("/aboutUsImg.png")}
              alt="About Us"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text-white grid grid-cols-2 items-center gap-8 px-8 justify-center mt-3">
            {years.map((year) => (
              <div
                key={year.id}
                className="bg-[linear-gradient(180deg,rgba(25,1,3,0.75)_0%,#D00515_100%)] px-4 py-8 rounded-2xl justify-center flex flex-col items-center space-y-2"
              >
                <h2 className="font-semibold text-3xl ">{year.value}</h2>
                <h3 className="font-semibold text-3xl italic">{year.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
