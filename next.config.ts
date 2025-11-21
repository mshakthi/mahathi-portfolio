// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/mahathi-portfolio" : "",
  assetPrefix: isProd ? "/mahathi-portfolio/" : "",
  // keep any existing config options here (images, eslint, etc.)
};

export default nextConfig;