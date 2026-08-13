import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book",
        destination: "/#assessment",
        permanent: true,
      },
      {
        source: "/heritage",
        destination: "/",
        permanent: true,
      },
      {
        source: "/heritage/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
