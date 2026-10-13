import type { NextConfig } from "next";

// Empty for root-domain hosts (Cloudflare); GitHub Pages sets BASE_PATH to the repo sub-path.
const basePath = process.env.BASE_PATH ?? "";

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
