import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
};

export default nextConfig;
