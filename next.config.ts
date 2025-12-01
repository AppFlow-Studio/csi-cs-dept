import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io", // Microlink Image Preview
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash Images
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
