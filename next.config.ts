import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thefusionapps.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
