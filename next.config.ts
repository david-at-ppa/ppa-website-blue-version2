import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book",
        destination: "/#assessment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
