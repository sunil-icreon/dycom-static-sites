import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eadn-wc03-3197147.nxedge.io',
      },
    ],
  },
};

export default nextConfig;
