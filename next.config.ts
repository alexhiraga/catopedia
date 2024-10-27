import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_PUBLIC_OUTPUT === 'export' ? 'export' : undefined,
  basePath: '/catopedia',
  assetPrefix: '/catopedia/',
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
