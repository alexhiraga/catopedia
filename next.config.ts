import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/catopedia',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
};

export default nextConfig;
