import type { NextConfig } from 'next';

// 🎯 1. Grab the environment variable from your GitHub Actions workflow
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // 🎯 2. Required for static HTML builds (GitHub Pages & Cloudflare Pages)
  output: 'export',
  
  // 🎯 3. Tells Next.js to natively route all assets through your GitHub repository subfolder
  basePath: basePath,
  assetPrefix: basePath,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Disables server-side image optimization so raw images can load statically
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