import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  typedRoutes: true,
  reactCompiler: true,

  basePath: "/zinavo",
  assetPrefix: "/zinavo/",
};

export default nextConfig;
