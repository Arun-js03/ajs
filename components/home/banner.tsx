import Image from "next/image";
import { imageConfig } from "@/lib/imageConfig";

export default function Banner() {
  return (
    <div>
      <Image
        src={imageConfig.url("/homeBanner.jpg")}
        width={1920}
        height={300}
        alt="Banner"
        className=" w-full"
        priority
      />
    </div>
  );
}
