import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare Pages / Workers static assets.
  // Do not use OpenNext — this site has no server runtime.
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
