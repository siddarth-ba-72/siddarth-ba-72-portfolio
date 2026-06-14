import type { NextConfig } from "next";

const basePath = "/siddarth-ba-72-portfolio";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // use this to manually prefix public assets
  },
  images: { unoptimized: true },
};

export default nextConfig;
