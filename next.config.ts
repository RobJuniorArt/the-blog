import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
        search: "",
      },
    ],
  },
  cacheComponents: true,
  cacheLife: {
    seconds: {
      stale: 0,
      revalidate: 10,
      expire: 300,
    },
  },
};

export default nextConfig;
