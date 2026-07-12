import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 🎯 ADDED: Required for static HTML builds (GitHub Pages & Cloudflare Pages)
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // 🎯 ADDED: Disables server-side image optimization so raw images can load statically
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;