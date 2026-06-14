import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",          // static HTML export
  images: { unoptimized: true }, // GitHub Pages can't run Next.js image optimisation
};

export default nextConfig;
