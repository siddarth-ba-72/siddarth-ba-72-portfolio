import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/siddarth-ba-72-portfolio",  // must match your GitHub repo name exactly
  images: { unoptimized: true },
};

export default nextConfig;
