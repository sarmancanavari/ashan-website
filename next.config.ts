import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Expose app version to the browser (used in footer build label)
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
  },
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
