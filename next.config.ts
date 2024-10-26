import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['cdn2.thecatapi.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
};

export default nextConfig;
