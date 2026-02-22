import { imageConfig } from "@/lib/imageConfig";

export default function Banner() {
  return (
    <div>
      <h1 className="sr-only">
        AJS Aura - Professional Web Design & Development Company
      </h1>
      <video
        src={imageConfig.url("/bannerVideo.mp4")}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[50vh] md:h-screen object-cover"
      />
    </div>
  );
}
