import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: true,
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
