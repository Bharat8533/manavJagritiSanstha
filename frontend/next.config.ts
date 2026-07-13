import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

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
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/manavjagritisanstha/assets/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
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
    unoptimized: true,
  },
  // output: "export",
};


/** @type {import('next').NextConfig} */

export default withNextIntl(nextConfig);
