import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true' ? '/catopedia' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.thecatapi.com',
      },
      {
        protocol: 'https',
        hostname: '*.tumblr.com',
      },
    ],
  }
};

export default nextConfig;
