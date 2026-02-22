import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  typedRoutes: true,
  reactCompiler: true,

  basePath: "/ajsaura",
  assetPrefix: "/ajsaura/",

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
