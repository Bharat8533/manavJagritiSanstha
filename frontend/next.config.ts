import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "iskconkathwada.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vrindavantoday.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vedicfeed.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "greator.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shivkhori.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cheggindia.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
