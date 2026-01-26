import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  typedRoutes: true,
  reactCompiler: true,

  basePath: "/zinavo",
  assetPrefix: "/zinavo/",

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
