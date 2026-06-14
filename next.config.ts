import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/Siddarth-Ambannavar-Portfolio",  // must match your GitHub repo name exactly
  images: { unoptimized: true },
};

export default nextConfig;
