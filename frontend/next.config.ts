// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "promos.makemytrip.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.holidify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.hdqwalls.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "traveltradejournal.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "harshidtravels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-del1-2.cdn.whatsapp.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.indiagodigital.in",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    //appDir: true,
  },
};

export default nextConfig;
