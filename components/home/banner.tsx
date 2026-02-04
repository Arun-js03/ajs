import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

export default function Banner() {
  return (
    <div>
      <h1 className="sr-only">
        Zinavo - Professional Web Design & Development Company
      </h1>
      <Image
        src={imageConfig.url("/homeBanner.jpg")}
        width={1920}
        height={300}
        alt="Zinavo Web Design Services Banner"
        className="w-full h-[50vh] md:h-screen object-cover"
        priority
      />
    </div>
  );
}
