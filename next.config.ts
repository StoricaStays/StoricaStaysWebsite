import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Use basePath only for GitHub Pages - uncomment the line below and replace 'your-repo-name' with actual repo name
  // basePath: '/your-repo-name',
};

export default nextConfig;
