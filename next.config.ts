import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tr",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
